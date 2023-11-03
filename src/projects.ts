interface Project {
	title: string,
	type: string,
	desc: string,
	image: string,
}

import droneResearch from "./assets/projectimages/drone-research.jpg";
import tanks from "./assets/projectimages/tanks.jpg";
import tess from "./assets/projectimages/tess.jpg";
import psr from "./assets/projectimages/robot.jpg";
import fragShader from "./assets/projectimages/fragshader.jpg";
import schedulePwa from "./assets/projectimages/wm-schedule.jpg";
import yolo from "./assets/projectimages/yolo.jpg";
import drone from "./assets/projectimages/drone.jpg";
import pc from "./assets/projectimages/pc.jpg";
import procCad from "./assets/projectimages/proccad.jpg";
import pingPong from "./assets/projectimages/pingpong.jpg";
import fluid from "./assets/projectimages/fluid.jpg";
import dunGen from "./assets/projectimages/DunGEN.jpg";

let projects: Project[] = [
	{
		title: "Drone Genetic Algorithm",
		type: "Research",
		desc: "Training Neural Networks with a Genetic Algorithm for Obstacle Avoidance in Simulated Autonomous Drones",
		image: droneResearch
	},
	{
		title: "Tricky Tanks",
		type: "iOS App",
		desc: "Low-latency multiplayer mobile game in the Godot",
		image: tanks
	},
	{
		title: "Exoplanet Classification Model",
		type: "Research",
		desc: "Exoplanet candidate vetting with Machine Learning",
		image: tess
	},
	{
		title: "Soccer Robot",
		type: "Robot",
		desc: "Robot for RCJ competition",
		image: psr
	},
	{
		title: "Schedule PWA",
		type: "Progressive Web App",
		desc: "Responsive school schedule app with school account integration",
		image: schedulePwa
	},
	{
		title: "Fragment It!",
		type: "Computer Graphics Project",
		desc: "A full-stack website for sharing shaders",
		image: fragShader
	},
	{
		title: "YOLO Object Detection",
		type: "Machine Learning Tool",
		desc: "Using the YOLO model to detect objects in street images",
		image: yolo
	},
	{
		title: "DIY Drone",
		type: "Drone",
		desc: "Custom 5\" quadcopter build",
		image: drone
	},
	{
		title: "Watercooled PC",
		type: "Computer",
		desc: "Hardline watercooled game dev workstation",
		image: pc
	},
	{
		title: "Procedural CAD",
		type: "Web App",
		desc: "Raymarched WebGL app for CAD with programming",
		image: procCad
	},
	{
		title: "VR Ping Pong",
		type: "Video Game",
		desc: "Multiplayer virtual reality ping pong",
		image: pingPong
	},
	{
		title: "Fluid Simulation",
		type: "Simulation",
		desc: "Simple grid-based fluid simulation",
		image: fluid
	},
	{
		title: "DunGEN",
		type: "Video Game",
		desc: "Procedurally generated multiplayer survival RPG",
		image: dunGen
	}
];

export {projects as Projects}
export type {Project as Project}