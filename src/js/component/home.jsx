import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	(props.dijiOne)
	
	const estiloDivDigitos = {
		backgroundColor: "#333", 
		backgroundImage: "url('https://i.pinimg.com/originals/88/3d/9d/883d9dd5794f964b84d8abaab0ff8ab9.jpg')", 
		backgroundSize: "cover",
	
	  };


	
	return (
		
		<div class="container bg-dark text-center bg-container fs-1">
		<div class="row bg-dark p-3 justify-content-center" >
		<div class="col-2 d-flex align-items-center justify-content-center text-white fw-bold m-3 p-5 bg-secondary rounded fa-2x" style={estiloDivDigitos}><i class="fas fa-clock fa-spin"></i></div>
		  <div class="col-1 d-flex align-items-center justify-content-center text-white fw-bold m-3 p-5 bg-secondary fs-1 rounded" style={estiloDivDigitos}>{props.dijiOne}</div>
		  <div class="col-1 d-flex align-items-center justify-content-center text-white fw-bold m-3 p-5 bg-secondary fs-1 rounded" style={estiloDivDigitos}>{props.dijiTwo}</div>
		  <div class="col-1 d-flex align-items-center justify-content-center text-white fw-bold m-3 p-5 bg-secondary fs-1 rounded" style={estiloDivDigitos}>{props.dijiTree}</div>
		  <div class="col-1 d-flex align-items-center justify-content-center text-white fw-bold m-3 p-5 bg-secondary fs-1 rounded" style={estiloDivDigitos}>{props.dijiFour}</div>
		  <div class="col-1 d-flex align-items-center justify-content-center text-white fw-bold m-3 p-5 bg-secondary fs-1 rounded" style={estiloDivDigitos}> {props.dijiFive}</div>
		  <div class="col-1 d-flex align-items-center justify-content-center text-white fw-bold m-3 p-5 bg-secondary fs-1 rounded" style={estiloDivDigitos}>{props.dijiSix}</div>
		</div>
		
		</div>	
	);
};

export default Home;
