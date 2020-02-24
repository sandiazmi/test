// array to sentence
let arr = [ 'A', 'B', 'D', 'E', 'G', 'H', 'I', 'R', 'Q', 'O', 'N', 'K', 'S', 'T', 'U', 'V', 'Y' ];
arr.sort();

let s = arr.slice(0, arr.length - 1).join(', ') + ', ' + arr.slice(-1);

console.log(s);

// sentence to array
let arr2 = [
	32,
	26,
	37,
	28,
	27,
	34,
	31,
	30,
	41,
	37,
	25,
	37,
	33,
	24,
	27,
	35,
	34,
	30,
	36,
	41,
	24,
	31,
	26,
	41,
	33,
	37,
	40,
	38,
	41,
	34,
	30,
	41,
	40,
	30,
	24,
	41,
	39,
	31,
	31,
	29,
	28
];
// urutkan data array
arr2.sort();

let s2 = arr2.slice(0, arr2.length - 1).join(', ') + ', ' + arr2.slice(-1);

console.log(s2);
