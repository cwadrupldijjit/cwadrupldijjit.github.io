import { Component,
		 View } from 'angular2/core';
import { Parallax,
		 ParallaxConfig } from '../../directives/ng2-parallax.directive';
import { GistParser } from '../../directives/ng2-gist-parser.directive';

@Component({
	selector: 'ts-examples'
})
@View({
	templateUrl: './app/subpages/ng2-parallax/components/ts-examples/ts-examples.template.html',
	directives: [
		Parallax,
		GistParser
	]
})

class tsExamples {
	
};

export { tsExamples };