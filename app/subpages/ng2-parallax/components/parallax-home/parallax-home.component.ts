import { Component,
		 View } from 'angular2/core';
import { GistParser } from '../../directives/ng2-gist-parser.directive'

@Component({
	selector: 'ng2-parallax'
})
@View({
	templateUrl: 'app/subpages/ng2-parallax/components/ng2-parallax-main/ng2-parallax-main.template.html',
	styleUrls: [
		'app/styles/normalize.css',
		'app/subpages/ng2-parallax/styles/github-light.css',
		'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
		'app/subpages/ng2-parallax/components/parallax-home/parallax-home.styles.css'
	],
	directives: [
		GistParser
	]
})

class ParallaxHome {
	
}

export { ParallaxHome };