import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from 'src/app/common/animations';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/common/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    routerTransition(),
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isHideMainContent = false;

  constructor(
    private route: Router,
    private navigationService: NavigationService
  ) {
    this.route.navigateByUrl('');
   }

  ngOnInit() {
    this.subscription =  this.navigationService.goTo$.subscribe(resp => {
      if (resp === 0 || resp === '0') {
        this.isHideMainContent = false;
        this.route.navigateByUrl('');
        window.scrollTo(0, 0);
      }
    });
  }

  hideMainContent() {
    this.isHideMainContent = true;
  }

  getRouteAnimation(outlet) {
    return this.navigationService.animationValue;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
