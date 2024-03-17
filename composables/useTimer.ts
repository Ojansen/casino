import {useStorage} from "@vueuse/core";

export default function () {
	const startTime = useStorage('startTime', Date.now());
	const currentTime = useStorage('currentTime', Date.now());

	const elapsedTime = computed(() => {
		return currentTime.value - startTime.value;
	});

	const isTimerExpired = computed(() => {
		const minutes = 1;
		return elapsedTime.value >= minutes * 60 * 100; // 10 minutes in milliseconds
	});

	function startTimer() {
		setInterval(() => {
			currentTime.value = Date.now();
		}, 1000); // Update current time every second
	}

	function resetTimer() {
		startTime.value = Date.now();
	}

	onMounted(() => {
		startTimer();
	});

	onBeforeUnmount(() => {
		startTime.value = Date.now();
	});

	return {
		startTimer,
		resetTimer,
		elapsedTime,
		isTimerExpired
	};
}