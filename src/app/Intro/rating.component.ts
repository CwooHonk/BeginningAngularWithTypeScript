import { Component, Input } from '@angular/core'

@Component({
    selector: 'rating',
    template: `
        <ng-container *ngFor="let starNumber of stars">
            <span
                class="fa-star"
                [class.far]="rating < starNumber"
                [class.fas]="rating >= starNumber"
                (click)="onClick(starNumber)"
            >
            </span>
        </ng-container>
        {{ numOfReviews }}
    `,
    styles: [`
        .fas {
            color: orange;
        }
    `]
})
export class RatingComponent {
    @Input() rating: number = 0;
    @Input() numOfReviews: number = 0;

    stars: number[] = [1, 2, 3, 4, 5];

    onClick(ratingValue) {
        this.rating = ratingValue;
    }
}