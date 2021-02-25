import { NextFunction, Request, Response } from 'express';
import { IMovie, IMovieService } from './movie.interface';

export class MovieController {
    constructor(private readonly service: IMovieService) {}

    public async get(req: Request, res: Response, next: NextFunction) {
      let rating = Number(req.query.bigger);

      return this.service.getRatingBiggerThan(rating);
    }
}
