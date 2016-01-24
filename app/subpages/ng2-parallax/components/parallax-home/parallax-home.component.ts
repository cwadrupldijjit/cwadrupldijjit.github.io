import { Component,
		 View } from 'angular2/core';
import { GistParser } from '../../directives/ng2-gist-parser.directive'

@Component({
	selector: 'ng2-parallax'
})
@View({
	templateUrl: 'app/subpages/ng2-parallax/components/ng2-parallax-main/ng2-parallax-main.template.html',
	styleUrls: [
		
	],
	directives: [
		GistParser
	]
})

class ParallaxHome {
	
}

export { ParallaxHome };