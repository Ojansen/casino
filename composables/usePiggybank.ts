import {useStorage} from "@vueuse/core";

export default function () {
	const user = useUser();
	const amount = useStorage('PiggybankAmount', 0);

	function add(value: number) {
		amount.value += Math.floor(value * 0.2);
	}

	function cashOut() {
		user.add(amount.value);
		amount.value = 0;
	}

	return {amount, add, cashOut}
}