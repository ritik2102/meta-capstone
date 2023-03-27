import {Nav} from './nav';
import {Logo} from './logo';
export function Header(){
    
    return (
        <div style={{display:"grid",gridTemplateColumns:"3fr 7fr" }}>
            <Logo/>
            <Nav/>
        </div>
        
    );
};

// {display:"flex",
//                     flexDirection:"row",
//                     }