class CreateRegistrations < ActiveRecord::Migration[5.2]
  def change
    create_table :registrations do |t|
      t.integer :event_id, null: false
      t.integer :attendee_id, null: false

      t.timestamps
    end
  end
end
