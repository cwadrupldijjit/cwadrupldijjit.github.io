/// <reference path="../../../../../typings/google.analytics/ga" />
System.register(['angular2/core', '../../directives/ng2-parallax.directive', '../../directives/ng2-gist-parser.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJ0c0V4YW1wbGVzIiwidHNFeGFtcGxlcy5jb25zdHJ1Y3RvciIsInRzRXhhbXBsZXMubmdBZnRlckNvbnRlbnRJbml0IiwidHNFeGFtcGxlcy5wYXJhbGxheEZuIl0sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTbkU7Z0JBcUVDQTtnQkFBZUMsQ0FBQ0E7Z0JBaERiRCx1Q0FBa0JBLEdBQWxCQTtvQkFDRkUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3hGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUNqQ0EsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNQQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtvQkFDeEJBLENBQUNBO2dCQUNDQSxDQUFDQTtnQkFFSkYsK0JBQVVBLEdBQVZBLFVBQVdBLEtBQWFBLEVBQUVBLE1BQW9CQSxFQUFFQSxNQUFrQkEsRUFBRUEsVUFBc0JBO29CQUFoRUcsc0JBQW9CQSxHQUFwQkEsWUFBb0JBO29CQUFFQSxzQkFBa0JBLEdBQWxCQSxVQUFrQkE7b0JBQUVBLDBCQUFzQkEsR0FBdEJBLGNBQXNCQTtvQkFDekZBLElBQUlBLFdBQVdBLEdBQWFBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLEVBQ2pEQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtvQkFDakJBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNyREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2RBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO3dCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQTs0QkFDaEJBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO3dCQUVkQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxNQUFNQSxDQUFDQSxDQUFDQTt3QkFFbERBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBOzRCQUNyQkEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBQ25CQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTs0QkFDMUJBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUVuQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2hDQSxNQUFNQSxJQUFJQSxRQUFRQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDaEVBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkNBLE1BQU1BLElBQUlBLFVBQVVBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUNoRUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUN2Q0EsTUFBTUEsSUFBSUEsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQ2hFQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ1BBLE1BQU1BLElBQUlBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUFBO3dCQUMzREEsQ0FBQ0E7d0JBRURBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGVBQWVBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUVwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7NEJBQ2pCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTt3QkFDNUJBLElBQUlBOzRCQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTtvQkFDakNBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDUEEsSUFBSUEsQ0FBQ0E7NEJBQ0pBLE1BQU1BLENBQUNBLHlGQUF5RkEsQ0FBQ0EsQ0FBQUE7d0JBQ2xHQSxDQUFFQTt3QkFBQUEsS0FBS0EsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1hBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQkEsQ0FBQ0E7b0JBQ0ZBLENBQUNBO2dCQUNGQSxDQUFDQTs7O2dCQW5FRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsYUFBYUE7cUJBQ3ZCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDRFQUE0RUE7d0JBQ3pGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMEJBQTBCQTs0QkFDMUJBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0VBQXNFQTs0QkFDdEVBLHdFQUF3RUE7eUJBQ3hFQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLGlDQUFRQTs0QkFDUkEsc0NBQVVBO3lCQUNWQTtxQkFDREEsQ0FBQ0E7OytCQXNEREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQXRFQSxBQXNFQ0EsSUFBQTtZQUFBLENBQUM7WUFFTyxtQ0FBVSIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy90cy1leGFtcGxlcy90cy1leGFtcGxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9nb29nbGUuYW5hbHl0aWNzL2dhXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LFxuXHRcdCBWaWV3LFxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYWxsYXgsXG5cdFx0IFBhcmFsbGF4Q29uZmlnIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZzItcGFyYWxsYXguZGlyZWN0aXZlJztcbmltcG9ydCB7IEdpc3RQYXJzZXIgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1naXN0LXBhcnNlci5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd0cy1leGFtcGxlcydcbn0pXG5AVmlldyh7XG5cdHRlbXBsYXRlVXJsOiAnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLnRlbXBsYXRlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnYXBwL3N0eWxlcy9ub3JtYWxpemUuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvZ2l0aHViLWxpZ2h0LmNzcycsXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLnN0eWxlLmNzcydcblx0XSxcblx0ZGlyZWN0aXZlczogW1xuXHRcdFBhcmFsbGF4LFxuXHRcdEdpc3RQYXJzZXJcblx0XVxufSlcblxuY2xhc3MgdHNFeGFtcGxlcyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHN0eWxlOiBhbnk7XG4gICAgXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaG9zdC5tYXRjaCgvbG9jYWxob3N0L2kpIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0Lm1hdGNoKC8xOTIuMTY4L2kpKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYnJvd3NpbmcgbG9jYWxseScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdH1cbiAgICB9XG4gICAgXG5cdHBhcmFsbGF4Rm4oY29sb3I6IHN0cmluZywgbWF4VmFsOiBudW1iZXIgPSAyNTAsIG1pblZhbDogbnVtYmVyID0gMCwgb3RoZXJWYWx1ZTogbnVtYmVyID0gMCkge1xuXHRcdGxldCBkZWZhdWx0VmFsczogc3RyaW5nW10gPSBbJ3InLCAnZycsICdiJywgJ2FsbCddLFxuXHRcdFx0cmVzdWx0ID0gJ3JnYignO1xuXHRcdGlmIChkZWZhdWx0VmFscy5pbmRleE9mKGNvbG9yLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuXHRcdFx0aWYgKG1pblZhbCA8IDApXG5cdFx0XHRcdG1pblZhbCA9IDA7XG5cdFx0XHRpZiAobWF4VmFsID4gMjUwKVxuXHRcdFx0XHRtYXhWYWwgPSAyNTA7XG5cdFx0XHRcblx0XHRcdGxldCBuZXdWYWx1ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heFZhbCk7XG5cdFx0XHRcblx0XHRcdGlmIChuZXdWYWx1ZSA8IG1pblZhbClcblx0XHRcdFx0bmV3VmFsdWUgPSBtaW5WYWw7XG5cdFx0XHRlbHNlIGlmIChuZXdWYWx1ZSA+IG1heFZhbClcblx0XHRcdFx0bmV3VmFsdWUgPSBtYXhWYWw7XG5cdFx0XHRcblx0XHRcdGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09ICdyJykge1xuXHRcdFx0XHRyZXN1bHQgKz0gbmV3VmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcpJztcblx0XHRcdH0gZWxzZSBpZiAoY29sb3IudG9Mb3dlckNhc2UoKSA9PSAnZycpIHtcblx0XHRcdFx0cmVzdWx0ICs9IG90aGVyVmFsdWUgKyAnLCcgKyBuZXdWYWx1ZSArICcsJyArIG90aGVyVmFsdWUgKyAnKSc7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbG9yLnRvTG93ZXJDYXNlKCkgPT0gJ2InKSB7XG5cdFx0XHRcdHJlc3VsdCArPSBvdGhlclZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJyknO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ICs9IG5ld1ZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnLCcgKyBuZXdWYWx1ZSArICcpJ1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJlc3VsdDtcblx0XHRcdFxuXHRcdFx0aWYgKG5ld1ZhbHVlIDwgNzApXG5cdFx0XHRcdHRoaXMuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuXHRcdFx0ZWxzZSB0aGlzLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhyb3cgKCdUaGUgY29sb3IgZW50ZXJlZCBhcyBhIGNiIGFyZ3VtZW50IGlzIGluY29ycmVjdCBpdCBtdXN0IGJlIGEgdmFsdWUgZm91bmQgaW4gZGVmYXVsdFZhbHMnKVxuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihlKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdFxuXHRjb25zdHJ1Y3RvcigpIHt9O1xufTtcblxuZXhwb3J0IHsgdHNFeGFtcGxlcyB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
