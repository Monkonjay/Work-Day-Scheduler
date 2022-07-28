# Work Day Scheduler

## Table of contents

- [Overview](#overview)
 - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

This is a simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.

### User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

### Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

### Screenshot

![](./Assets/screenshot.png)

### Links

- Solution URL: [Work Day Scheduler](https://github.com/Monkonjay/Work-Day-Scheduler.git)
- Live Site: [Test the Project](https://monkonjay.github.io/Work-Day-Scheduler/)

## My process

### Built with

- Javascript
- CSS
- HTML5
- jQuery
- Bootstrap 5
- Moments


### What I learned

I learned how to format time using moments.js.  It was exciting working with Bootstrap classes and customizing them for my particular application. The most challenging codes had to deal with storing and retrieving the textarea content to and from local storage with jQuery loops


```moments.js
current_day.text(moment().format("ddd MMM Do"));
```

```javaScript/jQuery
for (let i = 0; i < localStorage.length; i++) {
    $('#'+localStorage.key(i)).text(localStorage.getItem(localStorage.key(i)))
  }

```

## Author

- Website - [Robert M Greene]( https://monkonjay.github.io/Portforlio-Page/)
- Github - [Monkonjay](https://github.com/Monkonjay)