import * as I from '../input';
import { func1, func2 } from './es6';
import { multiplication, transform, average, readjson } from './es6';
it('return json', () => {

	const json = { table: [{ name: 'hatem', age: '44' }, { name: 'houcine', age: '70' }] };

	expect(readjson(json)).toEqual('bonjour hatem, votre age est 44,bonjour houcine, votre age est 70');

});

it('retourne multiplication', () => {
	//given
	const a = 2;
	const b = 3;
	//when
	const total = multiplication(a, b);
	//then 
	expect(total).toEqual(6);

	//expect(multiplication(2,3)).toEqual(6);
});

it('retourne la moyen', () => {
	const arr = [1, 2];
	expect(average(arr)).toEqual(1.5);
})

it('retourne tableau avec ndex', () => {
	//when
	const arr = transform(I.array);
	//then 
	expect(arr).toEqual(["Nombre 1:0", "Nombre 2:27", "Nombre 3:-11", "Nombre 4:2018"]);
})

describe('ES6', () => {
	describe('Example', () => {
		describe('func1', () => {
			it('empty entry should return empty', () => {
				expect(func1()).toEqual();
			});
			it('no empty entry should return entry param', () => {
				expect(func1(I.object)).toEqual(I.object);
			});
		});
		describe('func2', () => {
			it('should return true', () => {
				expect(func2()).toBeTruthy();
			});
		});
	});
});
