(function () {

  function setFontSize() {
    windowWidth = $(window).width();

    if (windowWidth >= 1800) {
      windowWidth = 1800;
    }

    if (windowWidth > 1500) {
      fontSize = windowWidth / 1500 * 19 + 'px';
    } else {
      fontSize = '19px';
    }

    $body.css({
      'font-size': fontSize
    });
  }

  //
  var $body = $('.body-content');
  var windowWidth;
  var fontSize;
  setFontSize();

  $(window).resize( function() {
    setFontSize();
  });


  // Define keys and functions
  // Key code reference http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes

  var keyObj = {
      49: function() {
          $('.body-content').attr('class', 'body-content page-theme--dark')
      },
      50: function() {
          $('.body-content').attr('class', 'body-content page-theme--purple')
      },
      51: function() {
          $('.body-content').attr('class', 'body-content page-theme--green')
      },
      52: function() {
          $('.body-content').attr('class', 'body-content page-theme--red')
      },
      53: function() {
          $('.body-content').attr('class', 'body-content page-theme--blue')
      }
  };

  $(document).on('keydown', function(e) {
      if ($.inArray(e.which + '', Object.keys(keyObj)) >= 0) {
          keyObj[e.which]();
      }
  });

}) ();

