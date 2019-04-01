/* Almacen de slider en una variable */
var slider = $('#slider');
/* Almacen de botones en variables */
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

/*Mover la ultima imagen a la primera posición*/
$('#slider section:last').insertBefore('#slider section:first');
/* Mostrar la primera imagen en la primera posición */
slider.css('margin-left', '-'+100+'%');

function moverD(){
  slider.animate({marginLeft:'-'+200+'%'},700, function(){
    $('#slider section:first').insertAfter('#slider section:last');
    slider.css('margin-left', '-'+100+'%');
  });
}

function moverI(){
  slider.animate({marginLeft:0},700, function(){
    $('#slider section:last').insertBefore('#slider section:first');
    slider.css('margin-left', '-'+100+'%');
  });
}

siguiente.on('click', function() {
  moverD();
});

anterior.on('click', function() {
  moverI();
});

function autoplay(){
  interval = setInterval(function(){
    moverD();
  }, 3000);
}

autoplay();
