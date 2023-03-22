
export function Card(props){
    return(
        <div style={{width:"250px",height:"160px"}}> 
            <div>
                <h4>{props.rating}</h4>
                <h3>{props.name}</h3>
            </div>
            <p>{props.body}</p>
        </div>
    );
};