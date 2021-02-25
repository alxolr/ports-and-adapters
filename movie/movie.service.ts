import { IMovieRepo, IMovieService, IMovie } from './movie.interface';

export class MovieService implements IMovieService {
  constructor(private readonly repo: IMovieRepo) {}

  async getRatingBiggerThan(rating: number): Promise<IMovie[]> {
    let movies = await this.repo.list();

    return movies.filter((movie) => movie.imdbRating > rating);
  }
}
