import { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from '../context/mystate.jsx';

export default function WaterLevel() {
  const { wght, wtr_height } = useAppContext();
  //const { wtr_height } = useAppContext();
  //setwaterHeight(Math.round((wght-1000) / 1900 * 3)+"px");

 /*
	const [waterHeight, setwaterHeight] = useState('0px')

	const [weight, setWeight] = useState(0);
  useEffect(() => {
  const id = setInterval(() => 
    fetch("http://localhost:8000/waterlevel", {
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
    , 5000);
  return () => clearInterval(id);  
  }, []);
*/
	return(
    <>
			<div className="mybox-top">
			</div>
			<div className="mybox">
				<div className="water-container">
					<div className="water-wave" style={{ bottom: wtr_height }}></div>
				  <div className="water-base" style={{ bottom: wtr_height }}></div>
					<div className="water-static" style={{ height: wtr_height }}></div>
				</div>
			</div>
			<div className="mybox-footer">
      	<p>Water Level: { ((wght - process.env.NEXT_PUBLIC_DMCN) * 0.0052631578).toFixed(2) + '%' }</p>
        <p className="kg-data">{ ((wght - process.env.NEXT_PUBLIC_DMCN) / 1000).toFixed(3) + ' kg' }</p>
    	</div>
		</>
	)
}
