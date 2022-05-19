import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicApiEntry } from '../../models/public-api-entry.model';
import { PublicApiService } from 'src/app/services/public-api.service';

@Component({
  selector: 'app-api-entry',
  templateUrl: './api-entry.component.html',
  styleUrls: ['./api-entry.component.css']
})
export class ApiEntryComponent {
  publicApiEntryTop: PublicApiEntry;
  publicApiEntryBottom: PublicApiEntry;
  flipState: boolean;

  clickOverride: boolean;

  rotationYStyle: string;
  rotationYDeg: number;

  constructor(private publicApiService: PublicApiService) {
    this.updateTopApi();
    this.updateBottomApi();

    this.flipState = true;

    this.rotationYStyle = 'rotateY(0deg)';
    this.rotationYDeg = 0;
  }

  updateTopApi() {
    this.publicApiService.getRandomPublicApi((result: Array<PublicApiEntry>) => {
      if (result.length > 0) {
        this.publicApiEntryTop = result[0];
      }
    });
  }

  updateBottomApi() {
    this.publicApiService.getRandomPublicApi((result: Array<PublicApiEntry>) => {
      if (result.length > 0) {
        this.publicApiEntryBottom = result[0];
      }
    });
  }

  async flipContainerClick() {
    if (this.clickOverride) {
      this.clickOverride = false;
      return;
    }

    this.rotationYDeg += 180;
    this.rotationYStyle = 'rotateY(' + this.rotationYDeg + 'deg)';

    await this.delay(600);

    if (this.flipState) {
      this.updateTopApi();
    }
    else if (!this.flipState) {
      this.updateBottomApi();
    }

    this.flipState = !this.flipState;
  }

  getHttpsImage(publicApiEntry?: PublicApiEntry) {
    if (!publicApiEntry)
      return '';

    return publicApiEntry.HTTPS ? 'assets/img/lock.png' : 'assets/img/unlock.png';
  }

  goToLink(url?: string) {
    window.open(url, "_blank");
    this.clickOverride = true;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
