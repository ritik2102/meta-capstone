import {Header} from './header';
import {Form} from './form'; 
import {About} from './about';
import {Footer} from './footer';

export function BookingPage(){

    return(
        <div style={{display:"grid",gridTemplateRows:"1fr 6fr 2fr 1fr",gridTemplateColumns:"1fr"}}>
            <Header/>
            <Form/>
            <About/>
            <Footer/>
        </div>
    );
};