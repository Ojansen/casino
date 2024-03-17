import {useStorage} from "@vueuse/core";

export default function () {
	const user = useUser();
	const timer = useTimer();
	const piggyBank = usePiggybank();
	const hasWon = ref( false);
	const amount = useStorage('scratchAmount', winAmount());

	function winAmount() {
		const min = 10_000;
		const max = 1_000_000;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function checkWin() {
		if (timer.isTimerExpired && !hasWon.value) {
			setWinAmount();
			hasWon.value = true;
			user.add(amount.value);
			piggyBank.add(amount.value);
			timer.resetTimer();
		}
	}

	function setWinAmount () {
		amount.value = winAmount();
	}


	return {amount, checkWin, hasWon}
}