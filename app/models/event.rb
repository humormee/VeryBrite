class Event < ApplicationRecord
  validates :title, :description, :author_id, :date, :type, :start_time, :end_time, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end