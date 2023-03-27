import logo from './images/Logo.jpg';
export function Logo(){
    const styles={
        margin:"20px",
        display:'inline-block',
        // paddingLeft:"160px",
        width:"170px"
    }
    return (
    <div style={{textAlign:"right"}}>
        <img style={styles} src={logo}/>
    </div>
    );
};