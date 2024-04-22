import './Hero.css';
import { Paper } from '@mui/material';
import { Carousel } from 'bootstrap';

const Hero = ({movies}) => {
  return (
    <div className='movie-carousel-contanier'>
        <Carousel>
            {
                movies.map((movie) => {
                    return(
                        <Paper>
                            <div className='movie-card-container'>
                                <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className='movie-detail'>
                                        <img src={movie.poster} alt='' />
                                    </div>
                                    <div className='movie-title'>
                                        <h4>{movie.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero

