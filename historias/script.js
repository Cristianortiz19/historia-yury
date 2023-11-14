const menu = document.getElementById('menu')


const anteriorBtn = document.getElementById('anterior-btn');
const siguienteBtn = document.getElementById('siguiente-btn');

// Historia Yury getters
const btnHistoriaYury = document.getElementById('btn-historia-yury');
const historiaYury = document.getElementById('historia-yury');
const audioVideoYury= document.getElementById('audio-animation-yury')
const animationVideoYury = document.getElementById('animation-yury');
const textVideoYury = document.getElementById('text-yury');
const loopHistoriaYury = document.getElementById('loop-yury')


// Variables
let audioVideo;
let animationVideo;
let textVideo;
let animaciones = [];
let audios = [];
let text = [];

let animacionesYury = [
    "../src/escena-yury1.gif",
    "../src/escena-yury2.gif",
    "../src/escena-yury3.gif",
    "../src/escena-yury4.gif",
    "../src/escena-yury5.gif",
    "../src/escena-yury6.gif",
    "../src/escena-yury7.gif",
    "../src/escena-yury8.gif",
    "../src/escena-yury9.gif",
    "../src/escena-yury10.gif",
]

let audiosYury = [
    "../src/audio-yury1.wav",
    "../src/audio-yury2.wav",
    "../src/audio-yury3.wav",
    "../src/audio-yury4.wav",
    "../src/audio-yury5.wav",
    "../src/audio-yury6.wav",
    "../src/audio-yury7.wav",
    "../src/audio-yury8.wav",
    "../src/audio-yury9.wav",
    "../src/audio-yury10.wav",
]

let textYury = [
    "Yo veía un chico enfrente de mi casa y me atraía mucho. En el colegio también me atraían varios.",
    "Me volé de mi casa porque no me aceptaban, sobre todo mi hermano mayor, él me hacía la vida imposible, y mi mamá. Tenía 10 años.",
    "Me fui a recorrer el departamento, estuve en Anserma, Sevilla; dormí en la calle, estuve presa, estuve en el hospital.",
    "La gente antes discriminada a los trans, lo trataban mal a uno y le decían cochinadas, nos tiraban piedras.",
    "Después de 5 años me encontré a mi hermano mayor, que era dragoneante del batallón en un prostíbulo… Mi hermano me quiso ver y él me abrazó y perdonó.",
    "Tenía ya unos 20 años, llegué a la casa de mi madre y pregunté por ella. Me recibieron mis hermanas y nadie me reconoció.",
    "Cuando llegó (su mamá) no me reconoció, me preguntó quién era. Estaba desesperada… le dije que era su hijo, nos abrazamos y lloramos ese día, junto con mi familia.",
    "Mi mamá me llevó donde unas estilistas amigas de ellas. Las conocí y ellas me recibieron como amiga. Ya me quedé luego trabajando con ellas como estilista.",
    "Cuando resulté con VIH para mi fue horrible, era como si me fuera a morir. No quería llegar a mi casa por el miedo al rechazo. Los reuní a todos y les dije que estaba enferma. ",
    "Todos mis hermanos me abrazaron y lloraron conmigo, no dejaron que me fuera de la casa. Tuve el apoyo de todos ellos."
]


// MENU


const btnHistoriaBicky = document.getElementById('btn-historia-bicky');
const btnHistoriaMaisonDavid = document.getElementById('btn-historia-maison-david');



btnHistoriaYury.addEventListener('click', () => {
    animationVideo = animationVideoYury;
    audioVideo = audioVideoYury;
    textVideo = textVideoYury;
    animaciones = animacionesYury;
    audios = audiosYury;
    text = textYury;
    menu.style.display = 'none';
    historiaYury.style.display = 'flex';
    audioVideo.play();
    loopHistoriaYury.play();
})


let currentVideoIndex = 0;
let currentAudioIndex = 0;

function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1)  % animaciones.length;
    animationVideo.src = animaciones[currentVideoIndex];
    textVideo.textContent = text[currentVideoIndex]
}

function playNextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % audios.length;
    audioVideo.src = audios[currentAudioIndex];
    audioVideo.load();
    audioVideo.play();
}

function playPreviousVideo() {
    currentVideoIndex = (currentVideoIndex - 1)  % animaciones.length;
    animationVideo.src = animaciones[currentVideoIndex];
    textVideo.textContent = text[currentVideoIndex]
}

function playPreviousAudio() {
    currentAudioIndex = (currentAudioIndex - 1) % audios.length;
    audioVideo.src = audios[currentAudioIndex];
    audioVideo.load();
    audioVideo.play();
}

anteriorBtn.addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        playPreviousVideo();
        playPreviousAudio();
    }
    console.log(currentVideoIndex);
})

siguienteBtn.addEventListener('click', () => {
    if (currentVideoIndex < animaciones.length - 1) {
        playNextVideo();
        playNextAudio();
        console.log(currentVideoIndex);
    }
})

