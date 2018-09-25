describe('runningDancer', function() {

  var runningDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    runningDancer = makeRunningDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(runningDancer.$node).to.be.an.instanceof(jQuery);
  });
});