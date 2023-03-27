import greenLemon from './images/about-image.png';
export function About(){
    return (
        <div style={{backgroundColor:"rgb(73,94,87)",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",textAlign:"center"}}>
            <div></div>
            <div style={{}}>
                <h1 style={{color:"#F4CE14",marginBottom:"0px"}}>Little Lemon</h1>
                <h3 style={{color:"white",margin:"0px"}}>Chicago</h3>
                <h3 style={{fontFamily:"serif"}}> Little Lemon is a mediterranean family owned restaurant, which is among the best places you can be in New York for your day to day occassions.We are commited to provide the best service there can be. Hope to see you soon!!! </h3>
            </div>
            <img style={{marginLeft:"200px",marginTop:"30px"}}src={greenLemon}/>
            <div></div>
        </div>
    );
};

