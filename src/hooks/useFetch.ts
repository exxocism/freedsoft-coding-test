import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';

import { Album } from '../types';
import { albumsState } from '../states/atoms';

const useFetch = (url: string): Array<any> => {
  const [albumData, setAlbumData] = useRecoilState<Array<Album>>(albumsState);

  useEffect(() => {
    (async function () {
      let response;

      try {
        response = await axios.get(url);
      } catch (error) {
        console.error(error);
        return;
      }
      setAlbumData(response.data);
    })();
  }, []);

  return [albumData, setAlbumData];
};

export default useFetch;
