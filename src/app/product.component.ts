import { Component, Input } from '@angular/core';

@Component({
    selector: 'product',
    template: `
    <div class="media">
        <img class="mr-3" src="{{ data.imageUrl }}" alt="Generic placeholder image">
        <div class="media-body">
            <h5 class="mt-0">{{ data.productName }}</h5>
            {{ data.releasedDate | date:"dd/MMM/yy" }}

            <rating
                [rating]="data.rating"
                [numOfReviews]="data.numOfReviews">
            </rating>

            <div [ngSwitch]="data.rating">
                <div *ngSwitchCase="1">Poor</div>
                <div *ngSwitchCase="2">Fair</div>
                <div *ngSwitchCase="3">Good</div>
                <div *ngSwitchCase="4">Very Good</div>
                <div *ngSwitchCase="5">Excellent</div>
                <div *ngSwitchDefault>Not Rated</div>
            </div>

            <br>
            
            {{ data.description | truncate: 20 }}
        </div>
    </div>
    `,
    styles: [`
        .media {
            margin-bottom: 20px;
        }
    `]
})
export class ProductComponent {
    @Input() data;
}