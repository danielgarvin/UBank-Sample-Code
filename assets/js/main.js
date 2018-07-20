$(function () {
    var $tabs = $('.tab');
  
    function moveTo(index) {
      $tabs
        .removeClass('current')
        .eq(index)
        .addClass('current');
      $('.navigation .prev').toggle(index > 0);
      var finished = index >= $tabs.length - 1;
      $('.navigation .next').toggle(!finished);
      $('.navigation [type=submit]').toggle(finished);
    }
  
    function currentIndex() {
      return $tabs.index($tabs.filter('.current'));
    }
  
    // Previous button
    $('.navigation .prev').click(function() {
        moveTo(currentIndex() - 1);
    });
  
    // Next button
    $('.navigation .next').click(function() {
        moveTo(currentIndex() + 1);
      
    });

    moveTo(0); // Let's Go to the First Tab
  
});





  // Masking Currency Inputs
  $('.dollar').mask("000,000,000,000", {reverse: true});