module Transparencia
  class Cargo < Transparencia::Base
    ENTRY_POINT = Settings.transparencia.services.cargos

    def self.all
      key = ENTRY_POINT
      cargos = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      cargos
    end

  end
end
