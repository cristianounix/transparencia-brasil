module Transparencia
  class Partidos < Transparencia::Base
    ENTRY_POINT = Settings.transparencia.services.partidos

    def self.all
      partidos = JSON.parse(get(ENTRY_POINT).body)
      partidos
    end

  end
end
