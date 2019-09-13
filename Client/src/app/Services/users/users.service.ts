import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService:HttpService) { }
  login(data, url) {
    var loginData = {
      url: url,
      data: data
    }
    return this.httpService.post(loginData);
  }

  allMovieShows(url){
    var movieData={
      url:url
    }
    return this.httpService.get(movieData);
  }
}
