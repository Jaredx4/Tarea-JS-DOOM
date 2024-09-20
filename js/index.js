
//Cambio para Blastoise: 

function cambiarBlastoiseOr() {

    let img1 = document.getElementById("imagen-bla");
    let img1_2 = document.getElementById("imagen-bla1");

    img1.src = "/POKÉMON VARIOCOLOR/Blastoise_00.png";
    img1_2.src = "/POKÉMON VARIOCOLOR/Blastoise_00.png";
}
function cambiarBlastoise() {

    let img1 = document.getElementById("imagen-bla");
    let img1_2 = document.getElementById("imagen-bla1");

    img1.src = "/POKÉMON VARIOCOLOR/Blastoise_01.png";
    img1_2.src = "/POKÉMON VARIOCOLOR/Blastoise_01.png";


}
function cambiarBlastoise2() {

    let img2 = document.getElementById("imagen-bla");
    let img2_2 = document.getElementById("imagen-bla1");

    img2.src = "/POKÉMON VARIOCOLOR/Blastoise_02.png";
    img2_2.src = "/POKÉMON VARIOCOLOR/Blastoise_02.png";
}

function cambiarBlastoise3() {

    let img2 = document.getElementById("imagen-bla");
    let img2_2 = document.getElementById("imagen-bla1");

    img2.src = "/POKÉMON VARIOCOLOR/Blastoise_03.png";
    img2_2.src = "/POKÉMON VARIOCOLOR/Blastoise_03.png";
}


//Cambio para Charizard:

function cambiarCharizardOr() {

    let img1 = document.getElementById("imagen-cha");
    let img1_2 = document.getElementById("imagen-cha1");

    img1.src = "/POKÉMON VARIOCOLOR/Charizard_00.png";
    img1_2.src = "/POKÉMON VARIOCOLOR/Charizard_00.png";


}
function cambiarCharizard() {

    let img1 = document.getElementById("imagen-cha");
    let img1_2 = document.getElementById("imagen-cha1");

    img1.src = "/POKÉMON VARIOCOLOR/Charizard_01.png";
    img1_2.src = "/POKÉMON VARIOCOLOR/Charizard_01.png";


}
function cambiarCharizard2() {

    let img2 = document.getElementById("imagen-cha");
    let img2_2 = document.getElementById("imagen-cha1");

    img2.src = "/POKÉMON VARIOCOLOR/Charizard_02.png";
    img2_2.src = "/POKÉMON VARIOCOLOR/Charizard_02.png";
}

function cambiarCharizard3() {

    let img2 = document.getElementById("imagen-cha");
    let img2_2 = document.getElementById("imagen-cha1");

    img2.src = "/POKÉMON VARIOCOLOR/Charizard_03.png";
    img2_2.src = "/POKÉMON VARIOCOLOR/Charizard_03.png";
}

//Cambio para Venasaur:

function cambiarVenasaurOr() {

    let img1 = document.getElementById("imagen-vena");
    let img1_2 = document.getElementById("imagen-vena1");

    img1.src = "/POKÉMON VARIOCOLOR/Venusaur_00.png";
    img1_2.src = "/POKÉMON VARIOCOLOR/Venusaur_00.png";


}
function cambiarVenasaur() {

    let img1 = document.getElementById("imagen-vena");
    let img1_2 = document.getElementById("imagen-vena1");

    img1.src = "/POKÉMON VARIOCOLOR/Venusaur_01.png";
    img1_2.src = "/POKÉMON VARIOCOLOR/Venusaur_01.png";


}
function cambiarVenasaur2() {

    let img2 = document.getElementById("imagen-vena");
    let img2_2 = document.getElementById("imagen-vena1");

    img2.src = "/POKÉMON VARIOCOLOR/Venusaur_02.png";
    img2_2.src = "/POKÉMON VARIOCOLOR/Venusaur_02.png";
}

function cambiarVenasaur3() {

    let img2 = document.getElementById("imagen-vena");
    let img2_2 = document.getElementById("imagen-vena1");

    img2.src = "/POKÉMON VARIOCOLOR/Venusaur_03.png";
    img2_2.src = "/POKÉMON VARIOCOLOR/Venusaur_03.png";
}


function nombre() {
    let nombre = document.getElementById("Ingreso23").value;
    let nombre2 = document.getElementById("nombre1");
    let error2 = document.getElementById("error2");

    if (nombre.trim() !== "") {
        nombre2.textContent = nombre;
    } else {
        error2.textContent = "Ingrese un valor valido";
        setTimeout(() => {
            error2.textContent = " ";

        }, 3000);
    }
}



function nombre2() {
    let nombre = document.getElementById("Ingreso231").value;
    let nombre2 = document.getElementById("nombre2");
    let error1 = document.getElementById("error1");

    if (nombre.trim() !== "") {
        nombre2.textContent = nombre;
    } else {

        error1.textContent = "Ingrese un valor valido";
        setTimeout(() => {
            error1.textContent = " ";

        }, 3000);
    }
}

function nombre3() {
    let nombre = document.getElementById("Ingreso232").value;
    let nombre2 = document.getElementById("nombre3");
    let error3 = document.getElementById("error3");

    if (nombre.trim() !== "") {
        nombre2.textContent = nombre;
    } else {
        error3.textContent = "Ingrese un valor valido";
        setTimeout(() => {
            error3.textContent = " ";

        }, 3000);
    }
}


