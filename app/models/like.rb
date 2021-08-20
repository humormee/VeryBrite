class Like < ApplicationRecord

  validates :event_id, :liker_id, presence: true

  belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event

  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User
    
end