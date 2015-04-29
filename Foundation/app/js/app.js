'use strict';

var app = (function (document, $) {

  /*
  PRIVATE:
  -------
   */
  var docElem = document.documentElement,

    _userAgentInit = function () {
      docElem.setAttribute('data-useragent', navigator.userAgent);
    },
    _highlightJsInit = function(){
      hljs.initHighlightingOnLoad();
    },
    _init = function () {

      $(document).on('click','header nav ul li a', function(e){
        e.preventDefault();
        $('#examples > section').hide();
        $('#examples section#' + $(this).data('section')).fadeIn(400);
        return false;
      });

      _userAgentInit();
      _highlightJsInit();
    };

  /*
  PUBLIC:
  ------
   */
  return {
    init: _init
  };

})(document, jQuery);

(function () {
  app.init();
})();
