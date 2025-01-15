
# Post System

A simple React application that allows users to view, filter, create, and interact with posts. Data is fetched from the Placeholder API.


## Installation

#### 1. Clone the repository:
```
    git clone https://github.com/avihay126/posts_app.git
```
#### 2. Navigate to the project directory:
```
  cd posts_app
```

#### 3. Install dependencies:
 Make sure you have Node.js installed, then run:
```
    npm install
```

#### 4. Run the application:
```
    npm start
```

####  5. Open the application in your browser: 
The application will be available at
```
    http://localhost:3000
```

## Features

**Displaying Posts:**

- All posts are fetched from the Placeholder API and displayed on the main page.  
- Posts are listed with their title and body.

**Search Functionality:**

- A search bar is available to filter posts by title.  
- The posts are automatically filtered as the user types in the search bar without the need to press a button.

**Creating New Posts:**

- A "Start New Post" button opens a form where the user can input a title and content.  
- After submitting the form, the new post is added to the list (only for the current session).  


**Post Details Page:**

- Clicking on any post opens a separate page that displays the post's title, content, and a list of comments.  
- Each comment shows the commenter's name and the content of the comment.  

**Not Found Page:**

- If a user navigates to an invalid URL, the "Not Found" page is displayed with a message and a "Go Home" button to return to the main page.

**Loading Spinner:**

- A loading spinner appears whenever an API request is being made, providing a better user experience during data fetching.



## Additional Notes


**Data Persistence:**

- The application does not save the posts to a database, as the Placeholder API doesn't support it. Any posts added will be lost after a page refresh.


**Error Handling:**

- The "Not Found" page also handles errors in case of failed API requests.



For example, if you create a post and then try to click on it to get to the "Post Details Page", it will take us to the "Not Found Page", because the post doesn't actually exist in the database.
## Thechnologies Used

- **React:** The front-end is built using React, including hooks for state and effect management. React Router is used for navigation across the website.

- **Axios:** Used for making HTTP requests to the Placeholder API.

- **CSS:** For styling the components and the layout. **Bootstrap** is used for icons.
