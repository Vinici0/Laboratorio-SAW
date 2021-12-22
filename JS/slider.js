$(document).ready(function(){

    let info = {
        padre: $('#info'),
        numeroSlider:  $('#info').children('.slide').length,
        posicion: 1  
    };

    info.padre.children('.slide').first().css({
        'left': 0
    });


    // Función para que se pueda repetir varias veces por el cambio de tamaño de la pagina
     
    let altoInfo = function(){
        let alto = info.padre.children('.active').outerHeight()
        info.padre.animate({
            'height': alto + 'px'
        });
        // window.scroll(0,findPos(document.getElementById("#info")));
        // let scrollDiv = document.getElementById("info").offsetTop;
        // console.log(scrollDiv)
        // window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    };

    let altoContenedor = () => {
        let altoVentana = $(window).height();
        if(altoVentana <= $('#contenedor').outerHeight()+200){
            $('#contenedor').css({
                'height': ''
            });
        } else{
            $('#contenedor').css({
                'height': altoVentana + 'px'
            });
        };
    };

    altoInfo();
    altoContenedor();
    
    // Para saber cuando la pagina cambie de tamaño, ejecutara la función altoBanner
    $(window).resize(function(){
        altoInfo();
        altoContenedor();
    });

    // Automatizar la creación de los botones para saber cuantos articulos tinene nuestro slider
    $('#info').children('.slide').each(function (){
        $('.botones').append('<span>')
    });

    $('.botones').children('span').first().addClass('active');
    
    //----------------------------------------------
    // INFO
    //----------------------------------------------

    // Boton siguiente
    $('#info-next').on('click', function(valor){
        valor.preventDefault()

         if(info.posicion < info.numeroSlider){

            // Asegurarnos de que todos los sliders empiecen desde la derecha
            info.padre.children().not('.active').css({
                'left': '100%'
            });

            // Para la animación, se quita la clase active y se la ponemos al sigueinte elmento
            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': '0'
            });

            // Animamos el slide anterior para que se deslice hacia la izquierda 
            $('#info .active').prev().animate({
                'left': '-100%'
            });

            $('.botones').children('.active').removeClass('active').next().addClass('active');

            info.posicion = info.posicion + 1;

         } else{
            //  Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
             $('#info .active').animate({
                 'left': '-100%'
             });

            //  Seleccionamos todos los slides que no tengan la clase .active
            // +y los posicionamos a la derecha
             info.padre.children().not('.active').css({
                 'left': '100%'
             });

            //  Eliminar la clase active y se la ponemos al primer elemento
             // Despues lo animamos
             $('#info .active').removeClass('active')
             info.padre.children('.slide').first().addClass('active').animate({
                 'left': '0'
             });

             $('.botones').children('.active').removeClass('active');
             $('.botones').children('span').first().addClass('active');

            //  Reseteamos la posición a 1
             info.posicion = 1;
         }

         altoInfo();
    });

    // Boton Anterior
    $('#info-prev').on('click', function(valor){
        valor.preventDefault()

        if(info.posicion > 1){
            // Manda todas las imagenes a la izquierda
            info.padre.children().not('.active').css({
                'left': '-100%'
            });
    
            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            $('.botones').children('.active').removeClass('active').prev().addClass('active');

            info.posicion = info.posicion - 1;

        } else{
            info.padre.children().not('.active').css({
                'left': '-100%'
            });

            $('#info .active').animate({
                'left': '100%'
            });

            $('#info .active').removeClass('active')
            info.padre.children().last().addClass('active').animate({
                'left': 0
            });

            $('.botones').children('.active').removeClass('active');
            $('.botones').children('span').last().addClass('active');

            info.posicion = info.numeroSlider;
        }

        altoInfo();
    });
});