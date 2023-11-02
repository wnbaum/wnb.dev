<script lang="ts">
	import type { Project } from "../projects";
	
	import svelteTilt from "vanilla-tilt-svelte";

	export let project: Project;
	export let reverse: boolean = false;
</script>

<main class="main {reverse ? "reverse" : ""}">
	<div class="text">
		<div class="type">
			{project.type.toUpperCase()}
		</div>
		<div class="title">
			{project.title}
		</div>
		<div class="desc">
			{project.desc}
		</div>
	</div>
	<div class="imgwrap" use:svelteTilt={{
		max: 15,
		glare: true,
		"max-glare": 0.2,
		perspective: 800,
		speed: 2000
	}}>
		<img src={project.image} alt={project.title}>
	</div>
</main>

<style>
	.main {
		display: flex;
		/* border: 1px solid violet; */
		height: min(40vw, 300px);
		gap: 80px;
		padding: 20px;
	}

	.reverse {
		flex-direction: row-reverse;
	}

	.text {
		flex: 0;
		flex-basis: 40%;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.imgwrap {
		flex: 1;
	}

	.type {
		font-size: min(10vw, 16px);
		letter-spacing: 8px;
		margin-bottom: 10px;
	}

	.title {
		font-size: min(20vw, 40px);
		letter-spacing: 0;
	}

	.desc {
		position: absolute;
		width: 100%;
		font-size: 18px;
		bottom: 0;
	}

	@media (max-width: 600px) {
		.main {
			flex-direction: column-reverse;
			height: auto;
			gap: 20px;
		}

		.imgwrap {
			flex-basis: 40vw;
			height: 40vw;
		}

		.text {
			flex-basis: 200px;
			height: 200px;
		}
	}
</style>