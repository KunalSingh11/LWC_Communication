import { LightningElement } from 'lwc';

export default class ChildToParentParent extends LightningElement {

    counterValue = 0;

    handleIncrement() {
        this.counterValue++;
    }

    handleDecrement() {
        this.counterValue--;
    }

}