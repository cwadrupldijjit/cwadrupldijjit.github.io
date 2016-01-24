import { Component,
		 View } from 'angular2/core';
import { RouteConfig,
		 ROUTER_DIRECTIVES } from 'angular2/router';
import { tsExamples } from '../ts-examples/ts-examples.component';
import { GistParser } from '../../directives/ng2-gist-parser.directive'

@Component({
	selector: 'ng2-parallax'
})
@View({
	templateUrl: 'app/subpages/ng2-parallax/components/ng2-parallax-main/ng2-parallax-main.template.html',
	directives: [
		ROUTER_DIRECTIVES,
		GistParser
	]
})
@RouteConfig([
	{ path: './', 		component: tsExamples, as: 'ng2-home' }
])

class ng2ParallaxMain {
	
}

export { ng2ParallaxMain };