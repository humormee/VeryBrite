class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :event_id, null: false
      t.integer :liker_id, null: false

      t.timestamps
    end
  end
end
