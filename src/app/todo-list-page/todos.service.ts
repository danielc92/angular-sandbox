import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodosService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.baseUrl + '/todos')
      .pipe(retry(2), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
