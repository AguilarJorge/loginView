$(function() {
  //Limpiar clases del input al hacer focusin
  $('.loginView_login .formularios .form .campo input').focusin(function(){
    $(this).parent('.campo').removeClass('validado error').addClass('movido');
  });
  //Validar si el input esta vacio
  $('.loginView_login .formularios .form .campo input').focusout(function(){
    var campo = $(this).parent('.campo');
    $(this).val().length > 0 ? campo.addClass('validado') : campo.removeClass('movido validado');
  });
  //Olvide mi contraseña
  $('.loginView_login .formularios .formLogin .laOlvide').click(function(){
    var form = $('.loginView_login .formularios .formContra');
    cambiarForm('recuperar', form);
  });
  //Me quiero registrar
  $('.loginView_login .formularios .formLogin .contenedorBoton .crear').click(function(){
    var form = $('.loginView_login .formularios .formRegistro');
    cambiarForm('registrar', form);
  });
  //Regresar
  $('.loginView_login .formularios .botonRegresar').click(function(){
    limpiarForm();
    var papa = $(this).parents('.formularios');
    var form = papa.hasClass('recuperar') ? '.formContra' : '.formRegistro';
    papa.children(form).fadeOut(function(){
      papa.removeClass('recuperar registrar');
      papa.children('.formLogin').fadeIn(function(){
        papa.find('.botonRegresar').css('display','none');
        papa.find('.botonLogin').css('display','flex');
      });
    });
  });
  //A loguear
  $('.loginView_login .formularios .botonLogin').click(function(e){
    var errors = false;
    $('.formLogin .campo').each(function(index, campo){
      var input = $(campo).children('input');
      if (input.val().length <= 0) {
        $(campo).addClass('error');
        errors = true;
      }
    })
    if (errors) e.preventDefault();
  })

  //Funcion para alternar forms
  function cambiarForm(clase, form){
    var papa = $('.loginView_login .formularios');
    papa.find('.formLogin').fadeOut(function(){
      limpiarForm();
      papa.addClass(clase);
      form.fadeIn(function(){
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
  