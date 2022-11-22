export default class View{
    charactersList = document.querySelector('#charactersList');
    genderInput = document.querySelectorAll('input[name="gender"]');
    firstName = document.querySelector('#first-name');
    lastName = document.querySelector('#last-name');
    formElement = document.querySelector('#form');
    currentMageImage = document.querySelector('.avatar-img');

    constructor(onCreateCharacter) {
        this.formElement.addEventListener('submit', onCreateCharacter);
    }

    init = (firstName, lastName) => {
        this.firstName.value = firstName;
        this.lastName.value = lastName;
    }

    render = (characters) => {
        let html = characters.map(this.getRow).join('');
        this.charactersList.innerHTML = html;
    }

    getRow = (character) => (`
        <li class="character">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <img src="${character.image}"></img>
        </li>`)
    

    getMage = () => {
        const formData = new FormData(this.formElement); 
        const firstNameVal = formData.get('firstName'); 
        const lastNameVal = formData.get('lastName'); 
        const name = `${ firstNameVal } ${ lastNameVal }`
        const house = formData.get('house') ?? '';
        const image = this.currentMageImage.src;

        return { image, house, name };
    }
}
