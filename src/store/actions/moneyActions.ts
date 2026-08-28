const plusMoney = "money/plus"
const minusMoney = "money/minus"

function plus() {
    return {type:plusMoney}
}

function minus() {
    return {type:minusMoney}
}

export {plus, minus} 