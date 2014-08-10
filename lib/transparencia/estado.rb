module Transparencia
  class Estado < Transparencia::Base
    ENTRY_POINT = Settings.transparencia.services.estados

    def self.all
      estados = JSON.parse(get(ENTRY_POINT).body)
      estados
    end

  end
end
