import "./Card.css";




export default function Card() {
  return (
    <div className="App">
      <div className="">
       
        <div className="desp">
          
          <p className="para">
          <span className="h1">Distracted Driver </span>
          <span> 1 March 2023 at 21:30</span>
          </p>
          <p>
          <span>  Driver: Suresh / MH12A3456</span> 
            <span>
           1 March 2023 at 21:30
            </span>
            <span><button className="view-button"> 🔕 Mark as False Alarm</button> </span> 
           
          </p>
          
         
        </div>
      </div>
    </div>
  );
}
