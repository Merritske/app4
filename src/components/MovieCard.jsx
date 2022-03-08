
export default function MovieCard({movie}) {
   

    return (


        <div className='movie'>
            <div>
                <p>{movie.id}</p>
            </div>

            <div>
                <img src={movie.url !== 'N/A' ? movie.url : "https://via.placeholder.com/400"} alt={movie.title} />
            </div>
            <div>
              
                <h3>{movie.title}</h3>
            </div>
        </div>

    )

}


