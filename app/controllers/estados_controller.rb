class EstadosController < ApplicationController
	respond_to :json

	def show
		@estados = Transparencia::Estado.all
		respond_with @estados
	end
end