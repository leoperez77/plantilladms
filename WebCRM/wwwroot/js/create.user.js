(jQuery)(function ($) {
    $(function () {
        $(document).ready(function () {
            var array = $("select#Usuario_IdEmpresa > option");

            var options = {};
            $.map(array, function (o) {
                options[$(o).val()] = $(o).text();
            });
            
            
            $("a#AssignCompany").on('click', function (event) {
                event.preventDefault();
                swal({
                    title: 'Asociar Compañia',
                    // type: 'info',
                    input: 'select',
                    inputOptions: options,
                    inputPlaceholder: 'Seleccionar',
                    showCancelButton: false,
                    showConfirmButton: true,
                    inputValidator: (value) => {
                        $("input#Usuario_IdEmpresa2").val(value);
                        return;
                    },

                });
            });
            // fin custom fn

        });
    });
});