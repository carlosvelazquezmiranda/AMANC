import React from 'react'
import './css/header.css'
import './js/header.js'
export const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning .bg-gradient-warning"     >
		<div className="container-fluid">
		
		 <div className="collapse navbar-collapse" id="main_nav">
		   
	   
		   <ul className="navbar-nav">
			<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown"> <b> NUESTRA CAUSA  </b></a>
				<ul className="dropdown-menu">
				  <li><a className="dropdown-item" href="/#"> QUIÉNES SOMOS</a></li>
				  <li><a className="dropdown-item" href="/#"> QUÉ HACEMOS </a></li>
				  <li><a className="dropdown-item" href="/#"> EN DÓNDE ESTAMOS</a></li>
				  <li><a className="dropdown-item" href="/#"> RED NACIONAL AMANC </a></li>
				</ul>
			</li>
			<li className="nav-item active"> <a className="nav-link" href="/#"><b>NECESITO APOYO</b> </a> </li>
			
			<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="/#" data-bs-toggle="dropdown">  <b>QUIERO AYUDAR </b> </a>
				<ul className="dropdown-menu">
				  <li><a className="dropdown-item" href="/#"> CON DINERO </a></li>
				  <li><a className="dropdown-item" href="/#"> EN ESPECIE &raquo; </a>
					   <ul className="submenu dropdown-menu">
						<li><a className="dropdown-item" href="/#">COSAS NUEVAS</a></li>
						<li><a className="dropdown-item" href="/#">COSAS USADAS</a></li>
						<li><a className="dropdown-item" href="/#">MATERIAL RECICLADO</a></li>
						<li><a className="dropdown-item" href="/#">BAZARES</a></li>
						<li><a className="dropdown-item" href="/#">TIENDA AMANC</a></li>
					 </ul>
				  </li>
				  <li><a className="dropdown-item" href="/#"> CON ALIANZAS &raquo; </a>
					   <ul className="submenu dropdown-menu">
						<li><a className="dropdown-item" href="/#">CAMPAÑAS</a></li>
						<li><a className="dropdown-item" href="/#">EVENTOS</a></li>
						<li><a className="dropdown-item" href="/#">CUARTEL CENTINELAS</a></li>
						<li><a className="dropdown-item" href="/#">MARATÓN Y MEDIO MARATÓN</a></li>
					 </ul>
				  </li>
				  <li><a className="dropdown-item" href="/#"> CON TIEMPO &raquo;</a>
					   <ul className="submenu dropdown-menu">
						<li><a className="dropdown-item" href="/#">VOLUNTARIO EN CASA</a></li>
						<li><a className="dropdown-item" href="/#">VOLUNTARIADO CORPORATIVO</a></li>
						<li><a className="dropdown-item" href="/#">TRABAJA CON NOSOTROS</a></li>
						<li><a className="dropdown-item" href="/#">SERVICIO SOCIAL</a></li>
					 </ul>
				  </li>
				  <li><a className="dropdown-item" href="/#"> CON SANGRE </a></li>
				</ul>
		 </li>
			<li className="nav-item"><a className="nav-link" href="/#"> <b>PRENSA</b> </a></li>
			<button type="button" className="btn btn-info">Donar</button>
			<li className="nav-item">
				
			</li>
			   
		   </ul>
	   
		   
	   
		 </div> 
		</div> 
	   </nav>




    </div>
  )
}
