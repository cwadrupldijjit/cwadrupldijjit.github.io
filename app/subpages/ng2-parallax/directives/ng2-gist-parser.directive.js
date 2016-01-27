System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GistParser;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GistParser = (function () {
                function GistParser(elem) {
                    this.hostElement = elem.nativeElement;
                }
                GistParser.prototype.ngOnInit = function () {
                    this.getGist();
                    if (this.gistElement)
                        this.postToDocument(this.gistElement.innerHTML);
                    else
                        console.warn('gistElement isn\'t defined; make sure the element where your gist is created has the same id as you\'ve passed in');
                };
                GistParser.prototype.getGist = function () {
                    this.gistElement = document.getElementById(this.gistId);
                };
                // replaceCriteria(str: string, regEx: RegExp, replaceValue: string) {
                // 	return str.replace(regEx, replaceValue);
                // }
                GistParser.prototype.postToDocument = function (result) {
                    this.hostElement.innerHTML = result;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], GistParser.prototype, "gistUrl");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], GistParser.prototype, "gistId");
                GistParser = __decorate([
                    core_1.Directive({
                        selector: '[gist]'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], GistParser);
                return GistParser;
                var _a;
            })();
            exports_1("GistParser", GistParser);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9kaXJlY3RpdmVzL25nMi1naXN0LXBhcnNlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiR2lzdFBhcnNlciIsIkdpc3RQYXJzZXIuY29uc3RydWN0b3IiLCJHaXN0UGFyc2VyLm5nT25Jbml0IiwiR2lzdFBhcnNlci5nZXRHaXN0IiwiR2lzdFBhcnNlci5wb3N0VG9Eb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkErQkNBLG9CQUFZQSxJQUFnQkE7b0JBQzNCQyxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDdkNBLENBQUNBO2dCQXRCREQsNkJBQVFBLEdBQVJBO29CQUNDRSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtvQkFDZkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7d0JBQ3BCQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDakRBLElBQUlBO3dCQUNIQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxtSEFBbUhBLENBQUNBLENBQUNBO2dCQUNwSUEsQ0FBQ0E7Z0JBRURGLDRCQUFPQSxHQUFQQTtvQkFDQ0csSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pEQSxDQUFDQTtnQkFFREgsc0VBQXNFQTtnQkFDdEVBLDRDQUE0Q0E7Z0JBQzVDQSxJQUFJQTtnQkFFSkEsbUNBQWNBLEdBQWRBLFVBQWVBLE1BQWFBO29CQUMzQkksSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsR0FBR0EsTUFBTUEsQ0FBQ0E7Z0JBQ3JDQSxDQUFDQTtnQkF6QkRKO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLCtCQUFPQSxFQUFTQTtnQkFDekJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLDhCQUFNQSxFQUFTQTtnQkFMekJBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLFFBQVFBO3FCQUNsQkEsQ0FBQ0E7OytCQWdDREE7Z0JBQURBLGlCQUFDQTs7WUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7WUFFUSxtQ0FBVSIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvZGlyZWN0aXZlcy9uZzItZ2lzdC1wYXJzZXIuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLFxyXG5cdFx0IEluamVjdCxcclxuXHRcdCBJbnB1dCxcclxuXHRcdCBPbkluaXQsXHJcblx0XHQgRWxlbWVudFJlZiB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbZ2lzdF0nXHJcbn0pXHJcbmNsYXNzIEdpc3RQYXJzZXIgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGdpc3RVcmw6IHN0cmluZztcclxuXHRASW5wdXQoKSBnaXN0SWQ6IHN0cmluZztcclxuXHRcclxuXHRnaXN0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0aG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5nZXRHaXN0KCk7XHJcblx0XHRpZiAodGhpcy5naXN0RWxlbWVudClcclxuXHRcdFx0dGhpcy5wb3N0VG9Eb2N1bWVudCh0aGlzLmdpc3RFbGVtZW50LmlubmVySFRNTCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUud2FybignZ2lzdEVsZW1lbnQgaXNuXFwndCBkZWZpbmVkOyBtYWtlIHN1cmUgdGhlIGVsZW1lbnQgd2hlcmUgeW91ciBnaXN0IGlzIGNyZWF0ZWQgaGFzIHRoZSBzYW1lIGlkIGFzIHlvdVxcJ3ZlIHBhc3NlZCBpbicpO1xyXG5cdH1cclxuXHRcclxuXHRnZXRHaXN0KCkge1xyXG5cdFx0dGhpcy5naXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2lzdElkKTtcclxuXHR9XHJcblx0XHJcblx0Ly8gcmVwbGFjZUNyaXRlcmlhKHN0cjogc3RyaW5nLCByZWdFeDogUmVnRXhwLCByZXBsYWNlVmFsdWU6IHN0cmluZykge1xyXG5cdC8vIFx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlZ0V4LCByZXBsYWNlVmFsdWUpO1xyXG5cdC8vIH1cclxuXHRcclxuXHRwb3N0VG9Eb2N1bWVudChyZXN1bHQ6c3RyaW5nKSB7XHJcblx0XHR0aGlzLmhvc3RFbGVtZW50LmlubmVySFRNTCA9IHJlc3VsdDtcclxuXHR9XHJcblx0XHJcblx0Y29uc3RydWN0b3IoZWxlbTogRWxlbWVudFJlZikge1xyXG5cdFx0dGhpcy5ob3N0RWxlbWVudCA9IGVsZW0ubmF0aXZlRWxlbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEdpc3RQYXJzZXIgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
