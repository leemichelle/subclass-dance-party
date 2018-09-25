var makeBlinkyDancer = function(top, left, timeBetweenSteps, img = "assets/images/piggy.png") {
  const blinker = new BlinkyDancer(top, left, timeBetweenSteps, img);
  return blinker;
};

var BlinkyDancer = function(top, left, timeBetweenSteps, img) {
  Dancer.call(this, top, left, timeBetweenSteps, img);
  this.oldStep = Dancer.prototype.step;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
