// import Controller from "./controller.js";
// const display = new Controller();



const charactersList = document.querySelector('#charactersList');


    // const url = 'https://hp-api.herokuapp.com/api/characters'
    // fetch(url).then(r => r.json()).then(characters => displayCharacters(characters))



const displayCharacters = (characters) => {
    // let html = characters
    //     .map((character) => {
    //         return `
    //         <li class="character">
    //             <h2>${character.name}</h2>
    //             <p>House: ${character.house}</p>
    //             <img src="${character.image}"></img>
    //         </li>
    //     `;
    //     }).join('');
    // console.log(characters);


    document.querySelectorAll('input[name="gender"]').forEach((elem) => {
        elem.addEventListener("change", function (event) {
            let currentGender = event.target.value;

            if (currentGender == 'female') {
                getFirstName('female');
                document.querySelector('.avatar-img').src = "img/wizard-girl.jpg"
                document.querySelector('#updateName').addEventListener('click', () => getFirstName('female'))

            } else {
                getFirstName('male');
                document.querySelector('.avatar-img').src = "img/wizard-boy.jpg"
                document.querySelector('#updateName').addEventListener('click', () => getFirstName('male'))

            }
        });
    });


    document.querySelectorAll('input[name="wizard-check"]').forEach((elem) => {
        elem.addEventListener("change", function (event) {
            let isWizard = event.target.value;
            
            console.log(isWizard);
            if (isWizard == 'false') {
                document.querySelector('.house').classList.add('hidden')
                document.querySelector('#select').value = ''
            } else {
                document.querySelector('.house').classList.remove('hidden')
            }
        });
    });

    // getLastName()
    // getFirstName('female')
    document.querySelector('#updateName').addEventListener('click', () => getFirstName('female'))
    
    // function getFirstName(gender) {
    //     const firstName = document.querySelector('#first-name')
    //     let name = characters.filter(y => y.gender == gender).map((character) => character.name.split(' ')[0])
    //     return firstName.value = name[getRandom(name.length)]
    // }

    // function getLastName() {
    //     const lastName = document.querySelector('#last-name')
    //     const lName = characters.map((character) => character.name.split(' ')[1]).filter(x => x !== undefined)
    //     return lastName.value = lName[getRandom(lName.length)]
    // }    

    document.querySelector('#update-lastname').addEventListener('click', () => getLastName())

    // charactersList.innerHTML = html;
    
    // const formElement = document.querySelector('#form');
    
//     formElement.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const formData = new FormData(formElement); 
//         const firstNameVal = formData.get('firstName'); 
//         const lastNameVal = formData.get('lastName'); 
//         const houseVal = formData.get('house') ?? '';//V

//         characters.unshift({ name: `${firstNameVal} ${lastNameVal}`, house: `${houseVal}`, image: `${document.querySelector('.avatar-img').src}` })//M

//         html = characters
//         .map((character) => {
//             return `
//             <li class="character">
//                 <h2>${character.name}</h2>
//                 <p>House: ${character.house}</p>
//                 <img src="${character.image}"></img>
//             </li>
//         `;
//         }).join('');

//         charactersList.innerHTML = html;//V
// });




};

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

