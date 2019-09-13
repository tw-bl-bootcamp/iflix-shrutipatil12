import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  post(postData) {
    return this.http.post(environment.baseUrl + postData.url, postData.data);
  }
  get(url) {
    return this.http.get(environment.baseUrl + url.url);
  }

}
