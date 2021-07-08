class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :type
    change_column_null :events, :category, true
  end
end
