var locastyle = (function() {
  'use strict';

  // Used to run scripts when the HTML is ready
  function fastInit() {
    locastyle.sidebarToggle.init();
    locastyle.sidebars.init();
  }

  // Used to run scripts that just when all things are ready
  function init() {
    locastyle.breakpoints.init();
    loadModules();
    locastyle.general.init();
    locastyle.btnGroup.init();
    locastyle.alert.init();
    locastyle.datepicker.init();
    locastyle.form.togglePasswordField();
    locastyle.form.triggerCalendar();
    checkClassForTrack();
    locastyle.browserDetect.init();
  }

  function loadModules() {
    $.each(locastyle.modules, function(i, module){
      locastyle[module].init();
      console.info("Locastyle: module [" + module + "] successfully initialized.");
      
      $.event.trigger(module+':ready', [i, module]);
    });
  }

  function checkClassForTrack() {
    if($("html").hasClass("ls-trackevent-on")){
      locastyle.trackEvents.init();
    }
  }

  function getModules() {
    var modules = [];
    $("[data-ls-module]").each(function () {
      var module = $(this).data("ls-module");
      if ( modules.indexOf(module) === -1 ) {
        modules.push(module);
      }
    });
    return modules;
  }

  return {
    init: init,
    fastInit: fastInit
  };

}());

var ls = locastyle;

$(window).load(function() {
  'use strict';
  ls.init();
});

$(document).ready(function(){
  'use strict';
  ls.fastInit();
});
