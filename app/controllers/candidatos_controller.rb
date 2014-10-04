class CandidatosController < ApplicationController
	respond_to :json

  def index
    q = URI.encode(params.slice(:estado,:cargo).to_query)
    @excelencias = Transparencia::Candidato.find_all(q)
    respond_with @excelencias
  end

	def show
    @excelencia = Transparencia::Candidato.detail(params[:id])
    @excelencia[:estatisticas]  = Transparencia::Candidato.graph(params[:id])
    @excelencia[:candidaturas]  = Transparencia::Candidato.candidatures(params[:id])
    @excelencia[:bens]          = Transparencia::Candidato.riches(params[:id])

    respond_with @excelencia
	end

end