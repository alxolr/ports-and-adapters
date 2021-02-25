import { IMovie, IMovieRepo } from './movie.interface';

export class MovieRepo implements IMovieRepo {
  async list(): Promise<IMovie[]> {
    const movies: IMovie[] = [
      { budget: 7000, name: 'Pocahontas', imdbRating: 7.0 },
      { budget: 15000, name: 'Titanic', imdbRating: 7.0 },
    ];

    return Promise.resolve(movies);
  }
}
