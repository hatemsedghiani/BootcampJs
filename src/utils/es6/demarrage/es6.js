export const func1 = toto => toto;

export const func2 = () => true;

export const transform = arr => arr.map((a, index) => `Nombre ${index + 1}:${a}`);

export const multiplication = (a, b) => a * b;

export const average = arr => arr.reduce((accumulateur, value) => (accumulateur + value)) / arr.length;

export const readjson = json => json.table.map(a => `bonjour ${a.name}, votre age est ${a.age}`).join(',');