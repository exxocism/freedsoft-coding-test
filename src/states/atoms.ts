import { atom } from 'recoil';
import { User, Album } from '../types';

export const currentUserState = atom<User | null>({
  key: 'currentUserState',
  default: null,
});

export const albumsState = atom<Array<Album>>({
  key: 'albumsState',
  default: [],
});
