import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from '../context/mystate.jsx';

export default function WeightSens() {
  const { wght_sub } = useAppContext();
/*
	const [waterHeight, setwaterHeight] = useState('0px')

	const [weight, setWeight] = useState(0);

  function getData() {
    fetch("http://192.168.1.104:8000/weightsens", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(response) {
         if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
         }
        response.json().then(function(data) {
         console.log(Math.round(data.amount * 3)+"px");
         //console.log(parseFloat(data.amount).toFixed(2));
         setWeight(parseFloat(data.amount).toFixed(2)+"%");
         setwaterHeight(Math.round(data.amount * 3)+"px");
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      })
  }

  getData();
  useEffect(() => {
  const id = setInterval(getData, 3000);
  return () => clearInterval(id);  
  }, []);
*/

	return(
    <>
			<div>
        <h2>Weight Sensor2 (5kg)</h2>
			</div>
			<div>
      	<p>{wght_sub} grams</p>
    	</div>
		</>
	)
}
