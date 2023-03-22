import {Card} from './testimonialCard';
import person1 from './images/person1.jpg';
import person2 from './images/person2.jpg';
import person3 from './images/person3.jpg';
export function Testimonial(){
    const imgStyles={width:"250px",height:"260px",borderRadius:"10px"}
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Testimonials</h1>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                <div style={{marginLeft:"550px",borderRadius:"10px",backgroundColor:"#EEEEEE"}}>
                    <img style={imgStyles} src={person1}/>
                    <Card rating="5 ⭐" name="Minnie" body='"Best continental food in Chicago."'/>
                </div>
                <div style={{marginLeft:"10px",backgroundColor:"#EEEEEE"}}>
                    <img style={imgStyles} src={person2}/>
                    <Card rating="4.5 ⭐" name="Tom" body='"Best seating arrangement for dates and special occassions."'/>
                </div>
                <div style={{marginLeft:"10px",marginRight:"600px",backgroundColor:"#EEEEEE"}}>
                    <img style={imgStyles} src={person3}/>
                    <Card rating="4.5 ⭐" name="Angela" body='"Keeping up the good work for years."'/>
                </div>
            </div>
        </div>
        
    );
};

