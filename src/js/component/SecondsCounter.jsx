import React from "react";
import Seconds from './Seconds'



const SecondsCounter = (props) => {
	let second = props.seconds;
    let ten = 0;
    let hundred = 0;
    let thousand = 0;
    let tenThousand = 0;
    let hunThousand = 0;
    if(props.seconds > 9){
        ten =   Math.trunc(props.seconds / 10);
        second = props.seconds % 10;
        if (ten > 9){
            hundred =  Math.trunc(ten / 10);
            ten = ten % 10;
            if(hundred > 9){
                thousand = Math.trunc(hundred / 10);
                hundred = hundred %  10;
                if(thousand > 9){
                    tenThousand = Math.trunc(thousand / 10);
                    thousand = thousand % 10;
                    if(tenThousand > 9){
                        hunThousand = Math.trunc(tenThousand / 10);
                        tenThousand = tenThousand % 10;
                    }
                }
            }
        }
    }
	return (
		<div className="container-fluid bg-black text-white d-flex align-items-center justify-content-center">
			<div className="h-100 my-2">
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" fill="#fff"/></svg>
			</div>
			<div className="d-flex ">
				<Seconds second={hunThousand}/>
				<Seconds second={tenThousand}/>
				<Seconds second={thousand}/>
				<Seconds second={hundred}/>
				<Seconds second={ten}/>
				<Seconds second={second}/>
			</div>
		</div>
	)
}
export default SecondsCounter;