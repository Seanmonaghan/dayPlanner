# Day Planner Application

This is a simple calendar application that allows the user to save events for each
hour of the work day.  It will run in the browser and feature dynamically updated 
HTML and CSS powered by jQuery.

This app utilizes the luxon.js library to dynamically update the time and date for the user's convenience.


## Ideal User

```
This app is ideal for an employee with a busy schedule that wants to add important
daily events to a planner to manage their time more effectively.

```

## App Functionality

```
When the user wants to create a schedule they can open the day planner and the planner will display the current day at the top of the calendar.  This is done by adding empty spans in the HTML and using jQuery to dynamically update the time and date into those empty spans.
```

![Overall display of the app functionality](assets/images/overall.png)

```
When the user scrolls down, they will see time blocks for standard business hours that are created using HTML and have unique ID's based on their time slot.
```

![code snippet of how HTML time divs are formatted](assets/images/htmlTimeDiv.png)

```
The app runs a function to determine the current time and will highlight that for the user, as well as another function that determines if that time block is in the past where it lowers the opacity so that the user can clearly see which time is past, present, and yet to come. 
```

![code snippet to show how the current time is bordered](assets/images/currentTime.png)
![code snippet to show how the past times are displayed with a lowered opacity](assets/images/pastTime.png)

```
When the user clicks into the time block, they are able to enter an event.  The value of this input is locked in place using local storage once the corresponding save button is clicked, so that even if the user leaves the page or refreshes the information will be preserved.
```

![code snippet to show how the save buttons function](assets/images/saveButtons.png)

```
Please enjoy using this app! It also features dynamically changing backgrounds and text colors to provide the user with a different experience whether it be morning, afternoon or night.  Please forgive the non-existence of a permanent dark mode, I know this is a cardinal sin but I only have so much time per project.

P.S. Please note that times were adjusted manually for demonstration purposes when collecting images for this README.md

```
