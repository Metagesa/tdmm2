let pantalla = 1;
let cambiaPantalla = true;
let fondos = [];
let persona = [];
let auto = [];
let boton1,
  boton1Hover,
  boton2,
  boton2Hover,
  boton3,
  camion,
  contenedor,
  bolsa1kg;

let botonX;
let botonY;

let slider;
let cantPersonas = 1;
let num;

let genera;

let contador = 0;
let contadorDelta = 0;

let rot;

let anchoPantalla;

let fRamona, fRamonaBold;

function preload() {
  fRamona = loadFont("fonts/Ramona-Light.ttf");
  fRamonaBold = loadFont("fonts/Ramona-Bold.ttf");
}

function setup() {
  tamPantalla();
  createCanvas(anchoPantalla, anchoPantalla / 1.55);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  cargarImagenes();
}

function tamPantalla() {
  anchoPantalla = windowWidth / 1.5;
}

function draw() {
  background(255);

  //-------------------------------
  //----------PANTALLA 0-----------
  //-------------------------------

  if (pantalla == 0) {
    botonX = width / 2;
    botonY = (height / 4) * 3;

    if (cambiaPantalla == true) {
      let h1 = createElement(
        "h1",
        "Biodigestores: cómo ayudar al medio ambiente a través de residuos orgánicos."
      );
      let tamano = String(width / 26 + "px");
      h1.style("font-size", tamano);
      h1.id("introh1");
      h1.position(0, height / 4);

      cambiaPantalla = false;
    }

    image(fondos[0], 0, 0);
    push();
    imageMode(CENTER);
    if (hover(botonX, botonY, boton1.width, boton1.height)) {
      image(boton1Hover, botonX, botonY);
      cursor(HAND);
    } else {
      image(boton1, botonX, botonY);
      cursor(ARROW);
    }
    textSize(width / 40);
    textFont(fRamona);
    text("Descubrí cómo", botonX, botonY / 1.01);
    pop();

    //-------------------------------
    //----------PANTALLA 1-----------
    //-------------------------------
  } else if (pantalla == 1) {
    if (cambiaPantalla == true) {
      let h1 = createElement(
        "h1",
        "Primero contanos: ¿cuántas personas viven en tu hogar?"
      );
      let tamano = String(width / 30 + "px");
      h1.style("font-size", tamano);
      h1.id("personash1");
      h1.position(0, height / 8);

      num = createElement("h1", String(cantPersonas));
      num.style("font-size", tamano);
      num.id("numh1");
      num.position(width / 2, (height / 8) * 2.3);

      slider = createSlider(1, 10, 1, 1);
      if (cantPersonas != 1) {
        slider.value(cantPersonas);
      }
      slider.id("sliderInicio");
      slider.input(sliderChange);
      let tamSliderPos = width / 5;
      slider.position(width / 2 + tamSliderPos / 1.5, (height / 8) * 3.2);
      let tamSlider = String(tamSliderPos + "px");
      slider.style("width", tamSlider);

      cambiaPantalla = false;
    }

    botonX = width / 2;
    botonY = height / 1.2;

    num.position(
      width / 1.37 - (width / 50) * 5 + ((slider.value() - 1) * width) / 50,
      (height / 8) * 2.3
    );

    cantPersonas = slider.value();
    num.html(slider.value(), false);

    image(fondos[1], 0, 0);

    for (let i = 0; i < slider.value(); i++) {
      image(
        persona[i % 3],
        persona[0].width * (i + 1.5),
        height - persona[0].height * 1.06
      );
    }
    push();
    imageMode(CENTER);
    if (hover(botonX, botonY, boton2.width, boton2.height)) {
      image(boton2Hover, botonX, botonY);
      cursor(HAND);
    } else {
      image(boton2, botonX, botonY);
      cursor(ARROW);
    }

    pop();
    textSize(width / 48);
    textFont(fRamonaBold);
    fill(color("#512F10"));
    text("¿Qué significa esto para el", botonX, botonY - textSize() / 2);
    text("medio ambiente?", botonX, botonY + textSize() / 2);

    //-------------------------------
    //----------PANTALLA 2-----------
    //-------------------------------
  } else if (pantalla == 2) {
    if (cambiaPantalla == true) {
      let h1 = createElement(
        "h1",
        String(
          " Se estima que en tu hogar se generan " +
            cantPersonas +
            " kg de residuos por día"
        )
      );
      let tamano = String(width / 30 + "px");
      h1.style("font-size", tamano);
      h1.id("respordiah1");
      h1.position(0, height / 8);

      num = createElement("h1", String(cantPersonas));
      num.style("font-size", tamano);
      num.id("numh1");
      num.position(width / 3.5, height / 1.2);

      slider = createSlider(1, 10, 1, 1);
      if (cantPersonas != 1) {
        slider.value(cantPersonas);
      }
      slider.id("sliderInicio");
      slider.input(sliderChange);
      let tamSliderPos = width / 5;
      slider.position(width / 3.5, height / 1.1);
      let tamSlider = String(tamSliderPos + "px");
      slider.style("width", tamSlider);

      cambiaPantalla = false;
    }

    select("#respordiah1").html(
      String(
        " Se estima que en tu hogar se generan " +
          cantPersonas +
          " kg de residuos por día"
      )
    );

    num.position(
      width / 3.5 + ((slider.value() - 1) * width) / 50,
      height / 1.2
    );

    num.html(cantPersonas, false);

    image(fondos[2], 0, 0);

    push();
    imageMode(CENTER);
    image(contenedor, width / 2, height - contenedor.height / 2);
    randomSeed(9895);

    if (hover(width / 2, height / 1.25, width / 2, height / 3)) {
      textFont(fRamona);
      fill(255);
      textSize(width / 14);
      text("Son " + cantPersonas * 365 + "kg", width / 2, height / 1.35);
      text("por año", width / 2, height / 1.15);
    } else {
      for (let i = 0; i < slider.value(); i++) {
        image(
          bolsa1kg,
          width / 2 -
            (bolsa1kg.width / 4) * 2 +
            (((bolsa1kg.width / 4) * i) % ((bolsa1kg.width / 4) * 5)),
          height - bolsa1kg.height * 0.5 - random(-i, i * 4)
        );
      }
    }

    botonX = (width / 30) * 27.5;
    botonY = height / 1.1;

    if (hover(botonX, botonY, boton3.width, boton3.height)) {
      cursor(HAND);
      tint(250, 250, 250);
      image(boton3, botonX, botonY);
    } else {
      cursor(ARROW);
      image(boton3, botonX, botonY);
    }

    pop();

    //-------------------------------
    //----------PANTALLA 3-----------
    //-------------------------------
  } else if (pantalla == 3) {
    if (cambiaPantalla == true) {
      let tamano = String(width / 30 + "px");

      contadorDelta = 0;
      contador = millis();

      num = createElement("h1", String(cantPersonas));
      num.style("font-size", tamano);
      num.id("numh1");
      num.position(width / 3.5, height / 1.2);

      slider = createSlider(1, 10, 1, 1);
      if (cantPersonas != 1) {
        slider.value(cantPersonas);
      }
      slider.id("sliderInicio");
      slider.input(sliderChange);
      let tamSliderPos = width / 5;
      slider.position(width / 3.5, height / 1.1);
      let tamSlider = String(tamSliderPos + "px");
      slider.style("width", tamSlider);

      cambiaPantalla = false;
    }

    num.position(
      width / 3.5 + ((slider.value() - 1) * width) / 50,
      height / 1.2
    );

    num.html(cantPersonas, false);

    push();

    let bajando = contadorDelta < 3000;

    if (bajando) {
      contadorDelta = millis() - contador;

      translate(0, map(contadorDelta, 0, 3000, 0, -height));
    } else {
      translate(0, -height);
    }

    image(fondos[2], 0, 0);

    image(fondos[3], 0, height);

    imageMode(CENTER);

    image(contenedor, width / 2, height - contenedor.height / 2);
    randomSeed(9895);
    for (let i = 0; i < slider.value(); i++) {
      if (bajando) {
        image(
          bolsa1kg,
          width / 2 -
            (bolsa1kg.width / 4) * 2 +
            (((bolsa1kg.width / 4) * i) % ((bolsa1kg.width / 4) * 5)),
          height - bolsa1kg.height * 0.5 - random(-i, i * 4)
        );
      } else {
        if (contadorDelta < 4000) {
          contadorDelta = millis() - contador;

          push();
          translate(
            width / 2 +
              width / 18 -
              (bolsa1kg.width / 4) * 2 +
              (((bolsa1kg.width / 4) * i) % ((bolsa1kg.width / 4) * 5)),
            height +
              random(i * 10) +
              contadorDelta / 3 -
              1000 -
              bolsa1kg.height * 0.5 -
              random(-i, i * 4)
          );
          rotate(random(PI) + radians(contadorDelta / 10));
          image(bolsa1kg, 0, 0);
          pop();
        }
      }
    }

    if (contadorDelta < 4000) {
      image(camion, width / 2.5, height * 1.45);
    } else if (contadorDelta < 6500) {
      contadorDelta = millis() - contador;
      image(camion, width / 2.5 - (contadorDelta - 4000) / 4, height * 1.45);
    } else {
      pantalla++;
      cambiaPantalla = true;
      removeElements();
    }

    pop();
    //-------------------------------
    //----------PANTALLA 4-----------
    //-------------------------------
  } else if (pantalla == 4) {
    if (cambiaPantalla == true) {
      let tamano = String(width / 30 + "px");
      let tamano2 = String((width / 30) * 0.65 + "px");

      let h1 = createElement(
        "h1",
        'El <span class="porcentaje">50%</span> de los residuos que van al relleno sanitario son orgánicos'
      );
      h1.style("font-size", tamano);
      h1.id("resRelleno");
      h1.position(-width / 25, height / 12);

      let h3 = createElement(
        "h3",
        'En tu hogar, serían <span class="porcentaje" id="porcentajekg">' +
          cantPersonas * 182.5 +
          "kg</span> por año."
      );
      h3.style("font-size", tamano2);
      h3.id("resOrgHogar");
      h3.position(-width / 25, (height / 12) * 3.6);

      contadorDelta = 0;
      contador = millis();

      num = createElement("h1", String(cantPersonas));
      num.style("font-size", tamano);
      num.id("numh1");
      num.position(width / 3.5, height / 1.2);

      slider = createSlider(1, 10, 1, 1);
      if (cantPersonas != 1) {
        slider.value(cantPersonas);
      }
      slider.id("sliderInicio");
      slider.input(sliderChange);
      let tamSliderPos = width / 5;
      slider.position(width / 3.5, height / 1.1);
      let tamSlider = String(tamSliderPos + "px");
      slider.style("width", tamSlider);

      rot = -24;

      cambiaPantalla = false;
    }

    num.position(
      width / 3.5 + ((slider.value() - 1) * width) / 50,
      height / 1.2
    );

    num.html(cantPersonas, false);

    image(fondos[4], 0, 0);

    push();

    imageMode(CENTER);

    strokeWeight(width / 500);
    stroke("#9D0727");
    line(width / 10.8, (height / 12) * 5, width / 3.9, (height / 12) * 5);

    randomSeed(2546);

    if (contadorDelta >= 4000 && contadorDelta <= 4500) {
      for (let i = 0; i < cantPersonas * 2; i++) {
        let mov = random(i + 1 * 2);
        image(
          bolsaChica,
          width / 2 + mov * 5 + (contadorDelta / 10 - 400),
          (height / 3) * 2 + mov * 5 + (contadorDelta / 20 - 4000 / 20)
        );
      }
    }

    image(bolsasPila, (width / 4) * 3, (height / 4) * 2.75);

    contadorDelta = millis() - contador;

    push();
    translate(-width / 2 + constrain(contadorDelta, 0, 2000) / 6, 0);
    push();

    translate((width / 3) * 1.25, (height / 4) * 2.55);
    rotate(radians(rot));

    if (contadorDelta >= 2000 && contadorDelta <= 4000) {
      rot += radians(contadorDelta / 300);
      translate(0, 0 - (contadorDelta - 2000) / 100);
    }
    if (contadorDelta >= 4000) {
      translate(0, 0 - 20);
    }

    image(camionCarga, 0, 0);

    pop();

    image(camionCarro, width / 3, (height / 4) * 3);
    pop();

    image(bolsaInterior, (width / 8) * 5, height / 4.4);

    pop();

    if (frameCount % 20 == 0) {
      select("#porcentajekg").html(cantPersonas * 182.5 + "kg");
    }

    if (contadorDelta > 6500) {
      pantalla++;
      cambiaPantalla = true;
      removeElements();
    }
    //-------------------------------
    //----------PANTALLA 5-----------
    //-------------------------------
  } else if (pantalla == 5) {
    if (cambiaPantalla == true) {
      let tamano = String(width / 30 + "px");
      let tamano2 = String((width / 30) * 0.65 + "px");

      let h1 = createElement(
        "h1",
        'Los residuos orgánicos al degradarse producen <span class="porcentaje">metano (CH4),</span> un gas de efecto invernadero altamente contaminate.'
      );
      h1.style("font-size", tamano);
      h1.id("prodMetano");
      h1.position(-width / 25, height / 12);

      contadorDelta = 0;
      contador = millis();

      rot = -24;

      cambiaPantalla = false;
    }

    image(fondos[4], 0, 0);

    push();

    imageMode(CENTER);

    image(bolsasPila, (width / 4) * 3, (height / 4) * 2.75);

    randomSeed(354);
    
    push();
    
    tint(255, (contadorDelta) / 4);

    for (let i = 0; i < 10; i++) {
      image(
        ch4,
        random(width / 2, width),
        height / 1.2 - ((millis() * random(0.2)) % height) / 2
      );
    }

    push();
    scale(0.5);
    for (let i = 0; i < 10; i++) {
      image(
        ch4,
        random((width / 7) * 2, 0),
        (height / 1.7) * 2 - ((millis() * random(0.2)) % height) / 2
      );
    }
    pop();
    pop();

    contadorDelta = millis() - contador;

    push();

    translate(
      width / 3 - ((contadorDelta / 1000) * width) / 5,
      (height / 4) * 2.6
    );
    scale(0.5);
    image(camion, 0, 0);

    pop();

    pop();

    if (contadorDelta > 5500) {
      pantalla++;
      cambiaPantalla = true;
      removeElements();
    }
    //-------------------------------
    //----------PANTALLA 6-----------
    //-------------------------------
  } else if (pantalla == 6) {
    if (cambiaPantalla == true) {
      let tamano = String(width / 30 + "px");
      let tamano2 = String((width / 30) * 0.65 + "px");

      let h1 = createElement(
        "h1",
        " En la capa de ozono hay mayor cantidad de dióxido de carbono (CO2)"
      );
      h1.style("font-size", tamano);
      h1.id("prodMetano");
      h1.position(-width / 25, height / 12);

      contadorDelta = 0;
      contador = millis();

      cambiaPantalla = false;
    }

    image(fondos[5], 0, 0);

    push();

    imageMode(CENTER);

    randomSeed(354);

    push();
    translate(width / 14, (height / 4) * 3);
    for (let i = 0; i < 4; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 - mov / 2, 0 - mov);
    }
    pop();

    push();
    translate(width / 2.5, (height / 4) * 3);
    for (let i = 0; i < 4; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 - mov / 2, 0 - mov);
    }
    pop();

    push();
    translate(width / 1.4, (height / 4) * 3);
    for (let i = 0; i < 4; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 - mov / 2, 0 - mov);
    }
    pop();

    push();
    translate(width / 3.3, (height / 4) * 3.7);
    for (let i = 0; i < 4; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 + mov / 2, 0 - mov);
    }
    pop();

    push();
    translate(width / 1.07, (height / 4) * 3.7);
    for (let i = 0; i < 4; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 + mov / 2, 0 - mov);
    }
    pop();

    contadorDelta = millis() - contador;

    pop();

    if (contadorDelta > 5000) {
      pantalla++;
      cambiaPantalla = true;
      removeElements();
    }
    //-------------------------------
    //----------PANTALLA 7-----------
    //-------------------------------
  } else if (pantalla == 7) {
    if (cambiaPantalla == true) {
      let tamano = String(width / 30 + "px");
      let tamano2 = String((width / 30) * 0.65 + "px");

      let h1 = createElement(
        "h1",
        'Sin embargo el metano calienta el planeta <span class="porcentaje">80</span> veces más en menor cantidad de tiempo.'
      );
      h1.style("font-size", tamano);
      h1.id("prodMetano");
      h1.position(-width / 25, height / 12);

      contadorDelta = 0;
      contador = millis();

      genera = false;

      cambiaPantalla = false;
    }

    image(fondos[5], 0, 0);

    push();
    
    tint(255,contadorDelta/4)

    imageMode(CENTER);
    randomSeed(22223111334555907997773455342);

    push();

    scale(0.5);
    image(aura2, width / 1.1, (height / 4) * 2.8);
    image(bolsasPila, width / 1.1, (height / 4) * 3);

    for (let i = 0; i < 3; i++) {
      image(
        ch4g,
        random(width / 1.5, width * 1.2),
        height / 1.1 - ((millis() * random(0.2)) % height) / 4
      );
    }
    pop();

    push();

    scale(0.65);

    translate(width / 3, -height / 10);
    image(aura1, width / 1.1, (height / 4) * 2.8);
    image(bolsasPila, width / 1.1, (height / 4) * 3);

    for (let i = 0; i < 3; i++) {
      image(
        ch4g,
        random(width / 1.5, width * 1.2),
        height / 1.1 - ((millis() * random(0.2)) % height) / 4
      );
    }
    pop();

    push();

    scale(0.65);

    translate(-width / 1.4, -height / 10);
    image(aura3, width / 1.1, (height / 4) * 2.8);
    image(bolsasPila, width / 1.1, (height / 4) * 3);

    for (let i = 0; i < 3; i++) {
      image(
        ch4g,
        random(width / 1.5, width * 1.2),
        height / 1.1 - ((millis() * random(0.2)) % height) / 4
      );
    }
    pop();

    push();
    translate(width / 14, (height / 4) * 3);
    for (let i = 0; i < 6; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 + random(width / 90, -width / 90) - mov / 2, 0 - mov);
    }
    pop();

    push();
    translate(width / 2.5, (height / 4) * 3);
    for (let i = 0; i < 6; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 + random(width / 90, -width / 90) - mov / 2, 0 - mov);
    }
    pop();

    push();
    translate(width / 1.4, (height / 4) * 3);
    for (let i = 0; i < 6; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 + random(width / 90, -width / 90) - mov / 2, 0 - mov);
    }
    pop();

    push();
    translate(width / 3.3, (height / 4) * 3.7);
    for (let i = 0; i < 6; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 + random(width / 90, -width / 90) + mov / 2, 0 - mov);
    }
    pop();

    push();
    translate(width / 1.07, (height / 4) * 3.7);
    for (let i = 0; i < 6; i++) {
      let mov = ((millis() * random(0.5)) % height) / 8;
      image(co2, 0 + random(width / 90, -width / 90) + mov / 2, 0 - mov);
    }
    pop();

    pop();

    contadorDelta = millis() - contador;

    push();
    imageMode(CENTER);
    translate((width / 7) * 6, height / 2);
    if (
      hover(
        (width / 7) * 6,
        height / 2,
        botongenera.width * 0.8,
        botongenera.height
      )
    ) {
      image(botongenerahover, 0, 0);
    } else {
      image(botongenera, 0, 0);
    }
    textSize(width / 70);
    textAlign(CENTER, CENTER);
    textFont(fRamona);
    text("¿Qué lo genera?", 0, 0);
    pop();

    if (genera) {
      image(fondos[6], 0, 0);

      push();
      imageMode(CENTER);

      botonX = width / 20;
      botonY = height / 10;

      translate(botonX, botonY);
      rotate(PI);

      if (hover(botonX, botonY, boton3.width, boton3.height)) {
        tint(250, 250, 250);
        image(boton3, 0, 0);
      } else {
        tint(255, 255, 255);
        image(boton3, 0, 0);
      }
      pop();

      if (frameCount % 30 == 0) {
        select("#prodMetano").style("display", "none");
      }
    } else {
      if (frameCount % 30 == 0) {
        select("#prodMetano").style("display", "block");
      }
    }

    push();
    imageMode(CENTER);
    translate(width / 2, (height / 9) * 8);
    if (
      hover(
        width / 2,
        (height / 9) * 8,
        botondetenemos.width * 0.8,
        botondetenemos.height
      )
    ) {
      image(botondetenemoshover, 0, 0);
    } else {
      image(botondetenemos, 0, 0);
    }
    textSize(width / 50);
    textAlign(CENTER, CENTER);
    textFont(fRamona);
    text("¿Cómo lo detenemos?", 0, 0);
    pop();

    if (
      hover(
        (width / 7) * 6,
        height / 2,
        botongenera.width * 0.8,
        botongenera.height
      ) ||
      hover(
        width / 2,
        (height / 9) * 8,
        botondetenemos.width * 0.8,
        botondetenemos.height
      ) ||
      hover(botonX, botonY, boton3.width, boton3.height)
    ) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  //-------------------------------
    //----------PANTALLA 8-----------
    //-------------------------------
  } else if (pantalla == 8) {
    if (cambiaPantalla == true) {
      let tamano = String(width / 28 + "px");
      let tamano2 = String((width / 30) * 0.7 + "px");

      let h1 = createElement(
        "h1",
        '¡Con BIODIGESTORES!'
      );
      h1.style("font-size", tamano);
      h1.id("biodigestores");
      h1.position(0, height / 12);
      
      let t1 = createElement(
        "h4",
        'Permiten a través del metano producir <span class="biotext">biogás</span> para ser utilizado como <span class="biotext">energía</span>. También se aprovechan <span class="biotext">residuos orgánicos</span> que de otra manera terminan en el relleno sanitario.'
      );
      t1.style("font-size", tamano2);
      t1.id("biodigestoresText");
      t1.position(width/2, height / 22);

      contadorDelta = 0;
      contador = millis();

      genera = false;

      cambiaPantalla = false;
    }

    image(fondos[7], 0, 0);
    
    push();
    imageMode(CENTER);
    
    image(paso1,width/8,height/2.2);
    image(paso2,width/8*2.2,height/1.6);
    image(paso3,width/8*3.2,height/1.3);
    image(paso4,width/1.5,height/1.18);
    image(paso51,width/10*7.6,height/2.4);
    image(paso52,width/10*8.2,height/1.42);
    
    pop();
  }
}

