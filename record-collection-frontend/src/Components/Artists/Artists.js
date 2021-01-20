import { useState, useEffect } from 'react'

const Artists = () => {
    const [artists, setArtists] = useState([]);

    const fetchArtists = async () => {
        try {
            const response = await fetch ("http://localhost:3000/artists");
            const data = await response.json();
            setArtists(data);
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchArtists();
    }, [])

    return(
        <div className="Artists">
            <h1>Artists</h1>
        {
            artists.map((artist, index) => {
                return(
                    <div
                        key={index}
                    >
                        {artist.name}
                    </div>
                )
            })
        }
        </div>
    )
}

export default Artists;