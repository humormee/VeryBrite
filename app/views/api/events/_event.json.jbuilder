json.extract! event, :id, :author_id, :image_url, :title, :description, :category, :start_time, :end_time
json.authorFName event.author.first_name
json.authorLName event.author.last_name