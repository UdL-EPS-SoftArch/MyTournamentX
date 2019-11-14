import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(
        () => {},
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            console.log('HTTP Error Interceptor: ' + this.extractErrorMessage(error));
            switch (error.status) {
              case 0:
                this.snackBar.open('Unable to connect to server', 'Close');
                break;
              default:
                console.log(error);
                this.snackBar.open(this.extractErrorMessage(error), 'Close');
            }
          }
        })
    );
  }

  private extractErrorMessage(error: HttpErrorResponse): string {
    if (error.error) {
      if (error.error.errors) {
        return error.error.errors.map(e => e.entity + ' ' + e.property + ': ' + e.message).join(', ');
      }
      let cause = error.error;
      while (cause.cause) {
        cause = cause.cause;
      }
      return cause.message;
    } else if (error.message) {
      return error.message;
    } else {
      return error.name;
    }
  }
}
