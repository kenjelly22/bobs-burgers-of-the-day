# MVP

---

## Feature 1: Search for Burger of the Day

**User Story:** As a user, when I want to be able to search for a Burger of the Day.  
**Details:** Create a search form that will run a GET fetch upon Submit and request search term to [Bob's Burgers API](https://www.bobsburgersapi.com/documentation#burgerOfTheDay).

## Feature 2: Add Burger to Menu

**User Story:** As a user, I want to add Burgers of the Day to my Menu displaying name and price.  
**Details:** Create a Button with an onClick Event to add Burger of the Day to Menu. Send POST request to add selected burger to local db.json.

## Feature 3: See a Burger of the Day Menu

**User Story:** As a user, I want to see the Burgers of the Day that have been saved to my Menu.  
**Details:** Use a GET fetch to request existing burger data from local db.json.

## Feature 4: Edit Existing Burgers

**User Story:** As a user, I want to be able to edit the Burger names and prices on the Menu.  
**Details:** Create a Button with an onClick Event that will navigate to a page showing the targeted burger with edit option. Then use a PATCH request to update local db.json.

## Feature 5: Delete Burgers from Menu.

**User Story:** As a user, I want to be able to remove Burgers from My Favorites list.  
**Details:** Create a Button with an onClick Event that will Delete the targeted burger and remove from page and local db.json.

---

# Stretch Goals.

### Stretch Goal 1: Search Burger Menu

**User Story:** As a user, I want to search the Menu and return a specific Burger.  
**Details:** Create a search form that will fetch data from local db.json and filter out all other burgers to just display the search results.

### Stretch Goal 2: Sort Burger Menu

**User Story:** As a user, I want to sort the burgers in Menu by name and price.  
**Details:** Create a drop down list of sort options and use switch to sort burgers by name from A to B with localeCompare and price from Lowest to Highest or Highest to Lowest.

### Stretch Goal 3: Display Random Burger

**User Story:** As a user, I want to be able to click a button and get a random burger.  
**Details:** Create a Button with an onClick Event that will send a fetch request to [Bob's Burgers API](https://www.bobsburgersapi.com/documentation#burgerOfTheDay) and return a random burger and display on page.

---
