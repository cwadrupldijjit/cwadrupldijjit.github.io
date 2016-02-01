/// <reference path="../../../../../typings/google.analytics/ga" />

import { Component,
		 View,
         AfterContentInit } from 'angular2/core';
import { Parallax,
		 ParallaxConfig } from '../../directives/ng2-parallax.directive';
import { GistParser } from '../../directives/ng2-gist-parser.directive';

@Component({
	selector: 'ts-examples'
})
@View({
	templateUrl: 'app/subpages/ng2-parallax/components/ts-examples/ts-examples.template.html',
	styleUrls: [
		'app/styles/normalize.css',
		'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
		'app/subpages/ng2-parallax/styles/github-light.css',
		'app/subpages/ng2-parallax/components/styles/beginning-stylesheet.css',
		'app/subpages/ng2-parallax/components/ts-examples/ts-examples.style.css'
	],
	directives: [
		Parallax,
		GistParser
	]
})

class tsExamples implements AfterContentInit {
    style: any;
    
    ngAfterContentInit() {
		if (!window.location.host.match(/localhost/i)) {
			ga('send', 'pageview');
		}
    }
    
	parallaxFn(color: string, maxVal: number = 250, minVal: number = 0, otherValue: number = 0) {
		let defaultVals: string[] = ['r', 'g', 'b', 'all'],
			result = 'rgb(';
		if (defaultVals.indexOf(color.toLowerCase()) !== -1) {
			if (minVal < 0)
				minVal = 0;
			if (maxVal > 250)
				maxVal = 250;
			
			let newValue = Math.round(Math.random() * maxVal);
			
			if (newValue < minVal)
				newValue = minVal;
			else if (newValue > maxVal)
				newValue = maxVal;
			
			if (color.toLowerCase() == 'r') {
				result += newValue + ',' + otherValue + ',' + otherValue + ')';
			} else if (color.toLowerCase() == 'g') {
				result += otherValue + ',' + newValue + ',' + otherValue + ')';
			} else if (color.toLowerCase() == 'b') {
				result += otherValue + ',' + otherValue + ',' + newValue + ')';
			} else {
				result += newValue + ',' + newValue + ',' + newValue + ')'
			}
			
			this.style.backgroundColor = result;
			
			if (newValue < 70)
				this.style.color = 'white';
			else this.style.color = 'black';
		} else {
			try {
				throw ('The color entered as a cb argument is incorrect it must be a value found in defaultVals')
			} catch(e) {
				console.warn(e);
			}
		}
	};
	
	constructor() {};
};

export { tsExamples };