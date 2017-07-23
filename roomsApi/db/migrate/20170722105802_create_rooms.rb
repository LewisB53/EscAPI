class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.string :name
      t.text :description
      t.string :logo
      t.string :image
      t.string :website
      t.integer :call

      t.timestamps null: false
    end
  end
end
