json.extract! registration, :id, :event_id, :attendee_id

json.attendee_id registration.attendee.id
json.event_id registration.event.id