import { Component,
		 View } from 'angular2/core';
import { RouteConfig,
		 ROUTER_DIRECTIVES } from 'angular2/router';
import { ParallaxHome } from '../parallax-home/parallax-home.component';
import { tsExamples } from '../ts-examples/ts-examples.component';

@Component({
	selector: 'ng2-parallax'
})
@View({
	templateUrl: 'app/subpages/ng2-parallax/components/parallax-app/parallax.app.template.html',
	styleUrls: [
		'app/subpages/ng2-parallax/components/parallax-app/parallax.app.styles.css'
	],
	directives: [
		ROUTER_DIRECTIVES
	]
})
@RouteConfig([
	{ path: './', 			 component: ParallaxHome, as: 'ng2-home' },
	{ path: './ts-examples', component: tsExamples, as: 'ts-examples'}
])

class ParallaxApp {
	
}

export { ParallaxApp };