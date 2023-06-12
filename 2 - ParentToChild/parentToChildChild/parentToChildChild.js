import { LightningElement, api } from 'lwc';

export default class ParentToChildChild extends LightningElement {

    @api counter = 0;

    @api add() {
        this.counter = this.counter + 10;
    }
}