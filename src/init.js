$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    const dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    const dancerMakerFunction = window[dancerMakerFunctionName];

    const height = $('body').height() * (0.6 * Math.random() + 0.20);
    const width = $('body').width() * (0.6 * Math.random() + 0.20);

    const dancer = dancerMakerFunction(
      height,
      width,
      Math.random() * (1000 - 500) + 500,
      window.dancers.length
    );

    const neighbors = window.dancers.forEach(item => { 
      const neighborHDistance = height - item.$node.offset().top;
      const neighborWDistance = width - item.$node.offset().left;
      if (((neighborWDistance * neighborWDistance) + 
        (neighborHDistance * neighborHDistance)) < 40000) {
        item.sayHi();
        dancer.sayHi();
      }
    });
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {

    window.dancers.forEach((item) => {
      if (item.$node.has('.ladyDancer').length === 0) {
        item.lineUp($('body').height());
      }
    });

    const filteredDancers = window.dancers.filter(item => {
      return (item.$node.has('.ladyDancer').length !== 0);
    });

    if (filteredDancers.length === 0) {
      const dancer = makeDancer('50%', $('body').width() * 0.4, 0, 
        window.dancers.length, 'assets/images/lisa.gif');
      window.dancers.push(dancer);
      dancer.$node.find('img').addClass('ladyDancer');
      $('body').append(dancer.$node);
    }
  });

  $('body').on('mouseover', '.dancer', function(event) {
    const found = window.dancers.filter((item) => {
      return item.$node.attr('id') === $(this).attr('id');
    });
    found[0].speak();
  });
});

