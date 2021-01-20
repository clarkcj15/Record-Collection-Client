import { useState, useEffect } from 'react'

const Genres = () => {
    const [genres, setGenres] = useState([]);

    const fetchGenres = async () => {
        try {
            const response = await fetch ("http://localhost:3000/genres");
            const data = await response.json();
            setGenres(data);
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchGenres();
    }, [])

    return(
        <div className="Genres">
            <h1>Genres</h1>
        {
            genres.map((genre, index) => {
                return(
                    <div
                        key={index}
                    >
                        {genre.name}
                    </div>
                )
            })
        }
        </div>
    )
}

export default Genres;