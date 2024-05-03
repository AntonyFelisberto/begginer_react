import styles from './Button.module.css'

function Button(){
    const stylesInline = {
        backgroundColor: "hsl(200, 100%, 20%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    const item = 11;

    return (
        <>
            <button style={stylesInline} >Click Me INLINE</button>   
            <button style={{color:'blue',borderTop:"2px soloid red"}} >Click Me INLINE</button>  
            <button className={styles.button} >Click Me MODULE</button>       
            <button className="button">Click Me EXTERNAL</button>   
            <button className={item ? stylesInline : "none"}>Click Me EXTERNAL</button>   
        </> 
    )
}

export default Button