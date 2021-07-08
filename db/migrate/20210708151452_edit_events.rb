class EditEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :date
    add_column :events, :category, :string
  end
end
