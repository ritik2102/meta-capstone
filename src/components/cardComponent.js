import firstImg from "./images/greek salad.jpg";
import secondImg from "./images/OIP.jpg";
import thirdImg from "./images/lemon dessert.jpg";
import delivery from './images/food.png'

export function Card(props){

    const cardStyle={width:"405px",height:"280px"}
    const image=props.image;
    return(
        <div style={cardStyle}>
            <img style={{width:"405px"}}src={image}/>
            <div style={{display:"grid",gridTemplateColumns:"7fr 3fr"}}>
                <h3 style={{margin:"20px"}}>{props.title}</h3>
                <p style={{color:"#EE9972"}}>{props.price}</p>
            </div>
            <p style={{margin:"20px",width:"300px",height:"110px"}}>{props.body}</p>
            <a href="#"style={{marginLeft:"20px",textDecoration:"none"}}>Order a delivery  <img style={{width:"20px",marginLeft:"120px"}}src={delivery}/></a>
        </div>
    );
};
