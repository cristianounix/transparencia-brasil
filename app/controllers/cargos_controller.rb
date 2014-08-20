class CargosController < ApplicationController
	respond_to :json

	def show
		@cargos = Transparencia::Cargo.all
		respond_with @cargos
	end
end