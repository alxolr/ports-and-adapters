import { IMovieService } from './movie.interface';

export class MovieSqsHandler {
  constructor(private readonly service: IMovieService) {}

  async handle(message: any) {
    let rating = Number(message.body.bigger);


    let movies =  await this.service.getRatingBiggerThan(rating);

    // do something with them
  }
}
