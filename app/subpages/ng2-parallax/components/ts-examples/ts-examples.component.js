/// <reference path="../../../../../typings/google.analytics/ga" />
System.register(['angular2/core', '../../directives/ng2-parallax.directive', '../../directives/ng2-gist-parser.directive'], function(exports_1) {
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
    var core_1, ng2_parallax_directive_1, ng2_gist_parser_directive_1;
    var tsExamples;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_parallax_directive_1_1) {
                ng2_parallax_directive_1 = ng2_parallax_directive_1_1;
            },
            function (ng2_gist_parser_directive_1_1) {
                ng2_gist_parser_directive_1 = ng2_gist_parser_directive_1_1;
            }],
        execute: function() {
            tsExamples = (function () {
                function tsExamples() {
                }
                tsExamples.prototype.ngAfterContentInit = function () {
                    if (window.location.host.match(/localhost/i) || window.location.host.match(/192.168/i)) {
                        console.log('browsing locally');
                    }
                    else {
                        ga('send', 'pageview');
                    }
                };
                tsExamples.prototype.parallaxFn = function (color, maxVal, minVal, otherValue) {
                    if (maxVal === void 0) { maxVal = 250; }
                    if (minVal === void 0) { minVal = 0; }
                    if (otherValue === void 0) { otherValue = 0; }
                    var defaultVals = ['r', 'g', 'b', 'all'], result = 'rgb(';
                    if (defaultVals.indexOf(color.toLowerCase()) !== -1) {
                        if (minVal < 0)
                            minVal = 0;
                        if (maxVal > 250)
                            maxVal = 250;
                        var newValue = Math.round(Math.random() * maxVal);
                        if (newValue < minVal)
                            newValue = minVal;
                        else if (newValue > maxVal)
                            newValue = maxVal;
                        if (color.toLowerCase() == 'r') {
                            result += newValue + ',' + otherValue + ',' + otherValue + ')';
                        }
                        else if (color.toLowerCase() == 'g') {
                            result += otherValue + ',' + newValue + ',' + otherValue + ')';
                        }
                        else if (color.toLowerCase() == 'b') {
                            result += otherValue + ',' + otherValue + ',' + newValue + ')';
                        }
                        else {
                            result += newValue + ',' + newValue + ',' + newValue + ')';
                        }
                        this.style.backgroundColor = result;
                        if (newValue < 70)
                            this.style.color = 'white';
                        else
                            this.style.color = 'black';
                    }
                    else {
                        try {
                            throw ('The color entered as a cb argument is incorrect it must be a value found in defaultVals');
                        }
                        catch (e) {
                            console.warn(e);
                        }
                    }
                };
                ;
                ;
                tsExamples = __decorate([
                    core_1.Component({
                        selector: 'ts-examples'
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/ng2-parallax/components/ts-examples/ts-examples.template.html',
                        styleUrls: [
                            'app/styles/normalize.css',
                            'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
                            'app/subpages/ng2-parallax/styles/github-light.css',
                            'app/subpages/ng2-parallax/components/styles/beginning-stylesheet.css',
                            'app/subpages/ng2-parallax/components/ts-examples/ts-examples.style.css'
                        ],
                        directives: [
                            ng2_parallax_directive_1.Parallax,
                            ng2_gist_parser_directive_1.GistParser
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], tsExamples);
                return tsExamples;
            })();
            ;
            exports_1("tsExamples", tsExamples);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJ0c0V4YW1wbGVzIiwidHNFeGFtcGxlcy5jb25zdHJ1Y3RvciIsInRzRXhhbXBsZXMubmdBZnRlckNvbnRlbnRJbml0IiwidHNFeGFtcGxlcy5wYXJhbGxheEZuIl0sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNuRTtnQkFxRUNBO2dCQUFlQyxDQUFDQTtnQkFoRGJELHVDQUFrQkEsR0FBbEJBO29CQUNGRSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ2pDQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO29CQUN4QkEsQ0FBQ0E7Z0JBQ0NBLENBQUNBO2dCQUVKRiwrQkFBVUEsR0FBVkEsVUFBV0EsS0FBYUEsRUFBRUEsTUFBb0JBLEVBQUVBLE1BQWtCQSxFQUFFQSxVQUFzQkE7b0JBQWhFRyxzQkFBb0JBLEdBQXBCQSxZQUFvQkE7b0JBQUVBLHNCQUFrQkEsR0FBbEJBLFVBQWtCQTtvQkFBRUEsMEJBQXNCQSxHQUF0QkEsY0FBc0JBO29CQUN6RkEsSUFBSUEsV0FBV0EsR0FBYUEsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsRUFDakRBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO29CQUNqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTs0QkFDZEEsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBOzRCQUNoQkEsTUFBTUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBRWRBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLENBQUNBO3dCQUVsREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7NEJBQ3JCQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTt3QkFDbkJBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBOzRCQUMxQkEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBRW5CQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDaENBLE1BQU1BLElBQUlBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUNoRUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUN2Q0EsTUFBTUEsSUFBSUEsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsVUFBVUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQ2hFQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3ZDQSxNQUFNQSxJQUFJQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDaEVBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDUEEsTUFBTUEsSUFBSUEsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQUE7d0JBQzNEQSxDQUFDQTt3QkFFREEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsZUFBZUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBRXBDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTs0QkFDakJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBO3dCQUM1QkEsSUFBSUE7NEJBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBO29CQUNqQ0EsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNQQSxJQUFJQSxDQUFDQTs0QkFDSkEsTUFBTUEsQ0FBQ0EseUZBQXlGQSxDQUFDQSxDQUFBQTt3QkFDbEdBLENBQUVBO3dCQUFBQSxLQUFLQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDWEEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pCQSxDQUFDQTtvQkFDRkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBOzs7Z0JBbkVGSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxhQUFhQTtxQkFDdkJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsNEVBQTRFQTt3QkFDekZBLFNBQVNBLEVBQUVBOzRCQUNWQSwwQkFBMEJBOzRCQUMxQkEsMkRBQTJEQTs0QkFDM0RBLG1EQUFtREE7NEJBQ25EQSxzRUFBc0VBOzRCQUN0RUEsd0VBQXdFQTt5QkFDeEVBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsaUNBQVFBOzRCQUNSQSxzQ0FBVUE7eUJBQ1ZBO3FCQUNEQSxDQUFDQTs7K0JBc0REQTtnQkFBREEsaUJBQUNBO1lBQURBLENBdEVBLEFBc0VDQSxJQUFBO1lBQUEsQ0FBQztZQUVPLG1DQUFVIiwiZmlsZSI6InN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi8uLi90eXBpbmdzL2dvb2dsZS5hbmFseXRpY3MvZ2FcIiAvPlxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LFxyXG5cdFx0IFZpZXcsXHJcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUGFyYWxsYXgsXHJcblx0XHQgUGFyYWxsYXhDb25maWcgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBHaXN0UGFyc2VyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZzItZ2lzdC1wYXJzZXIuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAndHMtZXhhbXBsZXMnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy90cy1leGFtcGxlcy90cy1leGFtcGxlcy50ZW1wbGF0ZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCdhcHAvc3R5bGVzL25vcm1hbGl6ZS5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2JlZ2lubmluZy1zdHlsZXNoZWV0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvZ2l0aHViLWxpZ2h0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3N0eWxlcy9iZWdpbm5pbmctc3R5bGVzaGVldC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy90cy1leGFtcGxlcy90cy1leGFtcGxlcy5zdHlsZS5jc3MnXHJcblx0XSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRQYXJhbGxheCxcclxuXHRcdEdpc3RQYXJzZXJcclxuXHRdXHJcbn0pXHJcblxyXG5jbGFzcyB0c0V4YW1wbGVzIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBzdHlsZTogYW55O1xyXG4gICAgXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhvc3QubWF0Y2goL2xvY2FsaG9zdC9pKSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdC5tYXRjaCgvMTkyLjE2OC9pKSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnYnJvd3NpbmcgbG9jYWxseScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdH1cclxuICAgIH1cclxuICAgIFxyXG5cdHBhcmFsbGF4Rm4oY29sb3I6IHN0cmluZywgbWF4VmFsOiBudW1iZXIgPSAyNTAsIG1pblZhbDogbnVtYmVyID0gMCwgb3RoZXJWYWx1ZTogbnVtYmVyID0gMCkge1xyXG5cdFx0bGV0IGRlZmF1bHRWYWxzOiBzdHJpbmdbXSA9IFsncicsICdnJywgJ2InLCAnYWxsJ10sXHJcblx0XHRcdHJlc3VsdCA9ICdyZ2IoJztcclxuXHRcdGlmIChkZWZhdWx0VmFscy5pbmRleE9mKGNvbG9yLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG5cdFx0XHRpZiAobWluVmFsIDwgMClcclxuXHRcdFx0XHRtaW5WYWwgPSAwO1xyXG5cdFx0XHRpZiAobWF4VmFsID4gMjUwKVxyXG5cdFx0XHRcdG1heFZhbCA9IDI1MDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBuZXdWYWx1ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heFZhbCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAobmV3VmFsdWUgPCBtaW5WYWwpXHJcblx0XHRcdFx0bmV3VmFsdWUgPSBtaW5WYWw7XHJcblx0XHRcdGVsc2UgaWYgKG5ld1ZhbHVlID4gbWF4VmFsKVxyXG5cdFx0XHRcdG5ld1ZhbHVlID0gbWF4VmFsO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNvbG9yLnRvTG93ZXJDYXNlKCkgPT0gJ3InKSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IG5ld1ZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcsJyArIG90aGVyVmFsdWUgKyAnKSc7XHJcblx0XHRcdH0gZWxzZSBpZiAoY29sb3IudG9Mb3dlckNhc2UoKSA9PSAnZycpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gb3RoZXJWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcpJztcclxuXHRcdFx0fSBlbHNlIGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09ICdiJykge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBvdGhlclZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJyknO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBuZXdWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnKSdcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByZXN1bHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAobmV3VmFsdWUgPCA3MClcclxuXHRcdFx0XHR0aGlzLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuXHRcdFx0ZWxzZSB0aGlzLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dGhyb3cgKCdUaGUgY29sb3IgZW50ZXJlZCBhcyBhIGNiIGFyZ3VtZW50IGlzIGluY29ycmVjdCBpdCBtdXN0IGJlIGEgdmFsdWUgZm91bmQgaW4gZGVmYXVsdFZhbHMnKVxyXG5cdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge307XHJcbn07XHJcblxyXG5leHBvcnQgeyB0c0V4YW1wbGVzIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
