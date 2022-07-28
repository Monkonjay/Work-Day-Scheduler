$(function () {
  // global variables
  const current_day = $('#currentDay');
  const saveBtn = $('.saveBtn');
  
  // format date and time using moments.js
  current_day.text(moment().format("ddd MMM Do"));
  const currentTime = moment().hour();

  const todos = $('.col-1.hour').each(() => {
    console.log($(this).text());
  });
  console.log(todos);


  // dynamically add classes to textarea to change background color
  $("textarea").each(function () {
    if ($(this).attr('data-hour') > currentTime) {
      $(this).addClass('future');
    } else if ($(this).attr('data-hour') < currentTime) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    }
  });


  // fill text in textarea rows where localStorage has been set for that hour
  for (let i = 0; i < localStorage.length; i++) {
    $('#'+localStorage.key(i)).text(localStorage.getItem(localStorage.key(i)))
  }

  // add event listener to save buttons by looping 
  saveBtn.on('click', function () {
   for (let i = 0; i < saveBtn.length; i++) {
   localStorage.setItem($(this).siblings(".description").children("textarea").prop("id"),$(this).siblings(".description").children("textarea").val());
   }
   
  });

});
