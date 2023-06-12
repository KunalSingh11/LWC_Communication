import { LightningElement } from 'lwc';

export default class ParentToChildParent extends LightningElement {

    counterValue = 0;

    counterValueHandler(event) {
        this.counterValue = parseInt(event.target.value);
    }

    incrementHandler() {
        this.template.querySelector('c-parent-to-child-child').add();
    }
}