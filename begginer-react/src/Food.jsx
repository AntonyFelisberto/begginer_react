function Food(){
    const food = "orange"
    const food2 = "banana"
    return(
        <ul>
            <li>{food}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food