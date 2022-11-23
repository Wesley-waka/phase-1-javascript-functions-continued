function saturdayFun(value="roller-skate") {
    return `This Saturday, I want to ${value}!`
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));


function mondayWork(valuee=`go to the office`) {
    return `This Monday, I will ${valuee}.`
}
console.log(mondayWork());
console.log(mondayWork("work from home."));


// const wrapAdjective= function (r='*'){
//     let emphatic = "a hard worker";
//     let sig = `*`;
//     return `You are ${r} ${emphatic} ${r}.`;

// }
let wrapAdjective = function(drop="*"){
    return function (adj="dedicated"){
        return `You are ${drop}${adj}${drop}!`
    }
    }

