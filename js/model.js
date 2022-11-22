export default class Model{
    url = 'https://hp-api.herokuapp.com/api/characters';

    start = () => {
		return fetch(this.url).then(r => r.json()).then(characters => {
            this.characters = characters;
            this.generateFullNames();
            return characters;
        });
    }

    generateFullNames = () => {
        this.names = this.characters.reduce((acc, character) => {
            const [ name, surname ] = character.name.split(' ');
            
            surname ?? acc.lastname.push(surname);
            acc[el.gender]?.push(name);

            return acc;
        }, { male : [], female : [], lastnames : [] });
    }

	getRandom = (max) => Math.floor(Math.random() * max)

    getFirstName = (gender = 'female') => this.names[gender][getRandom(this.names[gender].length)]

    getLastName = () => this.names.lastnames[getRandom(this.names.lastnames.length)]
    
    addMage = (mage) => this.characters.unshift(mage);
}