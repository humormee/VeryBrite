class Event < ApplicationRecord

  validates :category, :title, :description, :author_id, :start_time, :end_time, presence: true
  
  # validates :category, inclusion: { in: ["Entertainment", "Food and Drink", "Free", "Charity and Causes", "Music"],  message: "%{value} is not a valid category" }

  # CATEGORIES = ["Entertainment", "Food and Drink", "Free", "Charity and Causes", "Music"]

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :registrations,
    foreign_key: :event_id,
    class_name: :Registration

  has_many :likes,
    foreign_key: :event_id,
    class_name: :Like

end