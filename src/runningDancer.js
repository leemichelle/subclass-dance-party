var makeRunningDancer = function(top, left, timeBetweenSteps, img = "assets/images/llama.gif") {
  const runner = new RunningDancer(top, left, timeBetweenSteps, img);
  return runner;
};

var RunningDancer = function(top, left, timeBetweenSteps, img) {
  Dancer.call(this, top, left, timeBetweenSteps, img);
  this.oldStep = Dancer.prototype.step;
  this.position = left;
  this.$node.addClass('llama');
};

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;


RunningDancer.prototype.step = function() {
};