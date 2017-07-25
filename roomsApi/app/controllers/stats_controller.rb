class StatsController < ApplicationController
  before_action :authenticate_user!
  def index
    stats = [ { name:'Lewis', level:7 },{name:'noob',level:1}]
    render json: stats
  end
end