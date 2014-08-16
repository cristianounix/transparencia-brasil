module Transparencia
  class Estado < Transparencia::Base
    ENTRY_POINT = Settings.transparencia.services.estados

    def self.all
      key = ENTRY_POINT
      estados = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      estados
    end

  end
end
