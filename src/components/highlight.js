import firstImg from "./images/greek salad.jpg";
import secondImg from "./images/bruchetta.jpg";
import thirdImg from "./images/lemon dessert.jpg";
// import Component from './cardHighlight'
import {Card} from './cardComponent';
export function Highlight(){
    const imgStyle={width:"350px",height:"250px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"};
    const contentStyle={borderTopLeftRadius:"10px",borderTopRightRadius:"10px",backgroundColor:"#EEEEEE",width:"350px",position:"relative",margin:"0 auto"};
    return(
        <div>
            <div style={{display:"grid",gridTemplateColumns:"7.5fr 2.5fr",alignItems:"center"}}>
                <h1 style={{textAlign:"center",fontSize:"40px"}}>This weeks specials!</h1>
                <button style={{width:"120px",height:"40px",textAlign:"center",backgroundColor:"#F4CE14",borderRadius:"5px",fontWeight:"bold"}}>Order Now</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",marginTop:"20px",marginBottom:"0px"}}>
        
                <div style={contentStyle}>
                    <img style={imgStyle}src={firstImg}/>
                    <Card title="Greek Salad" price="$12.99" body="The famous greek salad of crispy lettuce,peppers,olives and our Chicago style feta cheese, garnishhed with crunchy garlicand rosamary croutons. "></Card>
                </div>
                <div style={contentStyle}> 
                    <img style={imgStyle}src={secondImg}/>
                    <Card title="Bruchetta" price="$5.99" body="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."></Card>
                </div>
                <div style={contentStyle}>
                    <img style={imgStyle}src={thirdImg}/>
                    <Card title="Lemon Desert" price="$7.99" body="This comes straight from grandma recipe book, eveery last ingredient has been sourced and is as authentic as can be imagined."></Card>
                </div>
        
            </div>
        </div>
    
    );
};
