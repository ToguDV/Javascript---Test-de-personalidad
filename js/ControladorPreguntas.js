let preguntas = ["¿Te muerdes las uñas?","¿Te asusta la muerte? ","¿Te has roto un hueso? ", "¿Te resulta fácil confiar en alguien?", "¿Te gustaría vivir en otro planeta?", "¿Viajarías al futuro, sin importar las consecuencias?", "¿Venderías tu alma por dinero?", "¿Lastimarías a alguien con tal de ser feliz?", "¿Te gusta tu empleo?", "¿Estás conforme con tu salario?", "¿Piensas irte del país?"];
var preguntaH1 = document.getElementById('pregunta');
var opcion1 = document.getElementById("opcion1");
var opcion2 = document.getElementById("opcion2");
opcion1.addEventListener("click", SiguientePregunta);
opcion2.addEventListener("click", SiguientePregunta);
var index = 0;
let finalizado = false;
SiguientePregunta();

function SiguientePregunta() {
    if(index == preguntas.length) {
        finalizado = true;
        preguntaH1.innerText = "Analizando datos...";
        setTimeout(() => {  Final(); }, 5000);
        index++;
        
    }

    else if(!finalizado){
        preguntaH1.innerText = preguntas[index];
        index++;
    }
}

function Final() {
    preguntaH1.innerText = "Era broma!";
    opcion1.remove();
    opcion2.remove();
    var mensaje = document.createElement("p");
    var text = document.createTextNode("Este tipo de test siempre son falsos :)");
    mensaje.appendChild(text);
    var element = document.getElementById("contenedor");
    element.appendChild(mensaje);
}