import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  ngOnInit() {
    this.allMovieShows();
  }
  constructor(private userService: UsersService, private snackbar: MatSnackBar) { }
  allMovieShows() {
    this.userService.allMovieShows('movieShows').subscribe(
      (response: any) => {
        console.log(this.movies);
        this.movies = response.data;
        this.snackbar.open("movies shows displayed Successfully", "end now", { duration: 6000 });
      },
      (err: any) => {
        this.snackbar.open("fail to get ", "end now", { duration: 6000 });

      }
    );
  }
}
