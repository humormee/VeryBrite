@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :title
    begin
      json.image_url asset_path()
    rescue
      json.image_url poke.image_url
    end
  end
end