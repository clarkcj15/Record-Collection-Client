import { useRef } from 'react'

const NewRecordForm = (props) => {
    const genreInput = useRef(null);
    const artistInput = useRef(null);
    const albumInput = useRef(null);
    const songsInput = useRef(null);
    const imgInput = useRef(null);

    const createRecord = async (event) => {
        event.preventDefault();
        const genre = genreInput.current.value;
        const artist = artistInput.current.value;
        const album = albumInput.current.value;
        const songs = songsInput.current.value;
        const img = imgInput.current.value;

        const body = JSON.stringify({
            genre, artist, album, songs, img
        });
        
        event.currentTarget.reset();
        try {
            const response = await fetch('http://localhost:3000/collections', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            })
            const data = await response.json();
            props.updateRecords([...props.albums, data])
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit="{createRecord}">
            <input type="text" ref={genreInput} />
            <input type="text" ref={artistInput} />
            <input type="text" ref={albumInput} />
            <input type="text" ref={songsInput} />
            <input type="text" ref={imgInput} />
            <input type="submit" value="Post Record!"/>
        </form>
    )
}

export default NewRecordForm;