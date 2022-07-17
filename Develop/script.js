var nine = $('#9');
// localStorage.setItem('9', 'test value');
$(nine).val(localStorage.getItem('9'));
var current_day = $('#currentDay');
current_day.text(moment().format("MMM Do YY"));

//var save9 = $('#save9');
console.log($('#save_nine'))
$( "#save_nine" ).click(function() {
    alert( "Handler for .click() called." );
    localStorage.setItem('9', _)
  });
  console.log(moment().format('H'))