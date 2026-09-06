const PLUS_MONEY= "money/plus"
const MINUS_MONEY = "money/minus"


interface PlusAction {
type: typeof PLUS_MONEY;
payload:number;
}


interface MinusAction {
type: typeof MINUS_MONEY;
payload:number;
}


export type MoneyAction = PlusAction | MinusAction;


function plus(sum:number):PlusAction {
    return {type:PLUS_MONEY, payload:sum}
}

function minus(sum:number):MinusAction {
    return {type:MINUS_MONEY, payload:sum}
}

export {plus, minus} 