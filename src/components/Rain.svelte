<script lang="ts">
	let rand: [number, number][] = []

	let rainSpeed: number = 0.8;

	function randInt(a: number, b: number) {
		return Math.floor(a+(b-a)*Math.random());
	}

	for (let i = 0; i < 100; i++) {
		let rand1 = randInt(1, 98);
		let rand2 = randInt(2, 5);
		rand.push([rand1, rand2]);
	}
</script>

<main class="main">
	{#each rand as [rand1, rand2], i}
		<div class="drop" style="left: {i}%; bottom: {2*rand2+100}%; animation-delay: 0.{rand1}s; animation-duration: {rainSpeed+rand1*0.001}s;">
			<div class="stem" style="animation-delay: 0.{rand1}s; animation-duration: {rainSpeed+rand1*0.001}s;"></div>
			<div class="splat" style="animation-delay: 0.{rand1}s; animation-duration: {rainSpeed+rand1*0.001}s;"></div>
		</div>
	{/each}
</main>

<style>
	.main {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>