import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import { Video } from '../models/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyAjbuOgqP6rr7ObC9DrBpnHcSkWFOtpS5A';

  constructor(private http: HttpClient) { }
  
  getVideos(query:string): Observable<any>{
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    return this.http.get(url).pipe(
      map<any, any>((response:any)=> response.items)
    );
  }
}
