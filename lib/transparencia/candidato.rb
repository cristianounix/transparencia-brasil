module Transparencia
  class Candidato < Transparencia::Base
    ENTRY_POINT = Settings.transparencia.services.candidatos

    def self.find_all(q='estado=SP&partido=1')
      key = ENTRY_POINT+'?'+q
      candidatos = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      candidatos
    end

    def self.detail(id)
      key = ENTRY_POINT+'/'+id
      candidato = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      candidato
    end

    def self.graph(id)
      key = ENTRY_POINT+'/'+id+'/estatisticas'
      estatisticas = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      estatisticas
    end

    def self.candidatures(id)
      key = ENTRY_POINT+'/'+id+'/candidaturas'
      candidaturas = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      candidaturas
    end

    def self.riches(id)
      key = ENTRY_POINT+'/'+id+'/bens'
      bens = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      bens
    end

    def self.presidentes
      key = ENTRY_POINT+'?estado=BR&cargo=1'
      presidente = Rails.cache.fetch(key, expires_in: 30.days) { |url|
        JSON.parse(get(url).body)
      }
      presidente
    end

  end
end
