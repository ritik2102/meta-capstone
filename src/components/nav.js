import {Logo} from './logo';
import  basket from './images/Basket.jpg';
export function Nav(){
    const styles={marginTop:"0px",
                  marginLeft:"100px"};
    return (
        <>
            <div style={styles}>
                <a class="nav-links" href="#">Home</a>
                <a class="nav-links" href="#">About</a>
                <a class="nav-links" href="#">Menu</a>
                <a class="nav-links" href="#">Reservations</a>
                <a class="nav-links" href="#">Order online</a>
                <a href="#"><img style={{marginTop:"15px",marginLeft:"50px"}} src={basket}/></a>
            </div>
        </>
    );
};

