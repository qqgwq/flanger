// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .


$(document).on("turbolinks:load", function(){
  $('#instrument_image').change(function(){
    if (typeof(FileReader) != 'undefined') {
      var dvPreview = $('#list');
      dvPreview.html("");
      $($(this)[0].files).each(function(){
        var file = $(this);
          var reader = new FileReader();
          reader.onload = function(e) {
            var img = $('<img>');
            img.attr("style", "width: 250px; height:300px; padding: 10px");
            img.attr("src", e.target.result);
            dvPreview.append(img);
          }
          reader.readAsDataURL(file[0]);
      });
    } else {
      alert("This browser dose not support HTML5 FileReader");
    }
  });
});