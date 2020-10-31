import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { ActorService } from './actor.service';
import { RentalListService } from './rental-list.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  flops$;
  rentalList = [];
  loggedIn = false;

  constructor(private movieService: MovieService, 
    private rentalListService: RentalListService,
    private actorService: ActorService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
  }

  onLogin() {
    console.log('do the login here')
    // also show the movies and hide the login button but ONLY after the server has acknowledged that you've logged in
  }

}
