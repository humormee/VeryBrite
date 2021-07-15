# debugger
@registrations.each do |registration|
  json.set! registration.id do 
    json.extract! registration, :id, :event_id, :attendee_id
  end
  # debugger
end