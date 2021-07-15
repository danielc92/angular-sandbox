import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodosService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('TodosService');
  }

  /** GET heroes from the server */
  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.baseUrl + '/todos')
      .pipe(retry(2), catchError(this.handleError('getTodos', [])));
  }
}
