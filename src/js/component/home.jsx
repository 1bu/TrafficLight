import React, { useState } from "react";

//create your first component
const Home = () => {

	const [lights, setLights] = useState(undefined)
	const [addColor, setAddColor] = useState(undefined)

	const handleOn = (isOn) =>{
		if(lights === isOn){
			setLights(undefined)
		}
		else{
			setLights(isOn)
		}
	}

	const handleChange = () =>{
		let colors = ["red","yellow","green","purple"]
		let i = 0;
		setInterval(()=>{
			if(addColor){
				setLights(colors[i%4])
			}
			else{
				setLights(colors[i%3])
			}
			i++
		},1000)

	}

	return (
		<div className="text-center">
			<div className="stick"></div>
			<div className={addColor ? "base isPurpleOn": "base"}>
					<div className={lights == "red" ? "light red glow" : "light red"} onClick={() => {handleOn("red")}}></div>
					<div className={lights == "yellow" ? "light yellow glow" : "light yellow"} onClick={() => {handleOn("yellow")}}></div>
					<div className={lights == "green" ? "light green glow" : "light green"} onClick={() => {handleOn("green")}}></div>
					{addColor && <div className={lights == "purple" ? "light purple glow" : "light purple"} onClick={() => {handleOn("purple")}}></div>}
			</div>
			<button className="btn" onClick={()=>{handleChange()}}>Change</button>
			<button className="btn" onClick={()=>{setAddColor(!addColor)}}>Add Purple</button>
		</div>
	);
};

export default Home;
