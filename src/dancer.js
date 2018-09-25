// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, img, img2) {
  let dancer = new Dancer(top, left, timeBetweenSteps);
  return dancer;
};

var Dancer = function(top, left, timeBetweenSteps, img, img2) {
  // use jQuery to create an HTML <span> tag
  console.log(`<span class='dancer'><img src='${img}'></span>`);
  if (img && img2) {
    this.$node = $(`<span class='dancer'><img class='first' src='${img}'><img class='second' src='${img2}'></span>`); 
  } else if (img) {
    this.$node = $(`<span class='dancer'><img src='${img}'></span>`); 
  } else {
    this.$node = $(`<span class='dancer'></span>`); 
  }
  
  this.timeBetweenSteps = timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  Dancer.prototype.step.call(this);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};