$(function () {
  // global variables
  const current_day = $('#currentDay');
  const saveBtn = $('.saveBtn');
 
  
  const todos = $('.col-1.hour').each(() => {
    console.log($(this).text());
  });
  console.log(todos);
  // format date and time using moments.js
  current_day.text(moment().format("ddd MMM Do"));
  const currentTime = moment().hour();

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

  // testing data attribute of save buttons
  // $("#saveBtn").each(function() {
  //   console.log($(this).attr('data-save')); 
  // });



  // add event listener to save buttons
  saveBtn.on('click', function () {
    const todo = $('#9').val();
    console.log('TODO', todo);
    localStorage.setItem('todo', todo);
    // todo = $('#9').val;
    console.log("I'm hit");
  });


});
