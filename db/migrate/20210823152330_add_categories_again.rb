class AddCategoriesAgain < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :category, false
  end
end
