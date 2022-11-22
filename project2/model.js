export default class Model{

    url = 'https://hp-api.herokuapp.com/api/characters';


    constructor(){
        
    }

    start = () => {
		fetch(this.url).then(r => r.json()).then(characters => console.log(characters))
    }

	getRandom = (max) => {
    	return Math.floor(Math.random() * max)
	}

    getFirstName = (gender) => {
        // const firstName = document.querySelector('#first-name')
        let name = characters.filter(y => y.gender == gender).map((character) => character.name.split(' ')[0])
        return firstName.value = name[getRandom(name.length)]
    }

    getLastName = () => {
        // const lastName = document.querySelector('#last-name')
        const lName = characters.map((character) => character.name.split(' ')[1]).filter(x => x !== undefined)
        return lastName.value = lName[getRandom(lName.length)]
    }   
}