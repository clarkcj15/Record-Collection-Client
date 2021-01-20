import React, {useState, useEffect} from 'react'

const SingleArtist = (props) => {
    const [singleArtist, setSingleArtist] = useState ({});

    const fetchSingleArtist = async () => {
        try{
            const response = await fetch(`http://record-collection-api.herokuapp.com/artists/${props.match.params.id}`)
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
            <h1>{singleArtist.name}</h1>
            {/* <ul>
                <li>
                    {singleArtist.albums}
                </li>
            </ul> */}
        </div>
    )
}

export default SingleArtist;