function hoverPasos() {
}

function mouseClicked() {
  cursor(ARROW);
  if (pantalla == 0 && hover(botonX, botonY, boton1.width, boton1.height)) {
    pantalla++;
    cambiaPantalla = true;
    removeElements();
  } else if (
    pantalla == 1 &&
    hover(botonX, botonY, boton2.width, boton2.height)
  ) {
    pantalla++;
    cambiaPantalla = true;
    removeElements();
  } else if (
    pantalla == 2 &&
    hover(botonX, botonY, boton3.width, boton3.height)
  ) {
    pantalla++;
    cambiaPantalla = true;
    contador = 0;
    removeElements();
  } else if (pantalla == 7) {
    if (
      hover(
        (width / 7) * 6,
        height / 2,
        botongenera.width * 0.8,
        botongenera.height
      )
    ) {
      genera = true;
    } else if (
      hover(
        width / 2,
        (height / 9) * 8,
        botondetenemos.width * 0.8,
        botondetenemos.height
      )
    ) {
      pantalla++;
      cambiaPantalla = true;
      removeElements();
    } else if (genera && hover(botonX, botonY, boton3.width, boton3.height)) {
      genera = false;
    }
  }
}

function windowResized() {
  tamPantalla();
  resizeCanvas(anchoPantalla, anchoPantalla / 1.55);
  cargarImagenes();
  cambiaPantalla = true;
  removeElements();
}

