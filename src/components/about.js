import greenLemon from './images/about-image.png';
export function About(){
    return (
        <div style={{backgroundColor:"rgb(73,94,87)",height:"300px"}}>
            <div style={{marginLeft:"500px"}}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <h4> Little Lemon is a continental </h4>
            </div>
            <img style={{marginLeft:"1000px",marginBottom:"1000px"}}src={greenLemon}/>
            
        </div>
    );
};

