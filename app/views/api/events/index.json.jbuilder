@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title
    json.partial! 'event', event: event
  end
end
