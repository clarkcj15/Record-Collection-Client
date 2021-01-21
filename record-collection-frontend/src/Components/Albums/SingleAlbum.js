import React, {useState, useEffect} from 'react'
import Album from './Albums'

const SingleAlbum = (props) => {
    const [singleAlbum, setSingleAlbum] = useState ({});


    const fetchSingleAlbum = async () => {
        try{
            const response = await fetch(`http://record-collection-api.herokuapp.com/collections/${props.match.params.id}`)
            const data = await response.json();
            setSingleAlbum(data);
        } catch(error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchSingleAlbum();
    }, []);
    console.log(singleAlbum)

    return(
        <div>

            { singleAlbum.name
                ? singleAlbum.name.map((album) => {
                    return (
                        <p>{album.name}</p>
                    )
                })
                : <h1>Loading...</h1>
            }

        </div>
    )
}
// Delete & Edit
export default SingleAlbum;