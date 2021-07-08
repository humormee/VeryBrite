json.extract! event, :id, :author_id, :title, :description, :date, :start_time, :end_time
json.authorFName event.author.first_name
json.authorLName event.author.last_name