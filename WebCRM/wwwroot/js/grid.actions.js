(jQuery)(function ($) {
    $(function () {
        $(document).ready(function () {
            $('a.btn-delete').click(function(event){
                event.preventDefault();
                var originLink = $(this).attr("href");
                sebSweetConfirm(originLink);
            });

            $('a.btn-copy').click(function (event) {
                event.preventDefault();
                var originLink = $(this).attr("href");
                sebSweetConfirmCopy(originLink);
            });

        });

       

    });
});

function sebSweetConfirm(originLink){
    Swal.fire({
    title: 'Está seguro?',
    text: "Esta operación no es reversible!",
    // type: 'warning',
    showCancelButton: true,
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    confirmButtonText: 'Si, eliminar!',
    buttonsStyling: false
    }).then(function(isConfirm) {
        if (typeof isConfirm.value !== 'undefined') {
            if(isConfirm.value) {
                window.location.href = originLink;
                return true;
            }
        } else {
            return false;
        }
    }).catch(swal.noop);
}

function sebSweetConfirmCopy(originLink) {
    Swal.fire({
        title: 'Confirmación',
        text: "Seguro de duplicar formulario?",
        // type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-dark',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        buttonsStyling: false
    }).then(function (isConfirm) {
        if (typeof isConfirm.value !== 'undefined') {
            if (isConfirm.value) {
                window.location.href = originLink;
                return true;
            }
        } else {
            return false;
        }
    }).catch(swal.noop);
}