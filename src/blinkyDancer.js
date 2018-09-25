var makeBlinkyDancer = function(top, left, timeBetweenSteps, idx, img = 'assets/images/piggy.png') {
  const blinker = new BlinkyDancer(top, left, timeBetweenSteps, idx, img);
  return blinker;
};

var BlinkyDancer = function(top, left, timeBetweenSteps, idx, img) {
  Dancer.call(this, top, left, timeBetweenSteps, idx, img);
  this.oldStep = Dancer.prototype.step;
  this.noise = 'Oink!';
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
