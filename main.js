const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const destino = '1 Jan 2021'
const destino1 = '1 Jan 2021'
setInterval(createHart, 200)
    

function clock (){
    const fechaDestino = new Date(destino);
    const fechaInicio = new Date()
    const totalSegundos = (fechaDestino - fechaInicio) / 1000;
    const days = Math.floor(totalSegundos / 3600 / 24);
    const hours = Math.floor(totalSegundos / 3600) % 24;
    const minutes = Math.floor(totalSegundos / 60) %60;
    const seconds = Math.floor(totalSegundos %60);        

    dias.innerHTML = formatTime(days);
    horas.innerHTML = formatTime(hours);
    minutos.innerHTML = formatTime(minutes) ;
    segundos.innerHTML = formatTime(seconds);
     
}
reset()


function reset(){
       setInterval(clock,1000)
       
}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
    }

 
 
function createHart(){
    const heart = document.createElement
    ('div');
    heart.classList.add("heart");
    heart.innerText = "•";
    heart.style.left = Math.random()
     * 100 + "vw";
    heart.style.animationDuration = Math.random()
     * 2 + 4 + "s";
    document.body.appendChild(heart);
    pintarCorazones(heart);
    setTimeout(( ) =>    {
        heart.remove()},6000)
    }    


function pintarCorazones(r){
    let n = Math.random() * (11-1)+1
    if (n>8 ){r.style.color = 'red'}
    else if (n > 5 && n < 8){r.style.color = 'blue'}
    else if (n < 5) (r.style.color = 'white')
}


