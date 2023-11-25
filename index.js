window.addEventListener('keydown',function(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
key.classList.add("playing");
if(!audio) return;
audio.currentTime = 0;
audio.play();
this.setTimeout(function(){key.classList.remove("playing");}, 300)
})
window.addEventListener('click',function(b){
    const audios = document.querySelector(`audio[data-key="${b.keyCode}"]`);
    const keys = document.querySelector(`.key[data-key="${b.keyCode}"]`);
    keys.classList.add("playing");
    if(!audios) return;
    audios.currentTime = 0;
    audios.play();
    this.setTimeout(function(){keys.classList.remove("playing");}, 300)
    })