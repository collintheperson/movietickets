//business logic
function MovieChoice(age, time, moviename, discount) {
  this.age = age;
  this.time = time;
  this.moviename = name;
  this.discount = discount; //should we have a set value for a movie theatre and they can add discounts to it. So set their input to a variable prime of 15. If they choice one thing minus a dollar or something.
}

MovieChoice.prototype.price = function () {
  return 0 + this.ticketAge() + this.ticketTime() + this.ticketName() + this.ticketDiscount()
}

MovieChoice.prototype.ticketAge = function () {
  if (this.age === "child" || this.age === "senior") {
    return 6.50
  } else {
    return 9.50
  }
}

MovieChoice.prototype.ticketTime = function () {
  if (this.time === "weekend" || this.age === "4pm") {
    return 3.00
  } else {
    return 0.50
  }
}

MovieChoice.prototype.ticketName = function () {
  if (this.moviename >= 3) {
    return .50
  } else {
    return 2.00
  }
}
MovieChoice.prototype.ticketDiscount = function () {
  if (this.discount === "student" || this.age === "military") {
    return -1.00
  } else if (this.discount === "movie") {
    return -.75
  } else{
    return 0
  }
}
// user interface logic
$(document).ready(function() {
  $("form#movie-selection").submit(function(event) {
    event.preventDefault();
    var inputtedage = $("#new-age").val();
    var inputtedtime = $("#new-time").val();
    var inputtedmoviename = $("#new-movie-name").val();
    var inputteddiscount = $("#new-discount").val();

    var newMovie = new MovieChoice(inputtedage, inputtedtime, inputtedmoviename, inputteddiscount)


    $("#ticket-cost").append('<li>' + newMovie.price() + '</li>');



  });
});
