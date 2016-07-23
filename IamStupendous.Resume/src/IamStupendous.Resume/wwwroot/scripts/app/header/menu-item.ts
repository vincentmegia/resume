import { State } from './state';

/**
 * Header model class
 */
export class MenuItem {
    state: string;
    id: string;
    text: string;
    icon: string;

    constructor(text: string,
                id: string,
                icon: string) {
        this.state = State.in;
        this.id = id;
        this.icon = icon;
    }

    /**
     * fromJSON is used to convert an serialized version
     * of the User to an instance of the class
     * @param json
     */
    static create(json: MenuItem): MenuItem {
        // create an instance of the User class
        let menuItem = Object.create(MenuItem.prototype);
        // copy all the fields from the json object
        return Object.assign(menuItem, json, {});
    }

    /**
     * 
     */
    toggle() {
        this.state = State.active;
    }

    /**
     * 
     */
    toggleInactive() {
        this.state = State.inactive;
    }
}