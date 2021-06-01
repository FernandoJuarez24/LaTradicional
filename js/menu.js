const boton = document.querySelector('.btnMenu');//Clase del Boton o Lineas
const contenedorLista = document.querySelector('.contenedorLinks');//Contenedor de la Lista
let activador = true;


boton.addEventListener('click', () =>{
    
    document.querySelector('.btnMenu i').classList.toggle('fa-times');

    if(activador){
        contenedorLista.style.left = '0';
        contenedorLista.style.transition = '0.5s';

        activador = false;
    }else{
        activador = false;

        contenedorLista.style.left = '-100%';
        contenedorLista.style.transition = '0.5s';

        activador = true;
    }
});