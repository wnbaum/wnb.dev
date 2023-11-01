<script lang="ts">
	import { onMount } from "svelte";

	const blurs = [0, 19, 30, 55]

	let opac = 0.5;

	let cs = "987654321ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	function randomLetter() {
		return cs.at(Math.trunc(Math.random()*cs.length));
	}

	let finalName = "WILLBAUMGARTNER"
	let name = 		"               "

	const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

	let swapDelay: number = 40;
	let waitDelay: number = 3000;

	async function generate() {
		while (true) {
			let idx = 0;

			while (idx <= finalName.length) {
				for (let i = 0; i < 2; i++) {
					let random = finalName.substring(0, idx);
					for (let j = idx; j < finalName.length; j++) {
						random += randomLetter();
					}
					name = random;
					name = name.slice(0, 4) + " " + name.slice(4);
					await delay(swapDelay);
				}
				idx++;
			}
			
			await delay(waitDelay);

			idx = 0;
			while (idx <= finalName.length) {
				for (let i = 0; i < 2; i++) {
					let random = "";
					for (let j = 0; j < idx; j++) {
						random += randomLetter();
					}
					random += finalName.substring(idx);
					name = random;
					name = name.slice(0, 4) + " " + name.slice(4);
					await delay(swapDelay);
				}
				idx++;
			}
		}
	}

	onMount(() => {
		generate();
	});
</script>

<main>
	{#each blurs as blur}
		<div class="name {blur != 0 ? "bg" : ""}" style="filter: blur({blur}px);">
			{name}
		</div>
	{/each}
</main>

<style>
	.name {
		position: absolute;
		width: 100%;
		top: 50%;
		transform: translateY(-8vh);
		margin: 0;
		text-align: center;
		font-family: "Source Code Pro", monospace;
		font-weight: 400;
		font-size: min(60px, 6vw);
		background: linear-gradient(270deg,#a0e9ff 10%,#a162e8 40%,#f093b0 55%,#edca85 94%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		user-select: none;
		letter-spacing: 1.5vw;
	}

	.bg {
		letter-spacing: 1.5vw;
		font-weight: 800;
		animation: pulsate 0.1s alternate infinite ease-in-out;
	}

	@keyframes pulsate {
		0% {
			opacity: 0.5;
		}
		100% {
			opacity: 0.45;
		}
	}
</style>