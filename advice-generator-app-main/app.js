// counter needed to be added to card title still

const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#dice');

resBtn.addEventListener('click', () => {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}

function getAdvice(){
    fetch ( 'https://api.adviceslip.com/advice').then(response => {
        return response.json();
     }).then(adviceData => {
         const Adviceobj = adviceData.slip;
         resDiv.innerHTML = `<p>${Adviceobj.advice}</p>`;
     }).catch(error => {
        console.log(error);
     });
}





