class Event < ApplicationRecord

  validates :title, :description, :author_id, :start_time, :end_time, presence: true
  
  # validates :category, inclusion: { in: ["Entertainment", "Food and Drink", "Free", "Charity and Causes", "Music"],  message: "%{value} is not a valid category" }

  # CATEGORIES = ["Entertainment", "Food and Drink", "Free", "Charity and Causes", "Music"]

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end