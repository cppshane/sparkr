import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-entry',
  templateUrl: './api-entry.component.html',
  styleUrls: ['./api-entry.component.css']
})
export class ApiEntryComponent {
  httpClient: HttpClient;
  baseUrl: string;

  publicApiEntryTop: PublicApiEntry;
  publicApiEntryBottom: PublicApiEntry;
  flipState: boolean;

  clickOverride: boolean;

  rotationYStyle: string;
  rotationYDeg: number;

  constructor(httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = httpClient;
    this.baseUrl = baseUrl;

    httpClient.get<PublicApiEntry>(baseUrl + 'publicapi/GetRandomPublicApiEntry').subscribe(result => {
      this.publicApiEntryTop = result;
    }, error => console.error(error));

    httpClient.get<PublicApiEntry>(baseUrl + 'publicapi/GetRandomPublicApiEntry').subscribe(result => {
      this.publicApiEntryBottom = result;
    }, error => console.error(error));

    this.flipState = true;

    this.rotationYStyle = 'rotateY(0deg)';
    this.rotationYDeg = 0;
  }

  async flipContainerClick() {
    if (this.clickOverride) {
      this.clickOverride = false;
      return;
    }

    this.rotationYDeg += 180;
    this.rotationYStyle = 'rotateY(' + this.rotationYDeg + 'deg)';

    await delay(600);

    if (this.flipState) {
      this.httpClient.get<PublicApiEntry>(this.baseUrl + 'publicapi/GetRandomPublicApiEntry').subscribe(result => {
        this.publicApiEntryTop = result;
      }, error => console.error(error));
    }
    else if (!this.flipState) {
      this.httpClient.get<PublicApiEntry>(this.baseUrl + 'publicapi/GetRandomPublicApiEntry').subscribe(result => {
        this.publicApiEntryBottom = result;
      }, error => console.error(error));
    }

    this.flipState = !this.flipState;
  }

  getHttpsImage(publicApiEntry) {
    return publicApiEntry.https ? 'assets/img/lock.png' : 'assets/img/unlock.png';
  }

  goToLink(url: string) {
    window.open(url, "_blank");
    this.clickOverride = true;
  }
}

interface PublicApiEntry {
  api: string;
  description: string;
  category: string;
  auth: string;
  cors: string;
  link: string;
  https: boolean;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
