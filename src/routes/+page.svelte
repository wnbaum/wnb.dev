<script lang="ts">
	import { Carousel } from "svelte-vertical-carousel";
	import { CarouselItem as CI } from "svelte-vertical-carousel";

	import Rain from "../components/Rain.svelte";

	import Title from "../components/Title.svelte";
	import Description from "../components/Description.svelte";
</script>

<main class="main">
	<Rain />
	<Carousel maxWidth={"1000px"} tiltFix={0.5}>
		<CI height={200}>
			<Title />
		</CI>
		<CI height={100} />
		<CI height={200}>
			<Description />
		</CI>
		<CI height={100} />
		<CI>
			Hey! I am a sophomore at NYU pursuing a joint major in Computer Science and Math and a minor in Economics. I am passionate about software development, systems design, and anything computer programming. I work on many projects like websites and video games in my free time.
		</CI>
	</Carousel>
</main>

<style>
	.main {
		width: 100vw;
		height: 100vh;
		color: white;
	}
</style>