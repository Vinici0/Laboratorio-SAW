const data = [
    {
        title: "Clínica Veterinaria Huellitas",
        texto: "Somos una veterinaria con veterinarios profresinales que diagnostican y tratan a los animales enfermos y heridos. Exportos en la prevención de la enfermedad y la mala salud, por ejemplo, mediante vacunaciones y prestando asesoramiento a los propietarios. Algunos veterinarios se especializan, por ejemplo en animales domésticos, ganado, caballos y animales de zoológico, por supuesto que estas especializaciones estan en funciones tempranas"
    },
    {
        title: "Principios",
        texto: " Toda labor es fundamentada en la ciencia del Bienestar Animal. <br> Lo que involucra el bienestar animal se define como un estado de salud física y mental permanente del animal en armonía con el medio. Este estado se basa en el respeto de Las cinco libertades",
        literals: [
            "Libertad de hambre, sed y malnutrición",
            "Libertad de miedo, ansiedad y angustia",
            "Libertad de incomodidad por condiciones físicas o térmicas",
            "Libertad de dolor, lesiones y enfermedades",
            "Libertad para expresar sus comportamientos naturales"
        ]
    },
    {
        title: "Misión",
        texto: "Ofrecer y realizar servicios vetérinarios de gran calidad y alto nivel técnico y científico, dirigidos a nuestros clientes y asus mascotas para satisfacer con excelentecia sus necesidades"
    },
    {
        title: "Visión",
        texto: "Ser una veterinaria autosustentable y muy productible, reconocida ocmo referente nacional en bienestar animal, responsable del cambio en la relación humano - animal en el Ecuador"
    }
];

const subtitle = document.querySelectorAll('.subtitulo');
const texto = document.querySelectorAll('.texto');
const literals = document.querySelectorAll('.literal');

async function obtenerDatos() {
    // const response = await fetch("file:///C:/Users/BRYAN/Documents/GitHub/Laboratorio-SAW/JS/slider.json", { credentials: 'same-origin' });
    // const json = await response.json();
    // En caso de contar con una API en vez de data -> json

    console.log(data)
    subtitle.forEach(function (datos, index) {
        datos.textContent = data[index].title;
    });

    texto.forEach(function (datos, index) {
        datos.textContent = data[index].texto;
    });

    literals.forEach(function (datos, index) {
        datos.textContent = data[1].literals[index];
        datos.style.fontFamily = "Advent Pro";
    });
}

obtenerDatos();

$(document).ready(function () {
    let info = {
        padre: $('#info'),
        numeroSlider: $('#info').children('.slide').length,
        posicion: 1
    };

    info.padre.children('.slide').first().css({
        'left': 0
    });


    // Función para que se pueda repetir varias veces por el cambio de tamaño de la pagina

    let altoInfo = function () {
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
        if (altoVentana <= $('#contenedor').outerHeight() + 200) {
            $('#contenedor').css({
                'height': ''
            });
        } else {
            $('#contenedor').css({
                'height': altoVentana + 'px'
            });
        };
    };

    altoInfo();
    altoContenedor();

    // Para saber cuando la pagina cambie de tamaño, ejecutara la función altoBanner
    $(window).resize(function () {
        altoInfo();
        altoContenedor();
    });

    // Automatizar la creación de los botones para saber cuantos articulos tinene nuestro slider
    $('#info').children('.slide').each(function () {
        $('.botones').append('<span>')
    });

    $('.botones').children('span').first().addClass('active');

    //----------------------------------------------
    // INFO
    //----------------------------------------------

    // Boton siguiente
    $('#info-next').on('click', function (valor) {
        valor.preventDefault()

        if (info.posicion < info.numeroSlider) {

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

        } else {
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
    $('#info-prev').on('click', function (valor) {
        valor.preventDefault()

        if (info.posicion > 1) {
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

        } else {
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