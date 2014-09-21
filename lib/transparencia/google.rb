#require 'ostruct'
require 'httparty'
require 'json'

module Transparencia
  class Google
    include HTTParty
    base_uri Settings.google.host
    ENTRY_POINT = '/candidates_by_state?'

    def self.count_senador
      key         = ENTRY_POINT+'job_title=senador'
      len_senador = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      len_senador
    end

    def self.count_governador
      key         = ENTRY_POINT+'job_title=governador'
      len_governador = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      len_governador
    end
  end
end

