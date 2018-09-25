var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  const blinker = new BlinkyDancer(top, left, timeBetweenSteps);
  return blinker;
};

var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = Dancer.prototype.step;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.oldStep();
  this.$node.toggle();
};
