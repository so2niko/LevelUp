export default class View{
    charactersList = document.querySelector('#charactersList');
    genderInput = document.querySelectorAll('input[name="gender"]')
    firstName = document.querySelector('#first-name')
    lastName = document.querySelector('#last-name')

    constructor() {

    }

    render = (characters) => {
        let html = characters.reverse().map((character) => this.getRow(character)).join('');
        this.charactersList.innerHTML = html;
    }

    getRow = (character) => (`
        <li class="character">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <img src="${character.image}"></img>
        </li>`)
}
