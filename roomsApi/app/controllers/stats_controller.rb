class StatsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    stats = Stat.all  
    render :json => stats.to_json()
  end

  private
  def stat_params
    params.require(:stat).permit([:name, :level])
  end

end












# class StatsController < ApplicationController
#   before_action :authenticate_user!
#   def index
#     # render({json:{string:"hello"}})
#     @stats = current_user.stats
#     render( { json: @stats } )
#   end
# end

