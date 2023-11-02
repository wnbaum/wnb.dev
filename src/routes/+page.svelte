<script lang="ts">
	import { onMount } from "svelte";

	import { Carousel } from "svelte-vertical-carousel";
	import { CarouselItem as CI } from "svelte-vertical-carousel";

	import Rain from "../components/Rain.svelte";

	import Title from "../components/Title.svelte";
	import Description from "../components/Description.svelte";
	import Arrows from "../components/Arrows.svelte";
    import Will from "../components/Will.svelte";
	import Icon from "../components/Icon.svelte";
	import Project from "../components/Project.svelte";

	import CPPIcon from "../assets/icons/cpp.svg"
	import JavaIcon from "../assets/icons/java.svg"
	import PythonIcon from "../assets/icons/python.svg"
	import CIcon from "../assets/icons/c.svg"
	import CSIcon from "../assets/icons/cs.svg"
	import JSIcon from "../assets/icons/js.svg"
	import TSIcon from "../assets/icons/ts.svg"

	import NodeIcon from "../assets/icons/node.svg"
	import ExpressIcon from "../assets/icons/express.svg"
	import SvelteIcon from "../assets/icons/svelte.svg"
	import ReactIcon from "../assets/icons/react.svg"

	import GitIcon from "../assets/icons/git.svg"
	import GitHubIcon from "../assets/icons/gh.svg"
	import AWSIcon from "../assets/icons/aws.svg"
	import GDIcon from "../assets/icons/gd.svg"
	import UEIcon from "../assets/icons/ue.svg"

	import { Projects } from "../projects";

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
			<CI height={100}>
				<Title />
			</CI>
			<CI height={150}>
				<Arrows show={showArrows}/>
			</CI>
			<CI height={400} />
			<CI height={200}>
				<Description />
			</CI>
			<CI height={400} />
			<CI height={400}>
				<div class="flex">
					<div>
						<p class="bio">
							Hey! I am a sophomore at NYU pursuing a double major in Computer Science with Honors and Math and a minor in Finance. I am passionate about software development, systems design, and anything computer programming. I work on many projects like websites and video games in my free time.
						</p>
					</div>
					<div style="margin: auto;">
						<Will />
					</div>
				</div>
			</CI>
			<CI height={400} />
			<CI height={150}>
				<h1>SKILLS</h1>
			</CI>
			<CI height={200}>
				<h2>LANGUAGES</h2>
				<div class="grid" style="grid-template-columns: repeat(7, 1fr);">
					<Icon img={CPPIcon} text={"C++"}/>
					<Icon img={CSIcon} text={"C#"}/>
					<Icon img={CIcon} text={"C"}/>
					<Icon img={JavaIcon} text={"Java"}/>
					<Icon img={PythonIcon} text={"Python"}/>
					<Icon img={JSIcon} text={"JavaScript"}/>
					<Icon img={TSIcon} text={"TypeScript"}/>
				</div>
			</CI>
			<CI height={50} />
			<CI height={200}>
				<h2>FRAMEWORKS AND LIBRARIES</h2>
				<div class="grid" style="grid-template-columns: repeat(4, 1fr);">
					<Icon img={NodeIcon} text={"Node.js"}/>
					<Icon img={ExpressIcon} text={"Express.js"}/>
					<Icon img={SvelteIcon} text={"Svelte"}/>
					<Icon img={ReactIcon} text={"React"}/>
				</div>
			</CI>
			<CI height={50} />
			<CI height={200}>
				<h2>TOOLS</h2>
				<div class="grid" style="grid-template-columns: repeat(5, 1fr);">
					<Icon img={GitIcon} text={"Git"}/>
					<Icon img={GitHubIcon} text={"GitHub"}/>
					<Icon img={AWSIcon} text={"AWS"}/>
					<Icon img={GDIcon} text={"Godot"}/>
					<Icon img={UEIcon} text={"Unreal Engine"}/>
				</div>
			</CI>
			<CI height={200} />
			<CI height={200}>
				<h1>PROJECTS</h1>
			</CI>
			{#each Projects as project, i}
				<CI height={300}>
					<Project project={project} reverse={i % 2 != 0} />
				</CI>
				<CI height={300} />
			{/each}
			<CI height={200} />
			<CI height={200}>
				<h1>CONTACT</h1>
				<br>
				<div>
					<a class="email" href="mailto:will@wnb.dev">
						will@wnb.dev
					</a>
				</div>
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

	.bio {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin-right: 40px;
	}
	
	@media (max-width: 612px) {
		.flex {
			flex-direction: column-reverse;
		}
		.bio {
			transform: none;
			position: inherit;
			margin-right: 0;
		}
	}

	.grid {
		display: grid;
		/* column-gap: 100px; */
	}

	h1 {
		font-size: min(60px, 7vw);
		font-weight: 200;
		letter-spacing: 1.5vw;
	}

	h2 {
		font-size: min(30px, 4vw);
		font-weight: 200;
		letter-spacing: 0.5vw;
	}

	.email {
		position: relative;
		display: inline-block;
		color: white;
		text-decoration: none;
		font-size: min(60px, 7vw);
		font-weight: 200;
		letter-spacing: 0.5vw;
		left: 50%;
		transform: translateX(-50%);
	}
	.email::after {
		width: 0%;
		content: "";
		position: absolute;
		left: 0;
		bottom: -10px;
		background: linear-gradient(270deg,#a0e9ff 10%,#a162e8 40%,#f093b0 55%,#edca85 94%);
		height: min(5px, 0.5vw);
		opacity: 0;
		transition: width 0.4s ease-out, opacity 0.4s ease-out;
	}
	.email:hover::after {
		width: 100%;
		opacity: 1;
	}
</style>