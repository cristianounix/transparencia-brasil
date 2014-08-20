module Transparencia
  class Candidato < Transparencia::Base
    ENTRY_POINT = Settings.transparencia.services.candidatos

    def self.find_all(q='estado=SP&partido=1')
      key = ENTRY_POINT+'?'+q
      candidatos = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        binding.pry
        JSON.parse(get(url).body)
      }
      candidatos
    end

    def get(id)
      key = ENTRY_POINT+'/'+id.to_s
      candidato = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        binding.pry
        JSON.parse(self.class.get(url).body)
      }
      candidato
    end

  end
end
