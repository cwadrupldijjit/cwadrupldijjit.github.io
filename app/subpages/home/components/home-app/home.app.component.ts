import { Component,
		 View,
		 OnInit } from 'angular2/core';
import { RouteConfig,
		 ROUTER_DIRECTIVES,
		 ROUTER_PROVIDERS } from 'angular2/router';
import { HomeMainComponent } from '../home-main/home-main.component';

@Component({
	selector: 'home',
	providers: [
		// ROUTER_PROVIDERS
	]
})
@View({
	templateUrl: 'app/subpages/home/components/home-app/home.app.template.html',
	directives: [
		ROUTER_DIRECTIVES
	],
	styleUrls: [
		'app/subpages/home/styles/main.css'
	]
})
@RouteConfig([
	{ path: './', component: HomeMainComponent, as: 'HomeMain', useAsDefault: true }
])

class HomeAppComponent implements OnInit {
	ngOnInit() {
		console.log("HomeAppComponent init");
	}
}

export { HomeAppComponent };