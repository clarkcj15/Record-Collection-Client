import { useState, useEffect } from 'react'

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    const fetchAlbums = async () => {
        try {
            const response = await fetch ("http://localhost:3000/albums");
            const data = await response.json();
            setAlbums(data);
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchAlbums();
    }, [])
    
    return(
        <div className="Albums">
            <h1>Albums</h1>
        {
            albums.map((album, index) => {
                return(
                    <div
                        key={index}
                    >
                        {album.name}
                    </div>
                )
            })
        }
        </div>
    )
}

export default Albums;