'use client'
import React, { useEffect, useState } from 'react'


const Test = () => {
    const [data, setData] = useState<string[]>([]);
    const [movie, setMovie] = useState('The Shawshank Redemption');
    const [loading, setLoading] = useState(false);


    const fetchData = async (movie: string) => {
        console.log(`Fetching data for movie: ${movie}`);
        setLoading(true);
        try {
            const response = await fetch(`https://devsaadia-weemu-fastapi-backend.hf.space/recommend/${movie}`);
            console.log(`Response status: ${response.status}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setData(data.recommended_movies);
            console.log(data.recommended_movies);
            // console.log(typeof data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log('useEffect triggered');
        fetchData(movie);
    }, [movie]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const input = event.target as HTMLFormElement;
        const movieInput = input.elements.namedItem('movie') as HTMLInputElement;
        setMovie(movieInput.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='movie'
                    className='border border-gray-800'
                />
                <button type='submit' className='border border-black'>Submit</button>
            </form>
            {loading ? <div>Loading...</div> : null}
            <div className='flex flex-col justify-center items-start'>
                {data.map((movie, index) => (<div key={index}>{movie}</div>))}
                {/* {data.length ? (
                    <ul>
                        {data.map((movie, index) => (
                            <li key={index}>{movie}</li>
                        ))}
                    </ul>
                ) : (
                    'Loading...'
                )} */}
            </div>
        </>
    )
}

export default Test


































// const Test = () => {
//     const [data, setData] = useState([]);
//     const movie = 'The Shawshank Redemption';


//     // const [data, setData] = useState(null)
//     useEffect(() => {
//         fetch(`http://127.0.0.1:8000/recommend/${movie}`)
//             .then(response => response.json())
//             .then(data => setData(data.recommended_movies))
//             .catch(error => console.error('Error fetching data:', error));
//         console.log(data);
//     }, [])

//     // const fetchData = async () => {
//     //     try {
//     //         const response = await fetch(`http://127.0.0.1:8000/recommend/${movie}`);
//     //         if (!response.ok) {
//     //             throw new Error(`HTTP error! status: ${response.status}`);
//     //         }
//     //         console.log(response);
//     //         const data = await response.json();
//     //         setData(data);
//     //     } catch (error) {
//     //         console.error('Error fetching data:', error);
//     //     }
//     // };
//     // useEffect(() => {
//     //     fetchData();
//     // }, []);

//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//         //fetchData();
//     };
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type='text'
//                     className='border border-gray-800'
//                 />
//                 <button type='submit'
//                     className='border boder-black'>submit</button>
//             </form>
//             <div> {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}</div>
//         </>
//     )
// }

// export default Test