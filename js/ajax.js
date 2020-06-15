var AJAX = function (asignatura, funcionDeCallback) {
  var _asignatura = asignatura || {},
    _funcion = funcionDeCallback || {};

  loadXMLDoc();

  function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        _funcion(this);
      }
    };
    xmlhttp.open("GET", "jsonParcial/" + asignatura + ".js");
    xmlhttp.send();
  }
};
