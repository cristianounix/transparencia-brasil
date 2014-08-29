#require 'ostruct'
require 'httparty'
require 'json'

module Transparencia
  class Base
    include HTTParty
    base_uri Settings.transparencia.host
    headers  "App-Token" => "Tk6fOAGd16wP"
  end
end