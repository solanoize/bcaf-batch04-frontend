import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { IPagination } from '../interfaces/i-pagination';
import { IDoc } from '../interfaces/i-doc';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class DocService {
  constructor(
    private http: HttpClient,
    private baseHttpService: BaseHttpService,
    private authService: AuthenticationService
  ) {}

  get baseHttp() {
    return this.baseHttpService;
  }

  upload(file: any): Observable<IDoc> {
    const headers = {
      Authorization: this.authService.token,
    };

    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<IDoc>(
      `${this.baseHttp.baseURL}/api/docs/`,
      formData,
      {
        headers,
      }
    );
  }
}
