import delivery from './images/food.png'

export function Card(props){

    const cardStyle={width:"350px",height:"280px"}
    return(
        <div style={cardStyle}>
            <div style={{display:"grid",gridTemplateColumns:"7fr 3fr"}}>
                <h3 style={{paddingLeft:"20px"}}>{props.title}</h3>
                <p style={{color:"#EE9972"}}>{props.price}</p>
            </div>
            <p style={{padding:"20px",width:"300px",height:"110px"}}>{props.body}</p>
            <a href="#"style={{paddingLeft:"20px",textDecoration:"none"}}>Order a delivery  <img style={{width:"20px",marginLeft:"120px"}}src={delivery}/></a>
        </div>
    );
};
