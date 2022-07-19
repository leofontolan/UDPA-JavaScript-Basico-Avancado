const objA = {
    chaveA: 'A',
};

const objB = {
    chaveB: 'B',
};

const objC = new Object(
    {
        chaveC: 'C',
    }
);


Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

