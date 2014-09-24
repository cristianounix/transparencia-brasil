json.array @estados do |e|
  #binding.pry
  json.id e['estadoId']
  json.name e['nome']
  json.sigla e['sigla']
  json.count @vet_count[e['sigla']]
end