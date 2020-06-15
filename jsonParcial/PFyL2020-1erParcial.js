var encabezado =
  "<img src='images/EscudoUNLuFondoBlanco.svg'><h1>Programación Funcional y Lógica</h1><h2>Lic. en Sistemas de Información</h2><h3>Primer Evaluacion Parcial</h3><section class='datosAlumno'><p>Alumno: <span class='placeHolder'>Apellido y Nombre</span></p><p>Leg: <span class='placeHolder'>Número</span></p><p class='fecha'>29/05/2020</p></section><h4>Condición de Aprobación: </h4><section class='condiciones'><p class='desaprobado'>Menos de 60 => <strong>Desaprobado</strong></p><p class='regular'>60 pts => <strong>4 (cuatro)</strong></p><p class='aprobado'>80 pts => <strong>7 (siete)</strong></p></section>";

var ejercicios = {
  secciones: [
    {
      nombre: "Paradigma Lógico - Programación",
      ejercicios: {
        ej1: {
          puntaje: 20,
          enunciados: [
            "<p class='enunciado'>Dada la siguiente base de hechos:</p><p class='ejemplo'>%partido(EquipoLocal, GolesEquipoLocal, EquipoVisitante, GolesEquipoVisitante).</p><p class='hecho'>partido(sacaChispasDeChocolate, 3, locosDelBalon, 2).</p><p class='hecho'>partido(sospechososDeNunca, 1, turcosEnLaNeblina, 5).</p><p class='hecho'>partido(turcosEnLaNeblina, 2, sacaChispasDeChocolate,2).</p><p class='hecho'>partido(locosDelBalon, 2, sospechososDeNunca, 0).</p><p class='hecho'>partido(sacaChispasDeChocolate, 2, sospechososDeNunca, 1).</p><p class='hecho'>partido(locosDelBalon, 2, turcosEnLaNeblina, 4).</p><p class='enunciado'>a) Escribir un predicado que relacione a un equipo con los equipos que les haya hecho goles.<br>Por Ejemplo:</p><p class='ejemploCodigo'>?- leHizoGoles(sospechososDeNunca, Equipo).</p><p class='ejemploResultado'>Equipo = turcosEnLaNeblina;<br>Equipo = sacaChispasDeChocolate;<br>false.</p><p class='enunciado'>b) Escribir un predicado que relacione un equipo con los puntos que sacó en el partido frente a otro equipo.</p><p class='aclaracion'>Nota= El que gana se lleva 3 puntos, el empate da 1 punto a cada equipo y 0 para el perdedor.</p><p class='enunciado'>Por ejemplo:</p><p class='ejemplo'> %puntos(Equipo1,EquipoContrario, PuntosDelEquipo1).</p><p class='ejemploCodigo'> ?- puntos(sacaChispasDeChocolate, turcosEnLaNeblina,Puntos).</p><p class='ejemploResultado'>Puntos = 1.</p><p class='ejemploCodigo'> ?- puntos(sacaChispasDeChocolate, EquipoContrario, 3).</p><p class='ejemploResultado'> EquipoContrario = locosDelBalon;<br>EquipoContrario = sospechososDeNunca.</p>",
            "<p class='enunciado'>Dada la siguiente base de hechos:</p><p class='ejemplo'>%partido(EquipoLocal, GolesEquipoLocal, EquipoVisitante, GolesEquipoVisitante).</p><p class='hecho'>partido(sacaChispasDeChocolate, 3, locosDelBalon, 2).</p><p class='hecho'>partido(sospechososDeNunca, 1, turcosEnLaNeblina, 5).</p><p class='hecho'>partido(turcosEnLaNeblina, 2, sacaChispasDeChocolate,2).</p><p class='hecho'>partido(locosDelBalon, 2, sospechososDeNunca, 0).</p><p class='hecho'>partido(sacaChispasDeChocolate, 2, sospechososDeNunca, 1).</p><p class='hecho'>partido(locosDelBalon, 2, turcosEnLaNeblina, 4).</p><p class='enunciado'>a) Escribir un predicado que relacione a un equipo con los equipos le ganó.<br>Por Ejemplo:</p><p class='ejemploCodigo'>?- leGano(turcosEnLaNeblina, Equipo).</p><p class='ejemploResultado'>Equipo = sospechososDeNunca;<br>Equipo = locosPorElBalon;<br> false.</p><p class='ejemploCodigo'>?- leGano(Equipo,turcosEnLaNeblina).</p><p class='ejemploResultado'>false.<br>Nota= Nadie le ganó a turcosEnLaNeblina</p><p class='enunciado'>b) Escribir un predicado que relacione 2 equipos que hayan jugado un partido que terminó en empate.</p><p class='enunciado'>Por ejemplo:</p><p class='ejemplo'> %puntos(Equipo1, EquipoContrario, PuntosDelEquipo1).</p><p class='ejemploCodigo'> ?- empate(Local,Visitante).</p><p class='ejemploResultado'>Local = turcosEnLaNeblina,<br>Visitante = sacaChispasDeChocolate; false.</p><p class='ejemploCodigo'> ?- empate(locosDelBalon, Visitante).</p><p class='ejemploResultado'>false.</p>",
            "<p class='enunciado'> Dada la siguiente base de hechos:</p><p class='ejemplo'> % diasVacaciones(Empleado, Dias).</p><p class='hecho'> diasVacaciones(juan, 20).</p><p class='hecho'> diasVacaciones(pedro, 30).</p><p class='hecho'> diasVacaciones(carlos, 15).</p><p class='hecho'> diasVacaciones(roberto, 20).</p><p class='ejemplo'>%comienzoVacaciones(empleado, diaComienzoVacaciones, mesComienzoVacaciones).</p><p class='hecho'>comienzoVacaciones(juan, 9, 1).</p><p class='hecho'>comienzoVacaciones(pedro, 1, 2).</p><p class='hecho'>comienzoVacaciones(carlos, 20, 1).</p><p class='hecho'>comienzoVacaciones(roberto, 10, 2).</p><p class='enunciado'>Escribir un predicado que relacione una fecha con el empleado que se encuentra de vacaciones.<br> Por Ejemplo:</p><p class='ejemploCodigo'> ?- enVacaciones(15,2, Empleado).</p><p class='ejemploResultado'> Empleado = pedro;<br>Empleado = roberto;<br>false.</p><p class='ejemploCodigo'>?- enVacaciones(15,3, Empleado).</p><p class='ejemploResultado'>Empleado = nadie.</p>",
            "<p class='enunciado'>Dada la siguiente base de hechos:</p><p class='ejemplo'>%tiempoDedicado(Actividad,Minutos).</p><p class='hecho'> tiempoDedicado(almuerzoDeNegocios,120).</p><p class='hecho'>tiempoDedicado(atenderCliente,10).</p><p class='hecho'>tiempoDedicado(atenderClienteVip,30).</p><p class='hecho'>tiempoDedicado(reunionConGerente,30).</p><p class='ejemplo'>%agenda(Actividad, HoraComienzo, MinutosComienzo).</p><p class='hecho'>agenda(reunionConGerente, 9, 30).</p><p class='hecho'>agenda(atenderClienteVip, 10, 30).</p><p class='hecho'>agenda(almuerzoDeNegocios, 12, 0).</p><p class='hecho'>agenda(atenderClienteVip, 16, 30).</p><p class='hecho'>agenda(atenderClienteVip, 17, 10).</p><p class='enunciado'>Escribir un predicado que relacione un horario con lo que debería estar haciendo elempleado. <br>Por Ejemplo:</p><p class='ejemploCodigo'>?- haciendo(12,45, Actividad).</p><p class='ejemploResultado'>Actividad = almuerzoDeNegocios</p><p class='ejemploCodigo'>?- haciendo(17,45, Actividad).</?-><p class='ejemploResultado'>Actividad = libre</p>",
          ],
        },
        ej2: {
          puntaje: 30,
          enunciados: [
            "<p class='enunciado'>Se necesita saber el puntaje que suma un Pacman en su recorrigo hasta llegar a la terminar el nivel. En su recorrido se puede encontrar con frutas con distinto puntaje y con el activador del bonus que duplica todos los puntos de las cosas que coma durante 5 pasos.</p><p class='enunciado'>Escribir un predicado que relacione una lista de objetos que se come el Pacman con el puntaje obtenido. Para ello usar la siguiente base de hechos.</p><p class='hecho'>puntaje(puntito, 1).</p><p class='hecho'>puntaje(frutilla, 10).</p><p class='hecho'>puntaje(banana, 30).</p><p class='hecho'>puntaje(cerezas, 50).</p><p class='hecho'>puntaje(fantasma, 100).</p><p class='enunciado'>Por ejemplo</p><p class='ejemploCodigo'> ?- puntajePacman([puntito, frutilla, puntito, puntito, banana, puntito, puntito, fantasma, puntito, puntito, cerezas, puntito], Puntos).</p><p class='ejemploResultado'>Puntos = 198.</p><p class='ejemploCodigo'>?- puntajePacman([puntito, puntito, puntito, banana, puntito, puntito, bonus, puntito, puntito,fantasma, puntito, puntito, cerezas, puntito], Puntos).</p><p class='ejemploResultado'>Puntos = 294.</p>",
            "<p class='enunciado'>Escribir un predicado que relacione una lista de gustos de helado con una lista formada por todas las combinacionesque se pueden hacer para vender helados de 2 gustos. Realizar las 2 posibilidades. Una que permita repeticiones y otra que no los permita.<br>Por ejemplo</p><p class='ejemploCodigo'> ?- heladosPosiblesConRepeticion([frutilla,chocolate, americana, dulceDeLeche], Lista).</p><p class='ejemploResultado'>Lista = [[frutilla, frutilla],[frutilla, chocolate], [frutilla, americana], [frutilla, dulceDeLeche], [chocolate,chocolate], [chocolate, americana], [chocolate, dulceDeLeche], [americana, americana], [americana, dulceDeLeche], [dulceDeLeche,dulceDeLeche]].</p><p class='ejemploCodigo'>?- heladosPosiblesSinRepeticion([frutilla,chocolate, americana, dulceDeLeche], Lista).</p><p class='ejemploResultado'>Lista = [[frutilla, chocolate], [frutilla, americana], [frutilla, dulceDeLeche], [chocolate, americana], [chocolate,dulceDeLeche], [americana, dulceDeLeche]].</p>",
            "<p class='enunciado'> Escribir un predicado que relaciona tres listas que representan las 3 filas de un tablero de TATETI, con el símbolo que gana la partida.</p><p class='aclaracion'> Nota: El símbolo 'v' representa que la casilla no es de ninguno de los jugadores porque se ganó el juego antes y quedó vacía.</p><p class='aclaracion'>Nota2: Todas las partidas ingresadas tienen 1 solo ganador. No es necesario controlar ese aspecto.</p><p class='enunciado'>Por ejemplo:</p><p class='ejemploCodigo'>?- tateti([x,x,x],[o,x,o],[o,o,v], Ganador).</p><p class='ejemploResultado'>Ganador = x.</p><p class='ejemploCodigo'>?- tateti([o,x,x],[o,x,o],[o,v,x], Ganador).</p><p class='ejemploResultado'>Ganador = o.</p><p class='ejemploCodigo'>?- tateti([o,x,o],[v,o,x],[o,x,v], o).</p><p class='ejemploResultado'>true.</p>",
            "<p class='enunciado'>Escribir un predicado que relacione una lista con las palabras que forman un número menor de 1000 escrito en letras con el numero en sí.</p><p class='ejemploCodigo'>?- deNombreANumero([ciento,cuarenta, y, dos], N).</p><p class='ejemploResultado'>N = 142.</p><p class='ejemploCodigo'>?- deNombreANumero([doscientos,dieciseis], N).</p><p class='ejemploResultado'>N = 216.</p>",
          ],
        },
      },
    },
    {
      nombre:
        "Paradigma Lógico - Logica Proposicional, de Predicados y Clausal",
      ejercicios: {
        ej1: {
          puntaje: 7,
          enunciados: [
            "<p class='enunciado'>Demostrar, paso a paso, la siguiente equivalencia lógica</p><p class='formula'>(r => p) &or; q &equiv; r => (&not;p => q)</p>",
            "<p class='enunciado'>Demostrar, paso a paso, la siguiente equivalencia lógica</p><p class='formula'>r => (p => q) &equiv; (r => &not;p) &or; q</p>",
            "<p class='enunciado'>Demostrar, paso a paso, la siguiente equivalencia lógica</p><p class='formula'>p => (&not;q => &not;r) &equiv; r => (p => q)</p>",
            "<p class='enunciado'>Demostrar, paso a paso, la siguiente equivalencia lógica</p><p class='formula'>&not;p => (q => &not;r) &equiv; q => (r => p)</p>",
          ],
        },
        ej2: {
          puntaje: 15,
          enunciados: [
            "<p class='enunciado'>¿Cuáles son las reglas de inferencia, y en qué orden, se deben aplicar para demostrar que el siguiente razonamiento es válido?</p><ol><li><p class='premisa'>p => (q &or; r)</p></li><li><p class='premisa'>s => &not;q</p></li><li><p class='premisa'>t => &not;r</p></li><li><p class='premisa'>p &and; t</p></li><li><p class='conclusion'>&there4; q</p></li></ol>",
            "<p class='enunciado'>¿Cuáles son las reglas de inferencia, y en qué orden, se deben aplicar para demostrar que el siguiente razonamiento es válido?</p><ol><li><p class='premisa'>(p => q) => &not;r</p></li><li><p class='premisa'>s => (r &or; t)</p></li><li><p class='premisa'>t => v</p></li><li><p class='premisa'>s &and; &not;v</p></li><li><p class='conclusion'>&there4; p &and; &not;q</p></li></ol>",
            "<p class='enunciado'>¿Cuáles son las reglas de inferencia, y en qué orden, se deben aplicar para demostrar que el siguiente razonamiento es válido?</p><ol><li><p class='premisa'>p => &not;q</p></li><li><p class='premisa'>&not;p => (r => &not;q)</p></li><li><p class='premisa'>(&not;s &or; &not;r) => q</p></li><li><p class='premisa'>&not;s</p></li><li><p class='conclusion'>&there4; &not;r &and; &not;p</p></li></ol>",
            "<p class='enunciado'>¿Cuáles son las reglas de inferencia, y en qué orden, se deben aplicar para demostrar que el siguiente razonamiento es válido?</p><ol><li><p class='premisa'>p => &not;q</p></li><li><p class='premisa'>r => &not;q</p></li><li><p class='premisa'>(s &or; t) => u</p></li><li><p class='premisa'>(&not;p &and; &not;r) => s</p></li><li><p class='conclusion'>&there4; q => u</p></li></ol>",
          ],
        },
        ej3: {
          puntaje: 12,
          enunciados: [
            "<p class='enunciado'>Aplicando unificación y resolución proposicional ¿Cuáles son las reglas de inferencia, y en qué orden, se deben aplicar para demostrar que el siguiente razonamiento es válido?</p><ol><li><p class='premisa'>&exist;(x): (C(x) &and; &not;V(x)</p></li><li><p class='premisa'>&forall;(x): (M(x) => V(x)</p></li><li><p class='premisa'>&forall;(x): [P(x) => (M(x) &or; G(x))]</p></li><li><p class='conclusion'>&there4; C(j) &and; G(p)</p></li></ol>",
            "<p class='enunciado'>Aplicando unificación y resolución proposicional ¿Cuáles son las reglas de inferencia, y en qué orden, se deben aplicar para demostrar que el siguiente razonamiento es válido?</p><ol><li><p class='premisa'>&forall;(x): [M(x) => (D(x) &or; P(x))]</p></li><li><p class='premisa'>&forall;(x): [(P(x) &and; L(x)) => F(x)]</p></li><li><p class='premisa'>&not;D(j) &and; L(j)</p></li><li><p class='conclusion'>&there4; M(j) => F(j)</p></li></ol>",
            "<p class='enunciado'>Aplicando unificación y resolución proposicional ¿Cuáles son las reglas de inferencia, y en qué orden, se deben aplicar para demostrar que el siguiente razonamiento es válido?</p><ol><li><p class='premisa'>N(a) &and; &not;B(a)</p></li><li><p class='premisa'>&forall;(x): [(P(x) &and; N(x)) => F(x)]</p></li><li><p class='premisa'>&forall;(x): [E(x) => (B(x) &or; P(x))]</p></li><li><p class='conclusion'>&there4; E(a) => F(a)</p></li></ol>",
            "<p class='enunciado'>Aplicando unificación y resolución proposicional ¿Cuáles son las reglas de inferencia, y en qué orden, se deben aplicar para demostrar que el siguiente razonamiento es válido?</p><ol><li><p class='premisa'>&forall;(x): [P(x) => (T(x) &or; G(x))]</p></li><li><p class='premisa'>&forall;(x): (T(x) => H(x))</p></li><li><p class='premisa'>&exist;(x) (N(x) &and; &not;H(x)</p></li><li><p class='conclusion'>&there4; N(b) &and; G(d)</p></li></ol>",
          ],
        },
        ej4: {
          puntaje: 8,
          enunciados: [
            "<p class='enunciado'> Dado el siguiente programa lógico:</p><p class='hecho'> a :- b,c.</p><p class='hecho'> b.</p><p class='hecho'>:- d.</p><p class='hecho'>c :- a.</p><p class='enunciado'>Indicar cuales de las siguientes cláusulas (son/no son) consecuencia lógica del programa:</p><ol type='i'><li><p class='hecho'>a;c :- d,b.</p></li><li><p class='hecho'>c :- b.</p></li><li><p class='hecho'>d :- b.</p></li><li><p class='hecho'>b;a :- c.</p></li></ol>",
            "<p class='enunciado'> Dado el siguiente programa lógico:</p> <p class='hecho'> a :- b, c.</p><p class='hecho'>b.</p><p class='hecho'>:- d.</p><p class='hecho'>c :- a.</p><p class='enunciado'>Indicar cuales de las siguientes cláusulas (son/no son) consecuencia lógica del programa:</p><ol type='i'><li><p class='hecho'>b; d :- c, a. </p></li><li><p class='hecho'>a; b; c :- d, a.</p></li><li><p class='hecho'>a; c :- d,b.</p></li><li><p class='hecho'>c :- b.</p></li></ol>",
            "<p class='enunciado'> Dado el siguiente programa lógico:</p><p class='hecho'> a :- b, c.</p><p class='hecho'> b.</p><p class='hecho'>:- d.</p><p class='hecho'>c :- a.</p><p class='enunciado'>Indicar cuales de las siguientes cláusulas (son/no son) consecuencia lógica del programa:</p><ol type='i'><li><p class='hecho'>a; c :- d, b. </p></li><li><p class='hecho'>c :- b.</p></li><li><p class='hecho'>d :- b.</p></li><li><p class='hecho'>b; a :- c.</p></li></ol>",
            "<p class='enunciado'> Dado el siguiente programa lógico:</p> <p class='hecho'> a :- b, c.</p><p class='hecho'> b.</p><p class='hecho'>:- d.</p><p class='hecho'>c :- a.</p><p class='enunciado'>Indicar cuales de las siguientes cláusulas (son/no son) consecuencia lógica del programa:</p><ol type='i'><li><p class='hecho'>d :- b. </p></li><li><p class='hecho'>b; a :- c.</p></li><li><p class='hecho'>a; c :- b.  </p></li><li><p class='hecho'>a; d :- b.</p></li></ol>",
          ],
        },
        ej5: {
          puntaje: 8,
          enunciados: [
            "<p class='enunciado'> Considérese el siguiente programa:</p><p class='hecho'> mascota(X) :- perro(X).</p><p class='hecho'>perro(colita).</p><p class='hecho'>:- perro (socrates).</p><p class='enunciado'>¿Cuál o cuáles de las siguientes IH son modelo del programa?</p><ol type='i'><li><p class='hecho'>{ mascota(colita), perro(colita), hombre(colita) }</p></li><li><p class='hecho'>{ mascota(colita), perro(colita) }</p></li><li><p class='hecho'>{ perro(colita) }</p></li></ol>",
            "<p class='enunciado'> Considérese el siguiente programa:</p><p class='hecho'> mascota(X) :- gato(X).</p><p class='hecho'>gato(mishi).</p><p class='hecho'>:- gato(socrates).</p><p class='enunciado'>¿Cuál o cuáles de las siguientes IH son modelo del programa?</p><ol type='i'><li><p class='hecho'>{mascota(mishi), gato(mishi) }</p></li><li><p class='hecho'>{ mascota(socrates), mascota(mishi), gato(mishi) }</p></li><li><p class='hecho'> { mascota(mishi), gato(mishi), gato(socrates) }</p></li></ol>",
            "<p class='enunciado'> Considérese el siguiente programa:</p><p class='hecho'> humano(X) :- hombre(X).</p><p class='hecho'>hombre(socrates).</p><p class='hecho'>:-hombre(colita).</p><p class='enunciado'>¿Cuál o cuáles de las siguientes IH son modelo del programa?</p><ol type='i'><li><p class='hecho'>{ humano(socrates), hombre(socrates) }</p></li><li><p class='hecho'>{ humano(colita), hombre(colita), hombre(socrates) }</p></li><li><p class='hecho'> { humano(socrates), humano(colita), hombre(socrates) }</p></li></ol>",
            "<p class='enunciado'> Considérese el siguiente programa:</p><p class='hecho'> humano(X) :- hombre(X).</p><p class='hecho'>hombre(socrates).</p><p class='hecho'>:-hombre(colita).</p><p class='enunciado'>¿Cuál o cuáles de las siguientes IH son modelo del programa?</p><ol type='i'><li><p class='hecho'>{ hombre(socrates) }</p></li><li><p class='hecho'>{ humano(colita), hombre(socrates) }</p></li><li><p class='hecho'>{ humano(socrates), humano(colita), hombre(socrates) }</p></li></ol>",
          ],
        },
      },
    },
  ],
};