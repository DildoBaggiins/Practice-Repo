$(document).ready(function(){
  // alert('kwea')
  /* Para cambiar el color al boton cuando este activo */
  $('.category-list .category-item[category="all"]').addClass('ct-item-active');
  /* FILTRO GENERAL */
  $('.category-item').click(function(){

    var catProduct = $(this).attr('category');
    console.log(catProduct);

    /* Cambiar de color a los demas botones*/
    $('.category-item').removeClass('ct-item-active');
    $(this).addClass('ct-item-active');

    /* Filtrado de Productos */
    $('.product-item').css('transform', 'scale(0)');
    function hideProduct(){
      $('.product-item').hide();
    } setTimeout(hideProduct,400);

    /* Mostrar Productos Filtrados */
    function showProduct(){
      $('.product-item[category="'+catProduct+'"]').show();
      $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
    } setTimeout(showProduct,400);
  });

    /* Mostrar TODOS los Productos */
    $('.category-item[category="all"]').click(function(){
      function showAll(){
      $('.product-item').show();
      $('.product-item').css('transform', 'scale(1)');
    } setTimeout(showAll, 400);
    })
});
