class AddCategories < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :category, true
  end
end
