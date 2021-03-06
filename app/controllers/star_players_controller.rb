class StarPlayersController < ApplicationController
  before_action :set_params, only: [:show]

  def index
    @star_players = Team.find(params[:team_id]).star_players
    render json: @star_players, status: 200
  end

  def show
    record = StarPlayer.find(params[:id])
    views = record.views
    record.update(views: views + 1)
    render status: 200, json: record
  end

  private

  def star_player_params
    params.require(:star_player).permit(:name, :player_type, :cost, :movement_allowance, :strength, :agility, :armour_value, :skills, :team_id)
  end

  def set_params
    @star_player = StarPlayer.find(params[:id])
  end

end
