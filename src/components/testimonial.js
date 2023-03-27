import {Card} from './testimonialCard';
import person1 from './images/person1.jpg';
import person2 from './images/person2.jpg';
import person3 from './images/person3.jpg';
export function Testimonial(){
    const imgStyles={width:"265px",height:"260px",borderRadius:"10px"}
    const contentStyle={backgroundColor:"#EEEEEE",width:"265px",textAlign:"center",position:"relative",margin:"0 auto"};
    return (
        <div style={{marginTop:"40px",marginBottom:"50px",textAlign:"center"}}>
            <h1 style={{textAlign:"center"}}>Testimonials</h1>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                <div style={contentStyle}>
                    <img style={imgStyles} src={person1}/>
                    <Card rating="5 ⭐" name="Minnie" body='"Best continental food in Chicago."'/>
                </div>
                <div style={contentStyle}>
                    <img style={imgStyles} src={person2}/>
                    <Card rating="4.5 ⭐" name="Tom" body='"Best seating arrangement for dates and special occassions."'/>
                </div>
                <div style={contentStyle}>
                    <img style={imgStyles} src={person3}/>
                    <Card rating="4.5 ⭐" name="Angela" body='"Keeping up the good work for years."'/>
                </div>
            </div>
        </div>
        
    );
};

