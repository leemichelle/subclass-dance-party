var makeCrawlingDancer = function(top, left, timeBetweenSteps, idx, img = 'assets/images/berry.png', img2 = 'assets/images/turtle.png') {
  const crawler = new CrawlingDancer(top, left, timeBetweenSteps, idx, img, img2);
  return crawler;
};

var CrawlingDancer = function(top, left, timeBetweenSteps, idx, img, img2) {
  Dancer.call(this, top, left, timeBetweenSteps, idx, img, img2);
  this.oldStep = Dancer.prototype.step;
  this.position = left;
  this.noise = 'Nommmmm';
};

CrawlingDancer.prototype = Object.create(Dancer.prototype);
CrawlingDancer.prototype.constructor = CrawlingDancer;


CrawlingDancer.prototype.step = function() {
  this.oldStep();
  this.position -= 10;
  this.$node.css({'left': `${this.position}px`});
};