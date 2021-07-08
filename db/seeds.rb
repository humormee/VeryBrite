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

<<<<<<< HEAD
event1 = Event.create!(
  author_id: 1;
  category: 'Food and Drink'
  title: 'fun in the sun'
=======
demo = User.create!(
  first_name: 'demo',
  last_name: 'demo',
  username: 'demo',
  password: 'password',
  email: 'demo@email.com'
)

event1 = Event.create!(
  author_id: user2.id,
  category: 'Food and Drink',
  title: 'fun in the sun',
>>>>>>> main
  description: "picnic in Pioneers Park",
  start_time: "2021-07-28 11:00:00",
  end_time: "2021-07-28 14:00:00"
)

event2 = Event.create!(
<<<<<<< HEAD
  author_id: 2;
  category: 'Entertainment'
  title: 'movie night'
=======
  author_id: user1.id,
  category: 'Entertainment',
  title: 'movie night',
>>>>>>> main
  description: "drive-thru movie",
  start_time: "2021-08-18 20:00:00",
  end_time: "2021-07-28 23:00:00"
)