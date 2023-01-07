import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { ErrorsService } from './errors.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private errorsService: ErrorsService) {}

  get getHeaders(): HttpHeaders {
    return new HttpHeaders().append('Content-Type', 'application/json');
  }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http
      .get<T>(url, { headers: this.getHeaders, params })
      .pipe(catchError((error) => this.handleError(error)));
  }

  post<T>(url: string, body: string): Observable<T> {
    return this.http
      .post<T>(url, body, { headers: this.getHeaders })
      .pipe(catchError((error) => this.handleError(error)));
  }

  put<T>(url: string, body: string): Observable<T> {
    return this.http
      .put<T>(url, body, { headers: this.getHeaders })
      .pipe(catchError((error) => this.handleError(error)));
  }

  delete<T>(url: string, params?: HttpParams, body = null): Observable<T> {
    return this.http
      .request<T>('delete', url, { body, headers: this.getHeaders, params })
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const extractError = this.errorsService.extract(error);
    return throwError(extractError);
  }
}
