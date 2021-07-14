class Registration < ApplicationRecord

  validates :event_id, :attendee_id, presence: true
  # validates :attendee_id, uniqueness: { scope: :event_id }
  
  belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event

  belongs_to :attendee,
    foreign_key: :attendee_id,
    class_name: :User

end