$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    const dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    const dancerMakerFunction = window[dancerMakerFunctionName];

    const dancer = dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * (1000 - 500) + 500,
      window.dancers.length
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {

    const dancer = makeDancer('60%', $('body').width() * 0.4, 0, 
      window.dancers.length, 'assets/images/lisa.gif');
    window.dancers.push(dancer);
    dancer.$node.find('img').addClass('ladyDancer');
    $('body').append(dancer.$node);

    window.dancers.forEach((item) => {
      item.lineUp($('body').height());
    });
  });

  $('body').on('mouseover', '.dancer', function(event) {
    const found = window.dancers.filter((item) => {
      return item.$node.attr('id') === $(this).attr('id');
    });
    found[0].speak();
  });
});

