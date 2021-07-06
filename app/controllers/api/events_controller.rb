class Api::EventsController < ApplicationController


  def new
    render :new
  end

  def index
    events = Events.all
    render :index
  end

  def edit
    @event = Event.find(params[:id])
    render :edit
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      redirect_to event_url(@event)
    else
      render json:["all fields need to be occupied"], status: 401
      render :new
    end
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      redirect_to event_url(@event)
    else
      flash.now[:errors] = @event.errors.full_messages
      render :edit
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render "api/events"
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :author_id, :date, :start_time, :end_time)
  end
end