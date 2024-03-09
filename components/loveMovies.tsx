import React from 'react';
import CrazyStupidLove from './moviesEveryoneLoves/crazyStupidLove';
import BackToTheFuture from './moviesEveryoneLoves/backToTheFuture';
import Hangover from './moviesEveryoneLoves/hangover';
import HomeAlone from './moviesEveryoneLoves/homeAlone';


const LoveMovies = ({
  recommend,
  notable,
  popular,
  neeeeeeeeew,
  activeBtn,
}: {
  recommend: { id: number, name: string, description: string, gmap: string}[],
  notable: { id: number, name: string, description: string, gmap: string}[],
  popular: { id: number, name: string, description: string, gmap: string}[],
  neeeeeeeeew: { id: number, name: string, description: string, gmap: string}[],
  activeBtn: string,
}) => {
  return (
    <>
      { activeBtn === 'recommended' && <CrazyStupidLove recommend={recommend} /> }
      { activeBtn === 'notable' && <BackToTheFuture notable={notable} /> }
      { activeBtn === 'popular' && <Hangover popular={popular} /> }
      { activeBtn === 'new' && <HomeAlone neeeeeeeeew={neeeeeeeeew} /> }
    </>
  )
}

export default LoveMovies;
