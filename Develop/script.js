var current_day = $('#currentDay');
current_day.text(moment().format("ddd MMM Do"));
var saveNineBtn = $('#save_nine');


var nine = $('#9');
// localStorage.setItem('9', 'test value');
// $(nine).val(localStorage.getItem('9'));


var nine_message = localStorage.getItem('nine_message');
$(nine).val = nine_message;


//var save9 = $('#save9');
console.log($('#save_nine'))

saveNineBtn.on('click', function() {
    localStorage.setItem('nine_message', nine_message);
    console.log("Im hit");
});

console.log(moment().format('h'));


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







//   function getRecordScore() {
    
//     let initialEl = document.querySelector('#initials');
//     // making global variable
//     let playerScore = {
//         initial: initialEl.value,
//         highScore: score
//     };

//     //  get data back from local storage
//     recordScore = JSON.parse(localStorage.getItem('playerScore'));
//     // recordScore.push(savedScore);

//     // combines data from local storage and new data 
//     if(recordScore) {
//         recordScore.push(playerScore);

//     } else {
//         recordScore = [playerScore];
//     }
//     // placed combined data back into local storage 
//     localStorage.setItem('playerScore', JSON.stringify(recordScore));
//     // recordScore.push(playerScore);
//     submitBtn.classList.add('hide');
//     renderRecordScore(recordScore);
// }