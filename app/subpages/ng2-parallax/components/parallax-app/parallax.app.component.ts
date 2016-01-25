import { Component,
		 View,
		 OnInit } from 'angular2/core';
import { RouteConfig,
		 ROUTER_DIRECTIVES,
		 ROUTER_PROVIDERS } from 'angular2/router';
import { Parallax,
		 ParallaxConfig } from '../../directives/ng2-parallax.directive';
import { ParallaxHome } from '../parallax-home/parallax-home.component';
import { tsExamples } from '../ts-examples/ts-examples.component';

@Component({
	selector: 'parallax-app',
	providers: [
		// ROUTER_PROVIDERS
	]
})
@View({
	templateUrl: 'app/subpages/ng2-parallax/components/parallax-app/parallax.app.template.html',
	styleUrls: [
		'app/styles/normalize.css',
		'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
		'app/subpages/ng2-parallax/styles/github-light.css',
		'app/subpages/ng2-parallax/styles/parallax.styles.css'
	],
	directives: [
		ROUTER_DIRECTIVES,
		Parallax
	]
})
@RouteConfig([
	{ path: './', 			 component: ParallaxHome, 	as: 'ParallaxHome', 	  useAsDefault: true },
	{ path: './ts-examples', component: tsExamples, 	as: 'TsExamples' }
])

class ParallaxApp implements OnInit {
	ngOnInit() {
		console.log("ParallaxAppComponent init");
	}
}

export { ParallaxApp };