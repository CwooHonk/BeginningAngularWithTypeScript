import { Component } from '@angular/core';

import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <products></products>
  <button 
    class="btn btn-primary"
    [class.disabled]="!isValid"
    (click)="onClickMe($event)">Submit</button>

    <bs-jumbotron>
      <div class="heading">
        Hello!
      </div>
      <div class="body">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to feature content or information.
      </div>
      <div class="button">
        Learn more
      </div>
    </bs-jumbotron>
  `,
  providers: [ProductService]
})
export class AppComponent {
  title: string = 'BeginAngular!';
  isValid: boolean = true;

  onClickMe($event){
    console.log("Clicked", $event);
  }
}
