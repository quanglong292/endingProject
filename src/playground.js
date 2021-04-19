import React, {useState} from 'react'

export default function Playground() {
    var dateFormat = require("dateformat");
    let apiDate = "2021-03-31T10:10:00";
    
    let apiDateFormated = dateFormat(apiDate, "dd-mm-yy");
    let now = new Date();
    let nowFormated = dateFormat(now, "dd-mm-yy");

    const [number, setNumber] = useState(0);
    
    const counting = () => {
        setNumber(number + 1)
    }
    if (apiDateFormated === nowFormated) {
        console.log("same");
    } else {
        console.log("not same");
    }
    
    return (
        <div>
            <a onClick={() => {counting()}}><h1>{number}</h1></a>
            <h1>now: {nowFormated}</h1>
            <h1>Api: {apiDateFormated}</h1>
        </div>
    )
}