function hover(posX, posY, tamX, tamY) {
  let der = posX + tamX / 2;
  let iz = posX - tamX / 2;
  let ar = posY - tamY / 2;
  let ab = posY + tamY / 2;
  if (mouseX > iz && mouseX < der && mouseY > ar && mouseY < ab) {
    return true;
  }
}

function sliderChange() {
  cantPersonas = slider.value();
}

function cargarImagenes() {
  fondos[0] = loadImage("svg/fondo1.svg", (img) => {
    fondos[0].resize(width, 0);
  });
  fondos[1] = loadImage("svg/fondo2.svg", (img) => {
    fondos[1].resize(width, 0);
  });
  fondos[2] = loadImage("svg/fondo3.svg", (img) => {
    fondos[2].resize(width, 0);
  });
  fondos[3] = loadImage("svg/fondo4.svg", (img) => {
    fondos[3].resize(width, 0);
  });
  fondos[4] = loadImage("svg/fondo5.svg", (img) => {
    fondos[4].resize(width, 0);
  });
  fondos[5] = loadImage("svg/fondo6.svg", (img) => {
    fondos[5].resize(width, 0);
  });
  fondos[6] = loadImage("png/fondo7.png", (img) => {
    fondos[6].resize(width, 0);
  });
  fondos[7] = loadImage("png/fondo8.png", (img) => {
    fondos[7].resize(width, 0);
  });

  contenedor = loadImage("svg/contenedor.svg", (img) => {
    contenedor.resize(width / 2, 0);
  });

  bolsa1kg = loadImage("svg/1kg.svg", (img) => {
    bolsa1kg.resize(width / 4, 0);
  });

  bolsasPila = loadImage("svg/bolsasPila.svg", (img) => {
    bolsasPila.resize(width / 2, 0);
  });

  bolsaInterior = loadImage("svg/bolsaInterior.svg", (img) => {
    bolsaInterior.resize(width / 4, 0);
  });

  bolsaChica = loadImage("svg/bolsaChica.svg", (img) => {
    bolsaChica.resize(width / 12, 0);
  });

  boton1 = loadImage("svg/botonfull.svg", (img) => {
    boton1.resize(width / 3, 0);
  });
  boton1Hover = loadImage("svg/botonfull-hover.svg", (img) => {
    boton1Hover.resize(width / 3, 0);
  });

  boton2 = loadImage("svg/boton2.svg", (img) => {
    boton2.resize(width / 3, 0);
  });
  boton2Hover = loadImage("svg/boton2Hover.svg", (img) => {
    boton2Hover.resize(width / 3, 0);
  });

  boton3 = loadImage("svg/boton3.svg", (img) => {
    boton3.resize(width / 15, 0);
  });

  botongenera = loadImage("svg/botongenera.svg", (img) => {
    botongenera.resize(width / 6, 0);
  });
  botongenerahover = loadImage("svg/botongenerahover.svg", (img) => {
    botongenerahover.resize(width / 6, 0);
  });

  botondetenemos = loadImage("svg/botondetenemos.svg", (img) => {
    botondetenemos.resize(width / 3, 0);
  });
  botondetenemoshover = loadImage("svg/botondetenemoshover.svg", (img) => {
    botondetenemoshover.resize(width / 3, 0);
  });

  camion = loadImage("svg/camion.svg", (img) => {
    camion.resize(width / 1.2, 0);
  });

  camionCarga = loadImage("svg/camionCarga.svg", (img) => {
    camionCarga.resize(width / 4, 0);
  });

  camionCarro = loadImage("svg/camionCarro.svg", (img) => {
    camionCarro.resize(width / 2.5, 0);
  });

  ch4 = loadImage("png/ch4.png", (img) => {
    ch4.resize(width / 13, 0);
  });
  ch4g = loadImage("png/ch4.png", (img) => {
    ch4g.resize(width / 10, 0);
  });
  co2 = loadImage("png/co2.png", (img) => {
    co2.resize(width / 22, 0);
  });

  aura1 = loadImage("png/aura1.png", (img) => {
    aura1.resize(width / 2.2, 0);
  });
  aura2 = loadImage("png/aura2.png", (img) => {
    aura2.resize(width / 2.2, 0);
  });
  aura3 = loadImage("png/aura3.png", (img) => {
    aura3.resize(width / 2.8, 0);
  });
  
  paso1 = loadImage("png/paso1.png", (img) => {
    paso1.resize(width / 5, 0);
  });
  paso2 = loadImage("png/paso2.png", (img) => {
    paso2.resize(width / 4.3, 0);
  });
  paso3 = loadImage("png/paso3.png", (img) => {
    paso3.resize(width / 5.3, 0);
  });
  paso4 = loadImage("png/paso4.png", (img) => {
    paso4.resize(width / 4.3, 0);
  });
  paso51 = loadImage("png/paso51.png", (img) => {
    paso51.resize(width / 7.5, 0);
  });
  paso52 = loadImage("png/paso52.png", (img) => {
    paso52.resize(width / 7, 0);
  });

  persona[0] = loadImage("svg/tipito1.svg", (img) => {
    persona[0].resize(0, height / 2.3);
  });
  persona[1] = loadImage("svg/tipito2.svg", (img) => {
    persona[1].resize(0, height / 2.3);
  });
  persona[2] = loadImage("svg/tipito3.svg", (img) => {
    persona[2].resize(0, height / 2.3);
  });
  persona[3] = loadImage("svg/tipito4.svg", (img) => {
    persona[3].resize(0, height / 2.3);
  });
}
