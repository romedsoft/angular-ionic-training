import { Pipe, PipeTransform } from '@angular/core';
import { Observable, isObservable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
type LoaderResponse = {
    loading: boolean
    value?: any
    error?: any
  }
@Pipe({
  name: 'withLoading',
})
export class WithLoadingPipe implements PipeTransform {
  transform(val : any) : Observable<LoaderResponse> {
    return isObservable(val)
      ? val.pipe(
        map((value: any) => ({ loading: false, value })),
        startWith({ loading: true }),
        catchError(error => of({ loading: false, error }))
      )
      : val;
  }
}