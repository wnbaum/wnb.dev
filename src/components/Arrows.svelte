<script lang="ts">
	export let show: boolean = false;

	const blurs = [0, 19, 30, 55]
</script>

<main>
	{#each blurs as blur}
		<div class="arrows {blur != 0 ? "bg" : ""}" style="filter: blur({blur}px); opacity: {show ? 1 : 0}">
			{#each {length: 3} as _, i}
				<span class="a a{i}">
					{">  "}
				</span>
			{/each}
		</div>
	{/each}
</main>

<style>
	.arrows {
		position: absolute;
		width: 12vw;
		left: 50%;
		top: 50%;
		font-size: 6vh;
		transform: translate(-50%, -50%) rotate(90deg) scaleY(2);
		font-weight: 400;
		transition: opacity 500ms ease-in-out;
	}

	.bg {
		font-weight: 800;
		transform: translate(-50%, -50%) rotate(90deg) scaleX(1);
		opacity: 0.5;
	}

	.a {
		white-space: pre;
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		75% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.a {
		opacity: 0;
	}

	.a0 {
		color: #edca85;
		animation: blink 1500ms ease-in-out 0ms infinite;
	}

	.a1 {
		color: #f093b0;
		animation: blink 1500ms ease-in-out 500ms infinite;
	}

	.a2 {
		color: #a162e8;
		animation: blink 1500ms ease-in-out 1000ms infinite;
	}
</style>