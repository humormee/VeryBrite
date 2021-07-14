class Api::RegistrationsController < ApplicationController

  def create
    @registration = Registration.new(registration_params)
    @registraion.attendee_id = current_user.id
    # @registraion.event_id = params[:event_id]

    if @registration.save
      @event = @registration.event
      rendre 'api/events/show'
    else
      render json: @registraion.errors.full_messages, status: 422
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