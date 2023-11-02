<script lang="ts">
	import { onMount } from "svelte";

	let desc: HTMLElement;
	let cursor: HTMLElement;

	let descriptions = [
		"a programmer",
		"an engineer",
		"a researcher",
		"a maker",
		"a game dev",
		"an artist",
	]

	const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

	let keyDelay = 80;
	let waitDelay = 2000;

	async function description() {
		let current: string = "";
		let idx = 0;

		while (true) {
			let word: string = descriptions[idx];

			for (let i = 0; i < word.length; i++) {
				current += word[i];
				desc.innerText = current;
				await delay(keyDelay);
			}
			await delay(waitDelay);
			while (current != "") {
				current = current.substring(0, current.length-1);
				desc.innerText = current;
				await delay(keyDelay);
			}
			await delay(waitDelay);

			idx = (idx+1)%(descriptions.length)
		}
		
	}

	onMount(() => {
		cursor.innerText = " ";
		description();
	});
	
</script>

<main class="main">
	I am <span class="desc" bind:this={desc}></span><span class="cursor" bind:this={cursor}></span>
</main>

<style>
	.main {
		position: absolute;
		width: 100%;
		top: 0;
		margin: 0;
		text-align: center;
		font-weight: 200;
		font-size: min(60px, 6vw);
		user-select: none;
		letter-spacing: 0.3vh;
		color: #444;
	}

	.desc {
		color: #eee;
		font-family: "Source Code Pro", monospace;
	}

	.cursor {
		font-family: "Source Code Pro", monospace;
		white-space: pre;
		animation: blink 0.5s infinite alternate step-start;
	}

	@keyframes blink {
		50% {
			background-color: #eee;
			color: #444;
		}
		100% {
			color: #eee;
		}
	}
</style>