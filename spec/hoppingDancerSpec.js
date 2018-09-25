describe('hoppingDancer', function() {

  var hoppingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hoppingDancer = makeHoppingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(hoppingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node hop', function() {
    sinon.spy(hoppingDancer.$node, 'css');
    hoppingDancer.step();
    expect(hoppingDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(hoppingDancer, 'step');
      expect(hoppingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(hoppingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hoppingDancer.step.callCount).to.be.equal(2);
    });
  });
});