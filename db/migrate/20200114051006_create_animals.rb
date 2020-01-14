class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :group

      t.timestamps
    end
  end
end
