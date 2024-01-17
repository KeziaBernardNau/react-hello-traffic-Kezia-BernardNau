import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [colorClicked, setColorClicked]= useState("")
	return (
		<div className="text-center">
			<div class="trafficLightStem">

			</div>
			<div class="trafficLightBody">
				<div 
				class={colorClicked==="red"?"light redLight redGlow":"light redLight"}
				onClick={
					colorClicked==="red"?
					 ()=>setColorClicked("")
					 :
					 ()=>setColorClicked("red")
				}>
			</div>

			<div 
				class={colorClicked==="yellow"?"light yellowLight yellowGlow":"light yellowLight"}
				onClick={
					colorClicked==="yellow"?
					 ()=>setColorClicked("")
					 :
					 ()=>setColorClicked("yellow")
				}>
				</div>
			<div 
				class={colorClicked==="green"?"light greenLight greenGlow":"light greenLight"}
				onClick={
					colorClicked==="green"?
					 ()=>setColorClicked("")
					 :
					 ()=>setColorClicked("green")
				}>

				</div>
			</div>
		</div>
	);
};


export default Home;
