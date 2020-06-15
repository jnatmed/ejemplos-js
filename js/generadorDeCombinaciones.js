var parcial = function (encabezado, ejercicios) {
  var _ejercicios = ejercicios || {},
    _encabezado = encabezado;

  function armaCombinaciones(cant) {
    for (var i = 0; i < cant; i++) {
      var ejemplar = _nuevoElemento("article", {
        class: "parcial",
        id: "parcial" + (i + 1),
      });
      document.body.appendChild(ejemplar);
      ejemplar.appendChild(_nuevoElemento("header", {}, _encabezado));
      for (var s in ejercicios.secciones) {
        var section = _nuevoElemento("section", {
          class: "seccion secccion" + s,
        });
        ejemplar.appendChild(
          _nuevoElemento(
            "p",
            { class: "tituloSeccion" },
            ejercicios.secciones[s].nombre
          )
        );
        ejemplar.appendChild(section);
        var ejDeSeccion = ejercicios.secciones[s].ejercicios;
        for (var numero in ejDeSeccion) {
          var aleatorio = Math.floor(
              Math.random() * ejDeSeccion[numero].enunciados.length
            ),
            enunciado = _nuevoElemento(
              "article",
              { class: "ejercicio " + numero },
              ejDeSeccion[numero].enunciados[aleatorio]
            ),
            puntaje = _nuevoElemento(
              "div",
              { class: "puntaje" },
              ejDeSeccion[numero].puntaje + " pts."
            );
          enunciado.prepend(puntaje);
          section.appendChild(enunciado);
        }
      }
    }
  }

  function _nuevoElemento(tag, atributos, contenido) {
    var atributos = atributos || {},
      contenido = contenido || "",
      elemento = document.createElement(tag);
    for (const propiedad in atributos) {
      elemento.setAttribute(propiedad, atributos[propiedad]);
    }
    if (!contenido.tagName) elemento.innerHTML = contenido;
    else elemento.appendChild(contenido);

    return elemento;
  }
  return {
    armaCombinaciones: armaCombinaciones,
  };
};
