module Transparencia
  class Excelencia < Transparencia::Base
    ENTRY_POINT = Settings.transparencia.services.excelencias

    def self.deputados 
      find_all(1)
    end

    def self.senadores 
      find_all(2)
    end



    def get(excelencias_id)
      key = ENTRY_POINT
      excelencia = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url+"/#{excelencias_id}").body)
      }
      excelencia
    end

    def bens
      key = ENTRY_POINT
      bns = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url+"/#{excelencias_id}/bens").body)
      }
      bns
    end

    private 
    def self.find_all(casa = 1)
      key = ENTRY_POINT
      param_casa = "?casa="+casa.to_s 
      excelencias = Rails.cache.fetch(key+param_casa, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      excelencias
    end
 

  end
end
