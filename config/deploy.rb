# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'DeCaraLimpa'
set :repo_url, 'git@github.com:cristianounix/transparencia-brasil.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

# Default deploy_to directory is /var/www/my_app
set :deploy_to, '~/decaralimpa'
# set :deploy_to, '/var/www/my_app'

set :rbenv_ruby, '2.1.0'
set :bundle_flags, '--quiet'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
#set :linked_dirs, %w{log tmp/pids tmp/cache tmp/sockets vendor/cache}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

#set :bower_flags, '--quiet --config.interactive=false'
#set :bower_roles, :web
set :bower_target_path, "#{release_path}/front/"
set :grunt_tasks, 'grunt:build'

set :grunt_target_path, -> { "#{release_path}/front" }
set :npm_target_path, -> { "#{release_path}/front" }

# it's possible to pass any option but you need to keep in mind that net/ssh understand limited list of options
# you can see them in [net/ssh documentation](http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start)
#set :ssh_options, forward_agent: true, auth_methods: %w(publickey password)

#before 'deploy:updated', 'grunt:build'

namespace :grunt do
  task :production do
    on roles(:app), in: :sequence, wait: 5 do
      execute :grunt, 'build'
    end
  end
end

#before 'deploy:updated', 'grunt:production'

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      #execute :touch, release_path.join('tmp/restart.txt')
      #execute :grunt, 'build'
    end
  end

  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end
end
