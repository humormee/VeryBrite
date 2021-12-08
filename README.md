# verybrite

Verybrite is an Eventbrite clone. Users of verybrite are able to search for events with a categories as well as register and/or bookmark those events. Logged-in users also have the ability to create and host their own events.

[Verybrite Live Site](https://very-brite.herokuapp.com/)

## Technologies

Backend:

* Ruby on Rails
* PostgreSQL
* jQuery-rails

Frontend:

* React
* Redux
* CSS/SASS

Hosting: 

* Heroku

## Features

* User authentication
* Full CRUD (**C**reate, **R**ead, **U**pdate and **D**elete) functionality for events
* Registered users can create and delete registrations
* Search events with Categories

![Categories](eventbrite_categories.gif)

* Bookmark and/or Register for Events

![Bookmarks](verybrite_tickets.gif)

## Example Code

One major technical issue was to auto style added events to the homepage while creating new rows. The solution was, using SASS, I could grab the id's of the elements

#### Search by Event Category

![Categories](eventbrite_categories.gif)

#### Keep Track of Interesting Events with Bookmarks!

![Bookmarks](verybrite_tickets.gif)

## Future Implementations

* AWS integration
* Search bar
