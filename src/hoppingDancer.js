var makeHoppingDancer = function(top, left, timeBetweenSteps, img = "assets/images/bunny.png") {
  const hopping = new HoppingDancer(top, left, timeBetweenSteps, img);
  return hopping;
};

var HoppingDancer = function(top, left, timeBetweenSteps, img) {
  Dancer.call(this, top, left, timeBetweenSteps, img);
  this.oldStep = Dancer.prototype.step;
  this.position = top;
  this.up = false;
};

HoppingDancer.prototype = Object.create(Dancer.prototype);
HoppingDancer.prototype.constructor = HoppingDancer;


HoppingDancer.prototype.step = function() {
  this.oldStep();
  this.position = (this.up) ? this.position + 50 : this.position - 50;
  this.up = !(this.up);
  this.$node.css({'top': `${this.position}px`});
};