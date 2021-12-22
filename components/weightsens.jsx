import { useEffect, useState } from "react";
import axios from "axios";

export default function WeightSens() {

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

	return(
    <>
			<div className="mybox-top">
			</div>
			<div className="mybox">
				<div className="water-container">
					<div className="water-wave" style={{ bottom: waterHeight }}></div>
				  <div className="water-base" style={{ bottom: waterHeight }}></div>
					<div className="water-static" style={{ height: waterHeight }}></div>
				</div>
			</div>
			<div>
      	<p>water level: {weight}</p>
    	</div>
		</>
	)
}
