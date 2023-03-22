import logo from './images/Logo.jpg';
export function Logo(){
    const styles={
        margin:"20px",
        display:'inline-block',
        marginLeft:"300px",
        width:"170px"
    }
    return (
    <div>
        <img style={styles} src={logo}/>
    </div>
    );
};