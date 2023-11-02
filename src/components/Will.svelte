<script lang="ts">
	import svelteTilt from "vanilla-tilt-svelte";

	import will from "../assets/will_alpha.png"
</script>

<main>
	<div class="card" use:svelteTilt={{
		max: 20,
		glare: true,
		"max-glare": 0.2,
		perspective: 2000,
		speed: 2000
	}}>
		<!-- <div class="bbg"></div> -->
		<div class="bg"></div>
		<img class="will" src={will} alt="Me!">
	</div>
	
</main>

<style>
	.card {
		width: calc(300px + 2*var(--p));
		height: calc(400px + 2*var(--p));
		--p: 8px;
	}

	.will {
		position: absolute;
		width: 300px;
		height: 400px;
		margin: var(--p);
		opacity: 1;
		pointer-events: none;
	}

	.bbg {
		position: absolute;
		width: calc(300px + 2*var(--p));
		height: calc(400px + 2*var(--p));
		background: black;
	}

	.bg {
		position: absolute;
		width: calc(300px + 2*var(--p));
		height: calc(400px + 2*var(--p));
		opacity: 0;
		background-position: 0% 0%;
		height: calc(400px + 2*var(--p));
		transition: opacity 0.5s ease-in-out;
		background: linear-gradient(150deg,#a0e9ff 0%,#a162e8 30%,#f093b0 60%,#edca85 100%);
	}
	.bg:hover {
		opacity: 1;
	}
</style>