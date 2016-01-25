import { Component,
		 View } from 'angular2/core';
import { RouteConfig,
		 ROUTER_DIRECTIVES } from 'angular2/router';
import { HomeMainComponent } from '../home-main/home-main.component';

@Component({
	selector: 'home'
})
@View({
	templateUrl: 'app/subpages/home/components/home-app/home.app.template.html',
	directives: [
		ROUTER_DIRECTIVES
	]
})
@RouteConfig([
	{ path: './', component: HomeMainComponent, as: 'HomeMain' }
])

class HomeAppComponent {
	
}

export { HomeAppComponent };