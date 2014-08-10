#require 'ostruct'
require 'httparty'
require 'json'

module Transparencia
  class Estado
    include HTTParty
    base_uri Settings.transparencia.host
    ENTRY_POINT = Settings.transparencia.services.estados

    def self.find(token)
      attributes = JSON.parse(get(ENTRY_POINT + token ).body)['school']
      new attributes
    end

  end
end
