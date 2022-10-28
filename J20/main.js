function ajax(url, callback){
    const aj = new XMLHttpRequest();
    aj.onload = () => {
        callback(aj.responseText);
    }

    aj.open('GET', url);

    aj.send();
}

const API_URL = 'https://randomuser.me/api/';
let OBJS;
const IMG = document.querySelector('.img');

function init(){
    ajax(API_URL, (t) => {
        const r = JSON.parse(t);    
        console.log(r.objectIDs);
        OBJS = r.objectIDs;

        getRandomArt();
    });
}

// function getRandom(max){
//     return Math.floor(Math.random() * max);
// }

// function getRandomArt(){
//     const id = OBJS[getRandom(OBJS.length)];
//     const url = `${ API_URL }/${ id }`;
//     ajax(url, (t) => {
//         const r = JSON.parse(t);
//         console.log(r);
//         renderImage(r);
//     })
// }

// function renderImage(d){
//     IMG.src = d.primaryImage;
//     IMG.setAttribute('alt', d.title);
// }

// document.querySelector('.btn').addEventListener('click', getRandomArt);

// init();

