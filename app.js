const men = document.querySelector('#men');
const slide = document.querySelector('#slide');

men.addEventListener('click', () =>{
    slide.classList.toggle('disp');
});

function goToDiv(divId){
    let element = document.getElementById(divId);
    if(element){
        element.scrollIntoView({behavior: 'smooth'});
    }
}