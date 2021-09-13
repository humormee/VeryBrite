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
  title: 'Picnic',
  description: "picnic in Pioneers Park",
  start_time: "2021-07-28 11:00:00",
  end_time: "2021-07-28 14:00:00",
  image_url: "https://images.unsplash.com/photo-1592753054398-9fa298d40e85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljbmljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
)

event2 = Event.create!(
  author_id: user1.id,
  category: 'Entertainment',
  title: 'Movie Night',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero varius, faucibus ipsum vel, malesuada turpis. Nam congue felis vitae eleifend hendrerit. Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi.",
  start_time: "2021-08-18 20:00:00",
  end_time: "2021-07-28 23:00:00",
  image_url: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
)

event3 = Event.create!(
  author_id: demo.id,
  category: 'Music',
  title: 'Rave the Cave',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed libero varius, faucibus ipsum vel, malesuada turpis. Nam congue felis vitae eleifend hendrerit. Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi. ",
  start_time: "2021-08-09 22:00:00",
  end_time: "2021-08-10 01:00:00",
  image_url: "https://images.unsplash.com/photo-1555086156-e6c7353d283f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmF2ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
)

event4 = Event.create!(
  author_id: user4.id,
  category: 'Charity and Causes',
  title: 'Lincoln Helping Hands',
  description: "Nam elementum mollis nibh, et interdum eros aliquet vitae. Nullam suscipit magna quam, eu consectetur eros fermentum at. Nulla diam magna, sagittis vel lacinia ac, suscipit et odio.",
  start_time: "2021-09-18 15:00:00",
  end_time: "2021-09-18 17:00:00",
  image_url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVscGluZyUyMGhhbmRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
)

event5 = Event.create!(
  author_id: user5.id,
  category: 'Entertainment',
  title: 'Harry Potter Potion Class',
  description: "Mauris ultrices, neque vel maximus efficitur, felis leo consectetur ligula, maximus interdum arcu nibh eget massa. In non mi porta, iaculis magna ut, aliquam mi. Nam elementum mollis nibh, et interdum eros aliquet vitae. Nullam suscipit magna quam, eu consectetur eros fermentum at.",
  start_time: "2021-08-20 20:00:00",
  end_time: "2021-08-20 23:00:00",
  image_url: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hZ2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
)

event6 = Event.create!(
  author_id: user5.id,
  category: 'Food and Drink',
  title: 'Yoga with Alpacas',
  description: " Nulla diam magna, sagittis vel lacinia ac, suscipit et odio. Praesent ornare ex sed lectus commodo, in tristique sem sodales. Integer erat quam, auctor vitae lacus eu, suscipit commodo odio. Pellentesque nec leo sit amet nibh commodo pellentesque imperdiet eu massa. Morbi vel blandit sem. Integer ac venenatis orci.",
  start_time: "2021-08-04 8:00:00",
  end_time: "2021-07-28 9:30:00",
  image_url: " https://images.unsplash.com/photo-1577795894605-4a77189b7bc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWxwYWNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
)

event7 = Event.create!(
  author_id: user6.id,
  category: 'Food and Drink',
  title: 'Margs and Args',
  description: "In non mi porta, iaculis magna ut, aliquam mi. Nam elementum mollis nibh, et interdum eros aliquet vitae. Nullam suscipit magna quam, eu consectetur eros fermentum at. Nulla diam magna, sagittis vel lacinia ac, suscipit et odio. Praesent ornare ex sed lectus commodo, in tristique sem sodales. Integer erat quam, auctor vitae lacus eu, suscipit commodo odio. Pellentesque nec leo sit amet nibh commodo pellentesque imperdiet eu massa.",
  start_time: "2021-08-18 17:00:00",
  end_time: "2021-08-28 20:00:00",
  image_url: "https://images.unsplash.com/photo-1628873268744-c30c97e17917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hcmdhcml0YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
)

event8 = Event.create!(
  author_id: user5.id,
  category: 'Charity and Causes',
  title: 'Bars for Mars',
  description: "Nulla diam magna, sagittis vel lacinia ac, suscipit et odio. Praesent ornare ex sed lectus commodo, in tristique sem sodales. Integer erat quam, auctor vitae lacus eu, suscipit commodo odio. Pellentesque nec leo sit amet nibh commodo pellentesque imperdiet eu massa.",
  start_time: "2021-08-25 11:00:00",
  end_time: "2021-08-25 2:00:00",
  image_url: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
)

event9 = Event.create!(
  author_id: user5.id,
  category: 'Charity and Causes',
  title: 'consistent pics',
  description: "new description",
  start_time: "2021-08-25 11:00:00",
  end_time: "2021-08-25 2:00:00",
  image_url: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbmNlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
)

registration1 = Registration.create!(
  event_id: 2,
  attendee_id: 7
)

registration2 = Registration.create!(
  event_id: 4,
  attendee_id: 3
)

registration1 = Registration.create!(
  event_id: 1,
  attendee_id: 7
)