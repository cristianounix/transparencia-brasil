#require 'ostruct'
require 'httparty'
require 'json'

module Transparencia
  class Base
    include HTTParty
    debug_output $stdout
    base_uri Settings.transparencia.host
    headers  "App-Token" => "Tk6fOAGd16wP"
  end
end