/// <reference path="../../../../../typings/google.analytics/ga" />

import { Component,
		 View,
         AfterContentInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable } from 'rxjs/Rx';
import { ElementCoord } from '../../services/element-coord.service';

@Component({
	selector: 'home-main',
	providers: [
		ElementCoord
	] 
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
			console.log('browsing locally');
		} else {
			ga('send', 'pageview');
		}
		
		this.projectHeadX = this.elemService.getPosition(document.getElementById('project-header')).x;
		
		this.addScrollListener(this.projectHeadX);
    }
	
	private projectHeadX: number;
	
	elemService: ElementCoord;
	
	constructor(elemService: ElementCoord) {
		this.elemService = elemService;
	}
	
	private addScrollListener(xCoord) {
		var sticky_menu = Observable.fromEvent(document.getElementsByTagName('body')[0], 'scroll');
		// console.log(Observable)
		sticky_menu
			.mergeAll(function() {
				console.log('does this work?');
			});
	}
}

export { HomeMainComponent };