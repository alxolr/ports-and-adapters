export interface IMovie {
  name: string;
  imdbRating: number;
  budget: number;
}

export interface IMovieService {
  getRatingBiggerThan(rating: number): Promise<IMovie[]>;
}

export interface IMovieRepo {
  list(): Promise<Array<IMovie>>;
}
