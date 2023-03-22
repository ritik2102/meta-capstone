import {Nav} from './nav';
import {Logo} from './logo';
export function Header(){
    
    return (
        <div style={{display:"grid",gridTemplateColumns:"3fr 10fr" }}>
            <Logo/>
            <Nav/>
        </div>
        
    );
};

// {display:"flex",
//                     flexDirection:"row",
//                     }