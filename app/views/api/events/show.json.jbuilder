json.partial! 'event', event: @event;

json.author do
  json.partial! "api/users/user", user: @event.author
end