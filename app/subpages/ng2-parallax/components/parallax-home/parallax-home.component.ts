import { Component,
		 View } from 'angular2/core';
import { GistParser } from '../../directives/ng2-gist-parser.directive'

@Component({
	selector: 'parallax-home'
})
@View({
	templateUrl: 'app/subpages/ng2-parallax/components/parallax-home/parallax-home.template.html',
	styleUrls: [
		'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
		'app/subpages/ng2-parallax/styles/github-light.css',
		'app/subpages/ng2-parallax/styles/parallax.styles.css',
		'app/subpages/ng2-parallax/components/parallax-home/parallax-home.styles.css'
	],
	directives: [
		GistParser
	]
})

class ParallaxHome {
	
}

export { ParallaxHome };