var current_day = $('#currentDay');
current_day.text(moment().format("ddd MMM Do"));
let currentTime = moment().hour();
var saveBtn = $('#saveBtn');
let containerEl = $('.container');
let nineBlock = $('#9');


// var nine = $('#9');
// localStorage.setItem('nine_message', 'test value');
// $(nine).val(localStorage.getItem('9'));


var btn_message = localStorage.getItem('message');
// $(nine).val = nine_message;


//var save9 = $('#save9');
console.log($('#saveBtn'))

saveBtn.on('click', function() {
    localStorage.setItem('message', btn_message);
    console.log("I'm hit");
});


// console.log(curentTime > nineBlock.attr('data-hour'));

$("textarea").each(function() {
  if ($(this).attr('data-hour') > currentTime) {
    $(this).addClass('future');
  } else if ($(this).attr('data-hour') < currentTime) {
    $(this).addClass('past');
  } else {
    $(this).addClass('present');
  }
 });


// $("textarea").addClass('present');

// $("textarea").each(function() {
//   console.log($(this).attr('data-hour'))
//  })



// var count = localStorage.getItem("count");

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   if (count < 24) {
//     count++;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });

// subtractButton.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     counter.textContent = count;
//     localStorage.setItem("count", count);
//   }
// });
