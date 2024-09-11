import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  enable$: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.enable$ = this.loaderService.spinner$
    .pipe(
      map((value: number) => !!value)
    )
  }
}
