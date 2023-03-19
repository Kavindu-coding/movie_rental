import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
		<div className='container-fluid movie-app'>
                <div className="row">
			{props.movies.map((movie, index) => {
			  return(
				<div className='col image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'width="100" height="auto"></img>
					<div 
                        onClick={()=>props.handleFavouritesClick(movie)} 
                        className='col image-container overlay d-flex align-items-center justify-content-center'>
						<FavouriteComponent />
					</div>
				</div>
			  )})}
			 </div>
            </div>
		</>
	);
};

export default MovieList;
