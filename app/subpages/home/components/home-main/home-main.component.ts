/// <reference path="../../../../../typings/google.analytics/ga" />

import { Component,
		 View,
         AfterContentInit } from 'angular2/core';
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

class HomeMainComponent implements AfterContentInit {
	ngAfterContentInit() {
		if (window.location.host.match(/localhost/i) || window.location.host.match(/192.168/i)) {
			console.log('browsing locally')
		} else {
			ga('send', 'pageview');
		}
    }
}

export { HomeMainComponent };