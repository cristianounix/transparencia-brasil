class ExcelenciasController < ApplicationController
	respond_to :json

	def show
		q = URI.encode(params.to_query)
		@excelencias = Transparencia::Excelencia.find_all(q)
		respond_with @excelencias
	end
end