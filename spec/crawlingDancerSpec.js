describe('crawlingDancer', function() {

  var crawlingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crawlingDancer = makeCrawlingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(crawlingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node crawl', function() {
    sinon.spy(crawlingDancer.$node, 'css');
    crawlingDancer.step();
    expect(crawlingDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(crawlingDancer, 'step');
      expect(crawlingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(crawlingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(crawlingDancer.step.callCount).to.be.equal(2);
    });
  });
});