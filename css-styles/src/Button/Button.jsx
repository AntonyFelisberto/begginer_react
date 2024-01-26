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
    return (

        <>
            <button style={stylesInline} >Click Me INLINE</button>   
            <button className={styles.button} >Click Me MODULE</button>       
            <button className="button">Click Me EXTERNAL</button>   
        </> 
    )
}

export default Button