class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render :index
  end


  def create
    @event = Event.new(event_params)

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 401
    end
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 401
    end
  end

  def destroy
    @event = Event.find(params[:id])
    if @event.destroy
      render json: ['Event deleted']
    else
      render json: @event.errors.full_messages, status: 400
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :author_id, :date, :start_time, :end_time)
  end
end