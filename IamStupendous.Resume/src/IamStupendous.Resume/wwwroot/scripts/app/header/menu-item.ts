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
     * toJSON is automatically used by JSON.stringify
     */
    toJson(): IMenuItem {
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this);
    }

    /**
     * fromJSON is used to convert an serialized version
     * of the User to an instance of the class
     * @param json
     */
    static fromJson(json: IMenuItem | string): MenuItem {
        if (typeof json === 'string') {
            // if it's a string, parse it first
            return JSON.parse(json, MenuItem.reviver);
        } else {
            // create an instance of the User class
            let user = Object.create(MenuItem.prototype);
            // copy all the fields from the json object
            return Object.assign(user, json, {});
        }
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    static reviver(key: string, value: any): any {
        return key === "" ? MenuItem.fromJson(value) : value;
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

/**
 * 
 */
interface IMenuItem {
    state: string;
    id: string;
    text: string;
    icon: string;
}