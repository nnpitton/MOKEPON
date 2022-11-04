let ataqueJugador
let ataqueEnemigo
let vidaJugador=3
let vidaEnemigo=3 


 function inciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton_fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton_agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra= document.getElementById("boton_tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReinicio=document.getElementById("boton_reiniciar")
    botonReinicio.addEventListener("click",reiniciarJuego)
}

function ataqueFuego(){
     ataqueJugador= "Fuego"
     ataqueAleatorioEnemigo()   
}
function ataqueAgua(){
     ataqueJugador= "Agua"
     ataqueAleatorioEnemigo()  
    }
function ataqueTierra(){ 
    ataqueJugador= "Tierra"
    ataqueAleatorioEnemigo()  

    }

    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(1,3)
        if(ataqueAleatorio==1){
            ataqueEnemigo = "Fuego"
        }else if (ataqueAleatorio==2){
            ataqueEnemigo = "Agua"
        }else{
            ataqueEnemigo="Tierra"
        }
        combate()
    }


    function crearMensaje(resultado){
        let sectionMensajes = document.getElementById("mensajes")
        let parrafo = document.createElement("p")
        parrafo.innerHTML= "Tu mascota atacó con "+ ataqueJugador+" , las mascota del enemigo atacó con " +ataqueEnemigo+" " + resultado
        sectionMensajes.appendChild(parrafo)

    }

function seleccionarMascotaJugador(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let inputHipodoge= document.getElementById("hipodoge")
    let inputCapipepo= document.getElementById("capipepo")
    let inputRatigueya= document.getElementById("ratigueya")
    let spanMascotaJugador =  document.getElementById("mascota_jugador")

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML= " Hipodoge"

    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML= " Capipepo"
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML= " Ratigueya"
    }else{
        alert("selecciona algo pinche pendejo")
    }


    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio= aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota_enemigo")

    if (mascotaAleatorio == 1 ){
        spanMascotaEnemigo.innerHTML = " Hipodoge"
    }else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = " Capipepo"
    }else if(mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = " Ratigueya"
    }

     
}

function combate(){
    let spanVidasJugador= document.getElementById("vidas_jugador")
    let spanVidasEnemigo= document.getElementById("vidas_enemigo")
 if( ataqueJugador == ataqueEnemigo){
    crearMensaje("empate")
 }else if(ataqueJugador == "Fuego" && ataqueEnemigo=="Tierra"){
    crearMensaje("ganaste")
    vidaEnemigo--
    spanVidasEnemigo.innerHTML=vidaEnemigo
 }else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
    crearMensaje("ganaste")
    vidaEnemigo--
    spanVidasEnemigo.innerHTML=vidaEnemigo
 } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua"){
    crearMensaje("ganaste")
    vidaEnemigo--
    spanVidasEnemigo.innerHTML=vidaEnemigo
 }else{
    crearMensaje("perdiste ")
    vidaJugador--
    spanVidasJugador.innerHTML=vidaJugador
 }

 
revisarVidas()



}

function revisarVidas(){
    if(vidaEnemigo==0){
        crearMensajeFinal("Victoriaaaaaa")
        let sectionReiniciar= document.getElementById("reiniciar")
        sectionReiniciar.style.display = "block"

    }else if(vidaJugador==0){
        crearMensajeFinal("Perdisteee")
        let sectionReiniciar= document.getElementById("reiniciar")
        sectionReiniciar.style.display = "block"
    }

}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML= resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton_fuego")
    botonFuego.disabled= true
    let botonAgua = document.getElementById("boton_agua")
    botonAgua.disabled= true
    let botonTierra= document.getElementById("boton_tierra")
    botonTierra.disabled= true


}
 function reiniciarJuego(){
    location.reload()
 }

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener("load", inciarJuego)