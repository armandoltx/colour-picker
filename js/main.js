$( document ).ready ( function (){
  console.log('jquery version', $.fn.jquery);
  var r;
  var g;
  var b = 0;
  var offsetRG = $('#rg').offset();
  var offsetB = $('#b-line').offset();

$('#b').text(b);
  $( "#rg" ).mousemove(function( event ) {

    r = ((event.clientX-offsetRG.left)  / 2) - 15;
    g = ((event.clientY-offsetRG.top)  / 2) - 15;

    if ( r <= 0 ){
      r = 0;
    }
    if ( r >= 255 ){
      r = 255;
    }
    if ( g <= 0 ){
      g = 0;
    }
    if ( g >= 255 ){
      g = 255;
    }
    $('#r').text(r);
    $('#g').text(g);

    $('#rg').css({
       'background-color': 'rgb(' + r + ',' + g + ',' + b + ')'
    });
  });

  $('#b-line').change( function(  ) {
    b = $(this).val();
    if ( b <= 0 ){
      b = 0;
    }
    if ( b >= 255 ){
      b = 255;
    }
    $('#b').text(b);
  });
  console.log('here',b);
  $('#rg').css({
     'background-color': 'rgb(' + r + ',' + g + ',' + b + ')'
  });


});
