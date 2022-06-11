import test from 'ava';
import { LinkedList } from '../..';


test('test 1', async t => {
	const array: number[] = [];
	const list = new LinkedList<number>();

	for (let i = 0; i < 1000; i++) {
		if (array.length === 0 || Math.random() < .5) {
			const x = Math.round(Math.random() * 1000000);
			if (Math.random() < .5) {
				array.unshift(x);
				list.unshift(x);
			} else {
				array.push(x);
				list.push(x);
			}
		} else {
			if (Math.random() < .5) {
				array.shift();
				list.shift();
			} else {
				array.pop();
				list.pop();
			}
		}
	}
	while (array.length > 0) {
		t.assert(array.pop() === list.pop());
	}
});
