$(function () {

    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    $('.carousel').carousel({
      interval: 3000
    });

    $('#contacto').on('show.bs.modal', function (e){
      console.log('El modal contacto se está mostrando');

      $('#contactoBtn').removeClass('btn-outline-primary');
      $('#contactoBtn').addClass('btn-success');
      $('#contactoBtn').prop('disabled', true);

    });

    $('#contacto').on('shown.bs.modal', function (e){
      console.log('El modal contacto se mostró');
    });

    $('#contacto').on('hide.bs.modal', function (e){
      console.log('El modal contacto se oculta');
    });

    $('#contacto').on('hidden.bs.modal', function (e){
      console.log('El modal contacto se ocultó');

      $('#contactoBtn').prop('disabled', false);
      $('#contactoBtn').removeClass('btn-success');
      $('#contactoBtn').addClass('btn-outline-primary');

    });

})