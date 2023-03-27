import backgroundImg from './images/new-background.jpg'
export function Form(){
    const divStyle={backgroundImage:`url(${backgroundImg})`,backgroundSize: "cover",marginBottom:"20px",display:"grid",gridTemplateColumns:"1fr"};
    const inputStyle={width:"70%",height:"28px",marginBottom:"15px",backgroundColor:"#EAEAEA",borderRadius:"10px"};
    const labelStyle={fontSize:"20px",fontWeight:"bold",fontFamily:"sans-serif"}
    return (
        <div style={divStyle}>
            <div style={{position:"relative",margin:"10px auto",backgroundColor:"rgb(73,94,87)",borderRadius:"7px",width:"40%",height:"80%"}}>
                <form style={{padding:"30px",textAlign:"center"}}>
                    <label style={labelStyle}>Name</label><br/>
                    <input type="text" style={inputStyle} placeholder="Enter your name(required)" required/><br/>
                    <label style={labelStyle}>Mobile number</label><br/>
                    <input type="text" style={inputStyle} placeholder="Mobile number(required)" required/><br/>
                    <label style={labelStyle}>Email</label><br/>
                    <input type="email" style={inputStyle} placeholder="abcd@gmail.com"/><br/>
                    <label style={labelStyle}>Number of people</label><br/>
                    <input type="number" style={inputStyle} placeholder="Example-2,3,4(required)" required/><br/>
                    <label style={labelStyle}>Occassion (Optional)</label><br/>
                    <input type="text" style={inputStyle} placeholder="Enter the occasssion"/><br/>
                    <label style={labelStyle}>Date and time</label><br/>
                    <input type="datetime-local" style={inputStyle} placeholder="Date and Time(required)" required/><br/>
                    <div style={{marginTop:"20px"}}>
                        <button style={{width:"70%",height:"40px",backgroundColor:"#F4CE14",fontFamily:"sans-serif",fontWeight:"bold",borderRadius:"10px",fontSize:"23px"}}type="submit"><a href="/">Submit</a></button>
                    </div>               
                </form>        
            </div>
        </div>
    );
};
// D8D8D8
// EAEAEA
// we have ussed background size =cover property to resize the image according to the screen size
// ,position:"relative",margin:"0 auto"
// backgroundSize:"contain",
// backgroundRepeat:"no-repeat",