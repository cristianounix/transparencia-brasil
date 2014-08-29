class CandidatosController < ApplicationController
	respond_to :json

	def show
		q = URI.encode(params.slice(:estado,:partido,:limit).to_query)
		@excelencias = Transparencia::Candidato.find_all(q)
		respond_with @excelencias
	end

end