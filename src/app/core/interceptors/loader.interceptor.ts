import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';
import { finalize, Observable } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const loaderService: LoaderService = inject(LoaderService);

  const shouldShowLoader = !req.urlWithParams.includes('loader=false');

  if (shouldShowLoader) loaderService.show();

  return next(req)
  .pipe(
    finalize(() => {
      if (shouldShowLoader)
        loaderService.hide();
    })
  );
};
