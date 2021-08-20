class Api::LikesController < ApplicationController

  def index
    @likes = Like.all
    if @likes 
      render :index
    else
      render json: @likes.full_messages, status: 422
    end
  end

  def show
    @like = Like.find(params[:id])
    if @like
      render :show
    else
      render json: @like.full_messages, status: 401
    end
  end

  def create
    @like = Like.new(like_params)
    @like.liker_id = current_user.id
    if @like.save
      @event = @like.event
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    id = @like.id
    if @like && @like.destroy
      render :show
    else
      render json: ["like does not exist"], status: 401
    end
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :event_id)
  end
end