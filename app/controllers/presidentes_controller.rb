class PresidentesController < ApplicationController
	respond_to :json

	def show
		@presidentes = Transparencia::Candidato.presidentes
		respond_with @presidentes
	end

end