class EstadosController < ApplicationController
	respond_to :json

	def show
    if params[:cargo] == 3
      @vet_count = Transparencia::Google.count_senador
    else
      @vet_count = Transparencia::Google.count_senador
    end
		@estados = Transparencia::Estado.all
	end
end