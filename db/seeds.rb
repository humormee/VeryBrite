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

user3 = User.create!(
  first_name: 'zed',
  last_name: 'smith',
  username: 'zed',
  password: 'password',
  email: 'zed@gmail.com'
)

user4 = User.create!(
  first_name: 'molly',
  last_name: 'lou',
  username: 'molls',
  password: 'password',
  email: 'molly@gmail.com1'
)

user5 = User.create!(
  first_name: 'jeremy',
  last_name: 'zinterman',
  username: 'jerm',
  password: 'password',
  email: 'jerms@gmail.com'
)

user6 = User.create!(
  first_name: 'elllie',
  last_name: 'snyder',
  username: 'snellie',
  password: 'password',
  email: 'snellie@gmail.com1'
)

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
  description: "picnic in Pioneers Park",
  start_time: "2021-07-28 11:00:00",
  end_time: "2021-07-28 14:00:00"
)

event2 = Event.create!(
  author_id: user1.id,
  category: 'Entertainment',
  title: 'movie night',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero varius, faucibus ipsum vel, malesuada turpis. Nam congue felis vitae eleifend hendrerit. Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi.",
  start_time: "2021-08-18 20:00:00",
  end_time: "2021-07-28 23:00:00"
)

event3 = Event.create!(
  author_id: demo.id,
  category: 'Music',
  title: 'Rave the Cave',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero varius, faucibus ipsum vel, malesuada turpis. Nam congue felis vitae eleifend hendrerit. Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi. ",
  start_time: "2021-08-09 22:00:00",
  end_time: "2021-08-10 01:00:00"
)

event11 = Event.create!(
  author_id: demo.id,
  category: 'Music',
  title: 'Rave the Cave',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero varius, faucibus ipsum vel, malesuada turpis. Nam congue felis vitae eleifend hendrerit. Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi. ",
  start_time: "2021-08-09 22:00:00",
  end_time: "2021-08-10 01:00:00"
)

event10 = Event.create!(
  author_id: demo.id,
  category: 'Music',
  title: 'Rave the Cave',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero varius, faucibus ipsum vel, malesuada turpis. Nam congue felis vitae eleifend hendrerit. Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi. ",
  start_time: "2021-08-09 22:00:00",
  end_time: "2021-08-10 01:00:00"
)

event9 = Event.create!(
  author_id: demo.id,
  category: 'Music',
  title: 'Rave the Cave',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero varius, faucibus ipsum vel, malesuada turpis. Nam congue felis vitae eleifend hendrerit. Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi. ",
  start_time: "2021-08-09 22:00:00",
  end_time: "2021-08-10 01:00:00"
)

event4 = Event.create!(
  author_id: user4.id,
  category: 'Charity and Causes',
  title: 'Lincoln Helping Hands',
  description: "Nam elementum mollis nibh, et interdum eros aliquet vitae. Nullam suscipit magna quam, eu consectetur eros fermentum at. Nulla diam magna, sagittis vel lacinia ac, suscipit et odio.",
  start_time: "2021-09-18 15:00:00",
  end_time: "2021-09-18 17:00:00"
)

event5 = Event.create!(
  author_id: user5.id,
  category: 'Entertainment',
  title: 'Conway Magical Revolution',
  description: "Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi. Nam elementum mollis nibh, et interdum eros aliquet vitae. Nullam suscipit magna quam, eu consectetur eros fermentum at.",
  start_time: "2021-08-20 20:00:00",
  end_time: "2021-08-20 23:00:00"
)

event6 = Event.create!(
  author_id: user5.id,
  category: 'Free',
  title: 'Yoga with Alpacas',
  description: " Nulla diam magna, sagittis vel lacinia ac, suscipit et odio. Praesent ornare ex sed lectus commodo, in tristique sem sodales. Integer erat quam, auctor vitae lacus eu, suscipit commodo odio. Pellentesque nec leo sit amet nibh commodo pellentesque imperdiet eu massa. Morbi vel blandit sem. Integer ac venenatis orci.",
  start_time: "2021-08-04 8:00:00",
  end_time: "2021-07-28 9:30:00"
)

event7 = Event.create!(
  author_id: user6.id,
  category: 'Food and Drink',
  title: 'Margs and Args',
  description: "In non mi porta, iaculis magna ut, aliquam mi. Nam elementum mollis nibh, et interdum eros aliquet vitae. Nullam suscipit magna quam, eu consectetur eros fermentum at. Nulla diam magna, sagittis vel lacinia ac, suscipit et odio. Praesent ornare ex sed lectus commodo, in tristique sem sodales. Integer erat quam, auctor vitae lacus eu, suscipit commodo odio. Pellentesque nec leo sit amet nibh commodo pellentesque imperdiet eu massa.",
  start_time: "2021-08-18 17:00:00",
  end_time: "2021-08-28 20:00:00"
)

event8 = Event.create!(
  author_id: user5.id,
  category: 'Charity and Causes',
  title: 'Bars for Mars',
  description: "Nulla diam magna, sagittis vel lacinia ac, suscipit et odio. Praesent ornare ex sed lectus commodo, in tristique sem sodales. Integer erat quam, auctor vitae lacus eu, suscipit commodo odio. Pellentesque nec leo sit amet nibh commodo pellentesque imperdiet eu massa.",
  start_time: "2021-08-25 11:00:00",
  end_time: "2021-08-25 2:00:00"
)