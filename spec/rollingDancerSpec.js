describe('rollingDancer', function() {

  var rollingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rollingDancer = makeRollingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rollingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node roll', function() {
    sinon.spy(rollingDancer.$node, 'css');
    rollingDancer.step();
    expect(rollingDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rollingDancer, 'step');
      expect(rollingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rollingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rollingDancer.step.callCount).to.be.equal(2);
    });
  });
});