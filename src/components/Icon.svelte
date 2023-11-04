<script lang="ts">
	export let img: string;
	export let text: string = "";
</script>

<main class="main">
	<img src={img} alt="icon">
	<div class="text">
		{text}
	</div>
</main>

<style>
	.main {
		display: flex;
		flex-direction: column;
		margin: auto;
	}

	img {
		width: min(100px, 12vw);
		aspect-ratio: 1;
	}

	.text {
		margin-top: 10px;
		width: min(100px, 12vw);
		text-align: center;
		font-size: min(18px, 2vw);
	}
</style>