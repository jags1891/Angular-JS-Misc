import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest'; // factory method to combine the observable.

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //Combining Param and Query Param observable example
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).
    switchMap(combined=>{
      let id=combined[0].get('id');
      let page=combined[1].get('page');
      // this.service.getAll({id:id, page:page})
      return this.service.getAll() // switch to a new observable
    }).
    subscribe(followers => this.followers = followers);
  }
}
