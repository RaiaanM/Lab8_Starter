// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Is phone number 1', () => {
	let test1 = functions.isPhoneNumber('(000)554-1111');
	expect(test1).toBe(true);
});

test('Is phone number 2', () => {
	let test2 = functions.isPhoneNumber('(988)----333-3234');
	expect(test2).toBe(true);
});

test('Is phone number 3', () => {
	let test3 = functions.isPhoneNumber('(444)382-2238');
	expect(test3).toBe(true);
});

test('Is phone number 4', () => {
	let test4 = functions.isPhoneNumber('(10)-543-2328');
	expect(test4).toBe(true);
});


test("Is email 1", ()=> {
	let test1 = functions.isEmail('fortthine@abc.com');
	expect(test1).toBe(true);
})
test("Is email 2", ()=> {
	let test2 = functions.isEmail('......');
	expect(test2).toBe(false);
})

test("Is email 3", ()=> {
	let test3 = functions.isEmail('8932512');
	expect(test3).toBe(false);
})

test("Is email 4", ()=> {
	let test4 = functions.isEmail('byelogel@gmail.com');
	expect(test4).toBe(true);
})

test("Is strong password 1", ()=> {
	let test1 = functions.isStrongPassword('64');
	expect(test1).toBe(false);
})

test("Is strong password 2", ()=> {
	let test2 = functions.isStrongPassword('1BB_$$313');
	expect(test2).toBe(false);
})
test("Is strong password 3", ()=> {
	let test3 = functions.isStrongPassword('AB_______');
	expect(test3).toBe(true);
})
test("Is strong password 4", ()=> {
	let test4 = functions.isStrongPassword('bfalsift___');
	expect(test4).toBe(true);
})

test("Is Date 1", () => {
	let test1 = functions.isDate('2/4/5151');
	expect(test1).toBe(true);
})

test("Is Date 2", () => {
	let test2 = functions.isDate('4444//1900');
	expect(test2).toBe(false);
})
test("Is Date 3", () => {
	let test3 = functions.isDate('10/10/0010');
	expect(test3).toBe(true);
})
test("Is Date 4", () => {
	let test4 = functions.isDate('NOPE-:E;f');
	expect(test4).toBe(false);
})

test("Is HexColor 1", () => {
	let test1 = functions.isHexColor('#0GAEHZ');
	expect(test1).toBe(false);
})

test("Is HexColor 1", () => {
	let test2 = functions.isHexColor('#0EDBCA');
	expect(test2).toBe(true);
})
test("Is HexColor 1", () => {
	let test3 = functions.isHexColor('#000000');
	expect(test3).toBe(true);
})
test("Is HexColor 1", () => {
	let test4 = functions.isHexColor('#AA');
	expect(test4).toBe(false);
})