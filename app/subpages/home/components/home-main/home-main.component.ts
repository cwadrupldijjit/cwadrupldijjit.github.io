import { Component,
		 View } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
// import { } from '../'

@Component({
	selector: 'home-main'
})
@View({
	templateUrl : 'app/subpages/home/components/home-main/home-main.template.html',
	styleUrls : [
		'app/styles/normalize.css',
		'app/styles/main.css',
		'app/subpages/home/styles/main.css'
	]
})

class HomeMainComponent {
	
}

export { HomeMainComponent };