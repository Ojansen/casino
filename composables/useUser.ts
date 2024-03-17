import { useStorage } from '@vueuse/core';

export default function () {
	const bankAccount = "randomhex";

	const bankAmount = useStorage('bank', 10_000);

	function add(value: number) {
		bankAmount.value += value;
	}

	return {bankAccount, bankAmount, add}
}