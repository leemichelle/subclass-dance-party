var makeRunningDancer = function(top, left, timeBetweenSteps, idx, img = 'assets/images/llama.gif') {
  const runner = new RunningDancer(top, left, timeBetweenSteps, idx, img);
  return runner;
};

var RunningDancer = function(top, left, timeBetweenSteps, idx, img) {
  Dancer.call(this, top, left, timeBetweenSteps, idx, img);
  this.oldStep = Dancer.prototype.step;
  this.position = left;
  this.noise = 'Me llama llama';
  this.$node.addClass('llama');
};

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = RunningDancer;

RunningDancer.prototype.step = function() {};