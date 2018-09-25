// Creates and returns a new dancer object that can step
var makeDancer = function (top, left, timeBetweenSteps, idx, img, img2) {
  let dancer = new Dancer(top, left, timeBetweenSteps, idx, img, img2);
  return dancer;
};

var Dancer = function (top, left, timeBetweenSteps, idx, img, img2) {
  if (img && img2) {
    this.$node = $(`<span class='dancer'><img class='first' src='${img}'><img class='second' src='${img2}'></span>`); 
  } else if (img) {
    this.$node = $(`<span class='dancer'><img src='${img}'></span>`); 
  } else {
    this.$node = $(`<span class='dancer'></span>`); 
  }
  this.$node.attr('id', `d${idx}`);
  this.noise = 'Hi!';
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  Dancer.prototype.step.call(this);
  this.alignPercent = 70;
};

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function () {
  this.$node.css({'top': `${this.alignPercent}%`});
};

Dancer.prototype.speak = function() {
  if(this.$node.has('.speech-bubble').length === 0) {
    this.$node.append(`<span class=speech-bubble>${this.noise}</span>`);
  }
  
};