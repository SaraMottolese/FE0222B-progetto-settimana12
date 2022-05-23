import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/movie';
import { MovieService } from 'src/app/movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

    arrMovie: Movie[]=[]
    film!: any;

    constructor(private srvNet: MovieService) {}

    async ngOnInit() {
      this.film = await this.srvNet.mostra().toPromise();
      this.arrMovie = this.film;
      console.log(this.arrMovie);
    }

}
