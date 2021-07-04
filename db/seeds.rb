# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(
  first_name: 'justin',
  last_name: 'ernst',
  username: 'jernst',
  password: 'password',
  email: 'jernst766@gmail.com'
)

user2 = User.create!(
  first_name: 'justin1',
  last_name: 'ernst1',
  username: 'jernst1',
  password: 'password',
  email: 'jernst766@gmail.com1'
)