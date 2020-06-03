$(function() {    
  //Funcion para alternar forms
  function cambiarForm(clase, el){
    var papa = $('.loginView_login .formularios');
    papa.find('.formLogin').fadeOut(function(){
      limpiarForm();
      papa.addClass(clase);
      el.fadeIn(function(){
        papa.find('.botonLogin').css('display','none');
        papa.find('.botonRegresar').css('display','flex');
      });
    });
  }
  //Funcion para limpiar forms
  function limpiarForm(){
    $('.loginView_login .formularios')[0].reset();
    $('.loginView_login .formularios .form .campo').removeClass('movido validado error');
  }
});
  