var makeRollingDancer = function(top, left, timeBetweenSteps, img = 'assets/images/rolly.png') {
  const rolling = new RollingDancer(top, left, timeBetweenSteps, img);
  return rolling;
};

var RollingDancer = function(top, left, timeBetweenSteps, img) {
  Dancer.call(this, top, left, timeBetweenSteps, img);
  this.oldStep = Dancer.prototype.step;
  this.rotation = 0;
};

RollingDancer.prototype = Object.create(Dancer.prototype);
RollingDancer.prototype.constructor = RollingDancer;


RollingDancer.prototype.step = function() {
  this.oldStep();
  this.rotation += 30;
  this.$node.css({'transform': `rotate(${this.rotation}deg)`});
};