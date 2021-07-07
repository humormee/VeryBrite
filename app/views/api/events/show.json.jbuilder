json.event do
  json.extract! @event, :id, :title, :description, :author_id, :date, :type, :start_time, :end_time
end

json.author do
  json.extract! author, :first_name, :last_name