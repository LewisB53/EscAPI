class CreateStats < ActiveRecord::Migration
  def change
    create_table :stats do |t|
      t.text :name
      t.integer :level
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
