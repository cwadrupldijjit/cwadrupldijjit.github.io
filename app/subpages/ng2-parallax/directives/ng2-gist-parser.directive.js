System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                ], GistParser.prototype, "gistUrl", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], GistParser.prototype, "gistId", void 0);
                GistParser = __decorate([
                    core_1.Directive({
                        selector: '[gist]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], GistParser);
                return GistParser;
            })();
            exports_1("GistParser", GistParser);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9kaXJlY3RpdmVzL25nMi1naXN0LXBhcnNlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiR2lzdFBhcnNlciIsIkdpc3RQYXJzZXIuY29uc3RydWN0b3IiLCJHaXN0UGFyc2VyLm5nT25Jbml0IiwiR2lzdFBhcnNlci5nZXRHaXN0IiwiR2lzdFBhcnNlci5wb3N0VG9Eb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBK0JDQSxvQkFBWUEsSUFBZ0JBO29CQUMzQkMsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkF0QkRELDZCQUFRQSxHQUFSQTtvQkFDQ0UsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7b0JBQ2ZBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO3dCQUNwQkEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2pEQSxJQUFJQTt3QkFDSEEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsbUhBQW1IQSxDQUFDQSxDQUFDQTtnQkFDcElBLENBQUNBO2dCQUVERiw0QkFBT0EsR0FBUEE7b0JBQ0NHLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUN6REEsQ0FBQ0E7Z0JBRURILHNFQUFzRUE7Z0JBQ3RFQSw0Q0FBNENBO2dCQUM1Q0EsSUFBSUE7Z0JBRUpBLG1DQUFjQSxHQUFkQSxVQUFlQSxNQUFhQTtvQkFDM0JJLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLEdBQUdBLE1BQU1BLENBQUNBO2dCQUNyQ0EsQ0FBQ0E7Z0JBekJESjtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwrQkFBT0EsVUFBU0E7Z0JBQ3pCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw4QkFBTUEsVUFBU0E7Z0JBTHpCQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxRQUFRQTtxQkFDbEJBLENBQUNBOzsrQkFnQ0RBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7WUFFUSxtQ0FBVSIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvZGlyZWN0aXZlcy9uZzItZ2lzdC1wYXJzZXIuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLFxuXHRcdCBJbmplY3QsXG5cdFx0IElucHV0LFxuXHRcdCBPbkluaXQsXG5cdFx0IEVsZW1lbnRSZWYgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2dpc3RdJ1xufSlcbmNsYXNzIEdpc3RQYXJzZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBnaXN0VXJsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGdpc3RJZDogc3RyaW5nO1xuXHRcblx0Z2lzdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRcblx0aG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRcblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRHaXN0KCk7XG5cdFx0aWYgKHRoaXMuZ2lzdEVsZW1lbnQpXG5cdFx0XHR0aGlzLnBvc3RUb0RvY3VtZW50KHRoaXMuZ2lzdEVsZW1lbnQuaW5uZXJIVE1MKTtcblx0XHRlbHNlXG5cdFx0XHRjb25zb2xlLndhcm4oJ2dpc3RFbGVtZW50IGlzblxcJ3QgZGVmaW5lZDsgbWFrZSBzdXJlIHRoZSBlbGVtZW50IHdoZXJlIHlvdXIgZ2lzdCBpcyBjcmVhdGVkIGhhcyB0aGUgc2FtZSBpZCBhcyB5b3VcXCd2ZSBwYXNzZWQgaW4nKTtcblx0fVxuXHRcblx0Z2V0R2lzdCgpIHtcblx0XHR0aGlzLmdpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5naXN0SWQpO1xuXHR9XG5cdFxuXHQvLyByZXBsYWNlQ3JpdGVyaWEoc3RyOiBzdHJpbmcsIHJlZ0V4OiBSZWdFeHAsIHJlcGxhY2VWYWx1ZTogc3RyaW5nKSB7XG5cdC8vIFx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlZ0V4LCByZXBsYWNlVmFsdWUpO1xuXHQvLyB9XG5cdFxuXHRwb3N0VG9Eb2N1bWVudChyZXN1bHQ6c3RyaW5nKSB7XG5cdFx0dGhpcy5ob3N0RWxlbWVudC5pbm5lckhUTUwgPSByZXN1bHQ7XG5cdH1cblx0XG5cdGNvbnN0cnVjdG9yKGVsZW06IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZWxlbS5uYXRpdmVFbGVtZW50O1xuXHR9XG59XG5cbmV4cG9ydCB7IEdpc3RQYXJzZXIgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
