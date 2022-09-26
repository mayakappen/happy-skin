# Happy-Skin

An application for people with sensitive skin or allergies who want to find beauty products that are right for them. Users have access to a wide variety of product types and filters which can be combined to discover the perfect product. Users can also view products they've added to the Saved section.

### [Deployed Link](https://mayakappen.github.io/happy-skin/)

### Tech Used

* React
* React Router V6
* React Styled Components
* CSS
* Cypress

Powered by [The Makeup API](https://makeup-api.herokuapp.com/) 

### Screenshots
![React App (3)](https://user-images.githubusercontent.com/102932448/192383671-a2034dda-f923-4ac7-91e8-ea6ebfda76ec.gif)
![React App (4)](https://user-images.githubusercontent.com/102932448/192383824-8ae8cd20-9321-4c50-bd08-1a664eea9fc9.gif)
![React App (5)](https://user-images.githubusercontent.com/102932448/192383943-44e37803-2046-4573-a4c1-d35b81215099.gif)

### Future Extensions

* Delete saved products

* Flesh out product page more, theres a lot more info I can bring in!

* A search text input allowing users to search by product name

* A review section where users can submit reviews of products they've tried

* Additional styling to bring everything up to the level of polish of the Nav Bar

### Reflections

First of all I learned so much about time management with this project. I focused a lot on balancing the network traffic and the loading times and spent probably too much time trying out different ways of bringing in the api data. Some were 20 second wait times where the user couldn't navigate the app at all and others were fast but with a bunch of network traffic. I settled on a compromise of doing a big fetch for all product data, and if a user was to navigate from the homepage during that time then the app knows to fetch the category or tag data from a different, smaller, endpoint. This is all switched to working within state once the initial fetch is complete.

I also realized I was overcomplicating things with the amount of components I am creating, some may not have been necessary and only made it confusing, I'm looking forward to feedback on this!
Overall this was a really challenging project. I started out with an idea in mind for how to impliment the router, and looking back its clear I could have done it dynamically with routes instead of a bunch of links and using state to manipulate the path. I would like to refactor this over break as well as add more styling, the [styled components](https://styled-components.com/) 💅 are really fun to play around with!

The biggest takeaway for me after this project is to focus more on mvp and then worry about everything else AFTER! I almost forgot to add the save products to view later part of my mvp because I was so focused on getting the filters to work under any circumstance. All in all this was a really educational project for me and I can't wait to polish it up over the break!

I Am proud of my styling and breakpoints I was able to add but I got very sidetracked doing these filter functions
### Contributors

Maya Kappen [LinkedIn](https://www.linkedin.com/in/maya-kappen-64b97123b/)
