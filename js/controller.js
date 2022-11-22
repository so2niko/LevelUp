import Model from "./model.js";
import View from "./view.js";


export default class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View(this.onCreateCharacter);

        this.init();
    }

    init = () => {
        this.model.start().then(characters => {
            this.view.render(characters);

            const f = this.model.getFirstName();
            const l = this.model.getLastName();

            this.view.init(f, l);
        });
    }

    onCreateCharacter = (e) => {
        e.preventDefault();
        const mage = this.view.getMage();
        this.model.addMage(mage);

        const characters = this.model.characters;

        this.view.render(characters);
    }

}