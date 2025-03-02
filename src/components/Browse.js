import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import CardsContainer from './BrowseSection/CardsContainer';
import MainContainer from './BrowseSection/MainContainer';
import Header from './Header'

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <CardsContainer />
    </div>
  )
}

export default Browse