export class diceRoller {
    span: Element;
    constructor(span: Element) {
        this.span = span;
    }
    rolleDice(diceValue: number): boolean {
        (<HTMLElement>this.span).textContent = diceValues[diceValue];
        return true;
    }
}
class dice extends diceRoller {
    button: Element = document.createElement('button');
    constructor(span: Element) {
        super(span);
        (<HTMLElement>span).style.cssText = "border: 5px solid black; display: inline-block; height: 50px;  width: 50px; margin: 2px"; 
        this.button.textContent = "Role Dice";      
        document.body.appendChild(this.button);  
    }
}
enum diceValues {
    one,
    two,
    three,
    four,
    five,
    six
}
interface diceTypes {
    span: Element;
}
let Elements: Array<diceTypes> = [];
for (let index: number = 0; index < 5; index++) {
    Elements.push({
        'span': document.createElement('span'),
    });
}
let getRandomIntInclusive: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Elements.map((elem, index) => {
    let cube = new dice(elem.span);
    let button: Element = document.createElement('button');
    document.body.appendChild(elem.span);
}); 