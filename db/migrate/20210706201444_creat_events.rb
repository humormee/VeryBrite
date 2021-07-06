class CreatEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false, index: true
      t.text :decription, null: false, index: true
      t.integer :author_id, null: false, index: true
      t.datetime :date, null: false
      t.string :type, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false

      t.timestamps
    end

      # add_foreign_key :author_id
  end
end
