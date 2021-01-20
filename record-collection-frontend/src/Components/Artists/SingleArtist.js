import React, {useState, useEffect} from 'react'

const SingleArtist = (props) => {
    const [singleArtist, setSingleArtist] = useState ({});

    const fetchSingleArtist = async () => {
        try{
            const response = await fetch(`http://record-collection-api.herokuapp.com/artists/${props.id}`)
            const data = await response.json();
            setSingleArtist(data);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSingleArtist();
    }, []);

    return(
        <div>
            <h1>hello SingleArtist</h1>
        </div>
    )
}

export default SingleArtist;