import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PublicApiEntry } from '../models/public-api-entry.model';
import { ResultListContainer } from '../models/result-list-container.model';

@Injectable({
  providedIn: 'root',
})
export class PublicApiService {
  baseUrl = 'https://api.publicapis.org/';

  constructor(private httpClient: HttpClient) {}

  getRandomPublicApi(callback: (result: Array<PublicApiEntry>) => void) {
    this.httpClient.get<ResultListContainer>(this.baseUrl + "random").subscribe(
      (result) => {
        callback(result.entries);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
