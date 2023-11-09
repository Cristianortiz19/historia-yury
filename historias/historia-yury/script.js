const anteriorBtn = document.getElementById('anterior-btn');
const siguienteBtn = document.getElementById('siguiente-btn');

const audioVideo= document.getElementById('audio-animation')
const animationVideo = document.getElementById('animation');
const textVideo = document.getElementById('text');

let animaciones = [
    "../src/escena1.mp4",
    "../src/escena2.mp4",
    "../src/escena3.mp4",
    "../src/ESCENA 4.mp4",
    "../src/ESCENA 5.mp4",
    "../src/ESCENA 6.mp4",
    "../src/ESCENA 7.mp4",
    "../src/ESCENA 8.mp4",
    "../src/ESCENA 9.mp4",
    "../src/ESCENA 10.mp4",
]

let audios = [
    "../src/audio1.wav",
    "../src/audio2.wav",
    "../src/audio3.wav",
    "../src/audio4.wav",
    "../src/audio5.wav",
    "../src/audio6.wav",
    "../src/audio7.wav",
    "../src/audio8.wav",
    "../src/audio9.wav",
    "../src/audio10.wav",
]

let text = [
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

let currentVideoIndex = 0;
let currentAudioIndex = 0;

function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1)  % animaciones.length;
    animationVideo.src = animaciones[currentVideoIndex];
    animationVideo.play();
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
    animationVideo.load();
    animationVideo.play();
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