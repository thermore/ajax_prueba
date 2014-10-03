var url = "https://alumnos-mcsd2014.azure-mobile.net/Tables/alumnos";


function pintarTabla(datos) {
    var tabla = document.getElementById("datos");

    while (tabla.childNodes.length > 0) {
        tabla.removeChild(tabla.childNodes[0]); //borro la tabla por si tiene cosas
    }
    for (var i = 0; i < datos.length; i++) {
        var fila = document.createElement("tr"); //creo una fila

        var c1 = document.createElement("td"); //creo 3 td
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");

        var t1 = document.createTextNode(datos[i].nombre);
        var t2 = document.createTextNode(datos[i].edad);
        var t3 = document.createTextNode(datos[i].nota);

        c1.appendChild(t1);
        c2.appendChild(t2);
        c3.appendChild(t3);

        fila.appendChild(c1);
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appendChild(fila); //a la tabla le agrego la fila
    }
}

function cargar() {
    var ajax = new XMLHttpRequest(); //creo un objeto ajax, siempre con el XMLHttpRequest();

    ajax.open("get", url); //3 parámetros, (url, peticiones asíncronas(x defecto es true), password del usuario)

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {  //  4-->si hemos terminado la petición, que está listo
            var datos = ajax.responseText;  //en datos tengo el texto devuelto
            var res = eval(datos);  //lo convertimos en json
            pintarTabla(res);
        }
    };
    ajax.send(null); //le pongo siempre un objeto, por get siempre va por url
}

(function(){
    cargar();
})();