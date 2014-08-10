module Transparencia
  class Partidos < Transparencia::Base
    ENTRY_POINT = Settings.transparencia.services.partidos

    def self.all
      key = ENTRY_POINT
      partidos = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      partidos
    end

  end
end
