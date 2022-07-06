# Recipes API FullStack App Documentation
--------------------
## Pre-requisites
* Recipe API (?)
## Views
### Protected Views
#### Swipe
Recipes are shown randomly (based on preferences). The user swipes or can look further by tapping on the recipe.
Recipes can have different states:
- saved     : added to a list to be tested (not included into *discovery* function)
- favorited : added to preferred recipes
#### Search
A search engine (search field) allows to search recipes by different parameters.
Two tabs are shown to display recipes or ingredients.
#### Lists
The lists are displayed in two tabs [saved|favorited]
Recipes are listed inline (or grid?) showing an avatar of the recipe, the name, and cooking time.
Sliding the recipe to the left shows options: add to favorite(star icon) and delete.
Taping on a line opens the recipe page with the details;
- servings, 
#### Profile - Settings
Avatar, name, location shown.
- Change measurement system (default based on user location) [imperial|metric]
- Change prep and cooking-time (slider) [0->60min+]
- Pick a specific cuisine [All|European|Asian|African|Latin_American]
- Filter recipes by course [breakfast|lunch|dinner]
- Discovery checkbox [True|False]
### Public Views
#### Home
Homepage presenting the app and features (might be removed and login replaced as main page).
#### Login
Login page allowing registered users access to the application.
#### Signup
Signup page allowing visitors to register to the app. 
## Features(free)
* Choose recipes
* Search recipes by:
  - ingredients
  - recipe name
  - allergy tolerance (gluten-free, lacto-intolerant, ++, spices)
* Manage lists of recipes
* Change Settings
## Features (paid?)
* Additional information on nutrients and calories (athletes)
* Meal plan prep with addition to calendar and notifications (future)
* AI-based ingredient recognition (?)
## Backend
* search engine
* quantity conversion (based on solid or liquid - defined in Quantity model?) [metric|imperial]
* discover (showing **totally** random, similar or strictly preferred recipes) [randomized|similar(AI)|preferred]
* filtering (cuisine, region, course, spices, allergies...)
* sorting
* displaying
* view types (line, grid)
* image processing (recipes)

## Stack
- Django
- SQLite
- React
- Node
