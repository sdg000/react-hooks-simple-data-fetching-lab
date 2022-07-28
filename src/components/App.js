import React, {useState, useEffect} from "react";

function App(){
    //saving image variable to state
    const [image, setImage] = useState("")

    //fetching data from API after DOM renders
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(r){
            return r.json()
        })
        .then(function(data){
            setImage(data.message)
            //console.log(data.message)
        })
        
    }, [])

    // fetch asynchronous wait-message
    if(!image){
        return <p>Loading...</p>
    }

    return (
       <div>
         <img src={image} alt="A Random Dog"/>
       </div>
    )
}

export default App