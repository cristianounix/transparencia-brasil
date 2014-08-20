class PartidosController < ApplicationController
	respond_to :json

	def show
		@partidos = Transparencia::Partido.all
		respond_with @partidos
	end
end