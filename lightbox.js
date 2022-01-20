const img = document.querySelectorAll(".img-gallery");
const imgLight = document.querySelector(".agg-img");
const lightBox = document.querySelector(".img-light");

img.forEach(img =>{
    img.addEventListener('click', ()=>{
        imgLive(img.getAttribute('src'));
    })
})

lightBox.addEventListener('click',(e)=>{
    if(e.target != imgLight){
        lightBox.classList.toggle('show')
        imgLight.classList.toggle('showImg');
    }
})

const imgLive = (imagen)=>{
    imgLight.src = imagen;
    lightBox.classList.toggle('show')
    imgLight.classList.toggle('showImg');
}
