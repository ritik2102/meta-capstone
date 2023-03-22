import image from './images/restauranfood.jpg';
export function Hero(){
    const styles={backgroundColor:"rgb(73,94,87)",height:"350px",display:"grid",gridTemplateColumns:"1fr 1fr"};
    const stylesImage={width:"300px",height:"350px",marginLeft:"260px",marginTop:"40px",borderRadius:"15px"};
    return (
        <div style={styles}>
            <div>
                <h1 style={{marginLeft:"300px",marginBottom:"0px",color:"#F4CE14",fontSize:"40px"}}>Little Lemon</h1>
                <h4 style={{marginLeft:"300px",marginTop:"0px",marginBottom:"15px",color:"white",fontSize:"20px"}}>Chicago</h4>
                <p style={{color:"white",width:"205px",marginTop:"0px",marginLeft:"300px"}}>We are a family owned Meditteranean restaurant, focused on traditional recipes served with amodern twist.</p>
                <button style={{marginLeft:"300px",width:"150px",height:"40px",borderRadius:"10px",fontWeight:"bold",fontSize:"15px",backgroundColor:"#F4CE14"}}>Reserve a Table</button>
            </div>
            <img style={stylesImage} src={image}/>
        </div>
    );
};
