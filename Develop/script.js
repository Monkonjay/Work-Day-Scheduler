$(function () {
  // global variables
  const current_day = $('#currentDay');
  const saveBtn = $('.saveBtn');
  const textArea = $('.input');
 
  
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

  $(textArea).text(localStorage.getItem(10))
for (let i = 0; i < localStorage.length; i++) {
  let id = localStorage.key(i)
  console.log(id)
 // $(this).siblings(".description").children("textarea").text(localStorage.getItem($(this).siblings(".description").children("textarea").prop('id')));
 // //console.log($(this).siblings(".description").children("textarea").text());
 // console.log(localStorage.getItem($(this).siblings(".description").children("textarea").prop('id')));
 // console.log($(this).siblings(".description").children("textarea").prop('id'));

if(localStorage.key(i) === textArea.prop('id')){
  $(textArea).val(localStorage.getItem(10))
}
console.log(localStorage.key(i))
console.log($(textArea).text())
console.log($(localStorage.getItem(parseInt(localStorage.key(i)))))
console.log(localStorage.key(i).value)
console.log(localStorage.getItem('10'))
console.log(localStorage.getItem(id))

 
  
}


  // add event listener to save buttons
  saveBtn.on('click', function () {
   for (let i = 0; i < saveBtn.length; i++) {
   localStorage.setItem($(this).siblings(".description").children("textarea").prop("id"),$(this).siblings(".description").children("textarea").val());
     
   }
    // const todo = $('#9').val();
    // console.log('TODO', todo);
    // // localStorage.setItem('todo', todo);
    // // todo = $('#9').val;
    // console.log("I'm hit");
  });


});
