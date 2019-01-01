import { Component } from '@angular/core';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { GitHubService } from './github.service';

@Component({
  selector: 'GitHub',
  styles: [`
    .img {
      position: relative;
      float; left;
      width: 100px;
      height: 100px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  `],
  template: `
    <input class="form-control" type="search" [formControl]="searchControl">
    <h3>User Results</h3>

    <div *ngIf="isLoading">
      <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>  

    <div *ngFor="let user of users" class="media">
      <div class="media-left">
        <a href="{{ user.html_url }}">
          <img class="media-object img" src="{{ user.avatar_url }}" alt="...">
        </a>
      </div>

      <div class="media-body">
        <h4 class="media-heading">{{ user.login }}</h4>
        Score: {{ user.score }}
      </div>
    </div>  
  `,
  providers: [GitHubService]
})
export class GitHubComponent {
  searchControl = new FormControl();
  isLoading = true;
  users = [];

  constructor(private _githubService: GitHubService) {
  }

  ngOnInit()
  {
    this.searchControl.valueChanges
      .pipe(filter(text => text.length >= 3),
            debounceTime(400),
            distinctUntilChanged())
      .subscribe(value => {
        this.isLoading = true;
        this._githubService.getGitHubData(value)
          .subscribe(data => {
            this.isLoading = false;
            this.users = data.items;
          });
      });
  }
}
