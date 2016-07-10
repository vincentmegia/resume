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