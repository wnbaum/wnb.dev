<script lang="ts">
	import { onMount } from "svelte";

	import { Carousel } from "svelte-vertical-carousel";
	import { CarouselItem as CI } from "svelte-vertical-carousel";

	import Rain from "../components/Rain.svelte";

	import Title from "../components/Title.svelte";
	import Description from "../components/Description.svelte";
	import Arrows from "../components/Arrows.svelte";
    import Will from "../components/Will.svelte";

	let showCarousel: boolean = false;
	let showArrows: boolean = false;
	let scrollProgression: number = 0;

	$: if (scrollProgression > 0 && showArrows) {
		showArrows = false;
	} 
	
	const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

	async function waitForScroll() {
		await delay(6000);
		showArrows = true;
	}

	async function start() {
		await delay(100);
		showCarousel = true;
	}

	onMount(() => {
		start();
		waitForScroll();
	})
</script>

<main class="main">
	<Rain />
	<div class="container" style="opacity: {showCarousel ? 1 : 0}">
		<Carousel maxWidth={"1000px"} tiltFix={1} margin={50} bind:scrollProgression={scrollProgression} >
			<CI height={200}>
				<Title />
			</CI>
			<CI height={150}>
				<Arrows show={showArrows}/>
			</CI>
			<CI height={150} />
			<CI height={200}>
				<Description />
			</CI>
			<CI height={50} />
			<CI height={400}>
				<div class="flex">
					<p>
						Hey! I am a sophomore at NYU pursuing a double major in Computer Science with Honors and Math and a minor in Finance. I am passionate about software development, systems design, and anything computer programming. I work on many projects like websites and video games in my free time.
					</p>
					<!-- <Will /> -->
				</div>
			</CI>
			<CI height={200}>
				<h1>SKILLS</h1>
			</CI>
			<CI height={200}>
				<h1>PROJECTS</h1>
			</CI>
			<CI height={200}>
				<h1>CONTACT</h1>
			</CI>
		</Carousel>
	</div>
</main>

<style>
	.main {
		width: 100vw;
		height: 100vh;
		color: white;
	}

	.container {
		width: 100%;
		height: 100%;
		transition: opacity 3s ease-in-out;
	}

	.flex {
		display: flex;
	}

	h1 {
		font-size: min(60px, 7vw);
		font-weight: 200;
		letter-spacing: 1.5vw;
	}

	/* @media (max-width: 500px) {
		.flex {
			flex-direction: column-reverse;
		}
	} */
</style>