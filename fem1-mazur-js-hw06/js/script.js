
let sourceArr = ["lala",23, "32", undefined, {cheese: 'Comte', wine: 'Jura', dipper: 'honey'}, true, "32", null, "M61"];

let resultArr = filterBy(sourceArr, 'string');
console.log(resultArr);

function filterBy (whatToFilter, exception){
     return whatToFilter.filter ((arrItem) => typeof (arrItem) !== exception)
}

