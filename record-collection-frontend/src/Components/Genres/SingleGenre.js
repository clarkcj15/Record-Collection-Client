import React, {useState, useEffect} from 'react'


const SingleGenre = (props) => {
    const [singleGenre, setSingleGenre] = useState ({});
    const fetchSingleGenre = async () => {
        try {
            const response = await fetch(`https://record-collection-api.herokuapp.com/genres/${props.id}`)
            const data = await response.json();
            setSingleGenre(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchSingleGenre();
    }, []);

    return(
        <div>
            <h1>hello SingleGenre</h1>
        </div>
    )
}

export default SingleGenre;