function returnFunction(name){

    return function(){
        return name;
    };
}

const showFullName1 = returnFunction('Leonardo');
const showFullName2 = returnFunction('Alberto');
console.dir(showFullName1);
console.dir(showFullName2);
