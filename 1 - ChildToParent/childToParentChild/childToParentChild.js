import { LightningElement } from 'lwc';

export default class ChildToParentChild extends LightningElement {

    addHandler() {
        this.dispatchEvent(new CustomEvent('add'));
    }

    subtractHandler() {
        this.dispatchEvent(new CustomEvent('subtract'));
    }

}