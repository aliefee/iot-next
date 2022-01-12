import { useEffect, useState } from "react";
import { useAppContext } from '../context/mystate.jsx';
//import React, { useContext } from "react";
//import { AppContext } from '../context/mystate.jsx';

export default function TempSens() {

	const { value } = useAppContext();


	return(
    <>
			<div>
      	<p>{value}</p>
    	</div>
		</>
	)
}
