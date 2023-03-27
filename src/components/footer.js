import footerImg from './images/footer-tag.png';

export function Footer(){
    const anchorstyle={margin:"0px",fontSize:"15px"}
    return (
        <div style={{backgroundColor:"rgb(73,94,87)",display:"grid",gridTemplateColumns:"2fr 0.5fr 0.5fr 2fr"}}> 
            <img style={{paddingLeft:"160px"}}src={footerImg}/>
            <div class="doormat" >
                <a  style={anchorstyle} href="#">Home</a><br/>
                <a  style={anchorstyle} href="#">About</a><br/>
                <a  style={anchorstyle} href="#">menu</a><br/>
                <a  style={anchorstyle} href="#">Reservations</a><br/>
                <a  style={anchorstyle} href="#">Order Online</a><br/>
                <a  style={anchorstyle} href="#">Login</a>
            </div>
            <div class="contact" >
                <a  style={anchorstyle} href="#">Address</a><br/>
                <a  style={anchorstyle} href="#">Phone number</a><br/>
                <a  style={anchorstyle} href="#">Email</a>
            </div>
            <div class="social-media" >
                <a  style={anchorstyle} href="#">Facebook</a><br/>
                <a  style={anchorstyle} href="#">Instagram</a><br/>
                <a  style={anchorstyle} href="#">linkedIn</a>
            </div>
        </div>
    );
};

