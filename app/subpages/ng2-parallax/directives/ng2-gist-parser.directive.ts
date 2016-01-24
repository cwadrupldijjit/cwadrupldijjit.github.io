import { Directive,
		 Inject,
		 Input,
		 OnInit,
		 ElementRef } from 'angular2/core';

@Directive({
	selector: '[gist]'
})
class GistParser implements OnInit {
	@Input() gistUrl: string;
	@Input() gistId: string;
	
	gistElement: HTMLElement;
	
	hostElement: HTMLElement;
	
	ngOnInit() {
		this.getGist();
		if (this.gistElement)
			this.postToDocument(this.gistElement.innerHTML);
		else
			console.warn('gistElement isn\'t defined; make sure the element where your gist is created has the same id as you\'ve passed in');
	}
	
	getGist() {
		this.gistElement = document.getElementById(this.gistId);
	}
	
	// replaceCriteria(str: string, regEx: RegExp, replaceValue: string) {
	// 	return str.replace(regEx, replaceValue);
	// }
	
	postToDocument(result:string) {
		this.hostElement.innerHTML = result;
	}
	
	constructor(elem: ElementRef) {
		this.hostElement = elem.nativeElement;
	}
}

export { GistParser };