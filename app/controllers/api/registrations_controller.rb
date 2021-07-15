class Api::RegistrationsController < ApplicationController

  def index
    @registrations = Registration.all
    # User.find(userid).registrations to get all associated registrations
    if @registrations 
      render :index
    else
      render json: @registrations.full_messages, status: 422
    end
  end

  def show
    @registration = Registration.find(params[:id])
    if @registration
      render :show
    else
      render json: @registration.full_messages, status: 401
    end
  end

  def create
    @registration = Registration.new(registration_params)
    @registration.attendee_id = current_user.id

    if @registration.save
      @event = @registration.event
      render :show
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def destroy
    @registration = Registration.find(params[:id])
    if @registration && @registration.destroy
      render json: ["Registration deleted"]
    else
      render json: ["Registration does not exist"], status: 401
    end
  end

  private

  def registration_params
    params.require(:registration).permit(:attendee_id, :event_id)
  end
end