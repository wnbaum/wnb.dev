<script lang="ts">
	import { Carousel, CarouselItem } from "svelte-vertical-carousel";

	import Rain from "../components/Rain.svelte";

	import Title from "../components/Title.svelte";
	import Description from "../components/Description.svelte";
</script>

<main class="main">
	<Rain />
	<Carousel maxWidth={"1000px"} tiltFix={0.5}>
		<CarouselItem height={200}>
			<Title />
		</CarouselItem>
		<CarouselItem height={100} />
		<CarouselItem height={200}>
			<Description />
		</CarouselItem>
	</Carousel>
</main>

<style>
	.main {
		width: 100vw;
		height: 100vh;
	}
</style>