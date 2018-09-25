var makeRollingDancer = function(top, left, timeBetweenSteps, idx, img = 'assets/images/rolly.png') {
  const rolling = new RollingDancer(top, left, timeBetweenSteps, idx, img);
  return rolling;
};

var RollingDancer = function(top, left, timeBetweenSteps, idx, img) {
  Dancer.call(this, top, left, timeBetweenSteps, idx, img);
  this.oldStep = Dancer.prototype.step;
  this.rotation = 0;
  this.noise = 'AHHH';
};

RollingDancer.prototype = Object.create(Dancer.prototype);
RollingDancer.prototype.constructor = RollingDancer;


RollingDancer.prototype.step = function() {
  this.oldStep();
  this.rotation += 30;
  this.$node.css({'transform': `rotate(${this.rotation}deg)`});
};