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
                    ga('send', 'pageview');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJ0c0V4YW1wbGVzIiwidHNFeGFtcGxlcy5jb25zdHJ1Y3RvciIsInRzRXhhbXBsZXMubmdBZnRlckNvbnRlbnRJbml0IiwidHNFeGFtcGxlcy5wYXJhbGxheEZuIl0sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTbkU7Z0JBaUVDQTtnQkFBZUMsQ0FBQ0E7Z0JBNUNiRCx1Q0FBa0JBLEdBQWxCQTtvQkFDSUUsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFFSkYsK0JBQVVBLEdBQVZBLFVBQVdBLEtBQWFBLEVBQUVBLE1BQW9CQSxFQUFFQSxNQUFrQkEsRUFBRUEsVUFBc0JBO29CQUFoRUcsc0JBQW9CQSxHQUFwQkEsWUFBb0JBO29CQUFFQSxzQkFBa0JBLEdBQWxCQSxVQUFrQkE7b0JBQUVBLDBCQUFzQkEsR0FBdEJBLGNBQXNCQTtvQkFDekZBLElBQUlBLFdBQVdBLEdBQWFBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLEVBQ2pEQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtvQkFDakJBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNyREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2RBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO3dCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQTs0QkFDaEJBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO3dCQUVkQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxNQUFNQSxDQUFDQSxDQUFDQTt3QkFFbERBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBOzRCQUNyQkEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBQ25CQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTs0QkFDMUJBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUVuQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2hDQSxNQUFNQSxJQUFJQSxRQUFRQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDaEVBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkNBLE1BQU1BLElBQUlBLFVBQVVBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUNoRUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUN2Q0EsTUFBTUEsSUFBSUEsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQ2hFQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ1BBLE1BQU1BLElBQUlBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUFBO3dCQUMzREEsQ0FBQ0E7d0JBRURBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGVBQWVBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUVwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7NEJBQ2pCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTt3QkFDNUJBLElBQUlBOzRCQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTtvQkFDakNBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDUEEsSUFBSUEsQ0FBQ0E7NEJBQ0pBLE1BQU1BLENBQUNBLHlGQUF5RkEsQ0FBQ0EsQ0FBQUE7d0JBQ2xHQSxDQUFFQTt3QkFBQUEsS0FBS0EsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1hBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQkEsQ0FBQ0E7b0JBQ0ZBLENBQUNBO2dCQUNGQSxDQUFDQTs7O2dCQS9ERkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsYUFBYUE7cUJBQ3ZCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDRFQUE0RUE7d0JBQ3pGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMEJBQTBCQTs0QkFDMUJBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0VBQXNFQTs0QkFDdEVBLHdFQUF3RUE7eUJBQ3hFQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLGlDQUFRQTs0QkFDUkEsc0NBQVVBO3lCQUNWQTtxQkFDREEsQ0FBQ0E7OytCQWtEREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQWxFQSxBQWtFQ0EsSUFBQTtZQUFBLENBQUM7WUFFTyxtQ0FBVSIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy90cy1leGFtcGxlcy90cy1leGFtcGxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9nb29nbGUuYW5hbHl0aWNzL2dhXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LFxuXHRcdCBWaWV3LFxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYWxsYXgsXG5cdFx0IFBhcmFsbGF4Q29uZmlnIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZzItcGFyYWxsYXguZGlyZWN0aXZlJztcbmltcG9ydCB7IEdpc3RQYXJzZXIgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1naXN0LXBhcnNlci5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd0cy1leGFtcGxlcydcbn0pXG5AVmlldyh7XG5cdHRlbXBsYXRlVXJsOiAnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLnRlbXBsYXRlLmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnYXBwL3N0eWxlcy9ub3JtYWxpemUuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvZ2l0aHViLWxpZ2h0LmNzcycsXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLnN0eWxlLmNzcydcblx0XSxcblx0ZGlyZWN0aXZlczogW1xuXHRcdFBhcmFsbGF4LFxuXHRcdEdpc3RQYXJzZXJcblx0XVxufSlcblxuY2xhc3MgdHNFeGFtcGxlcyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIHN0eWxlOiBhbnk7XG4gICAgXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICBnYSgnc2VuZCcsICdwYWdldmlldycpO1xuICAgIH1cbiAgICBcblx0cGFyYWxsYXhGbihjb2xvcjogc3RyaW5nLCBtYXhWYWw6IG51bWJlciA9IDI1MCwgbWluVmFsOiBudW1iZXIgPSAwLCBvdGhlclZhbHVlOiBudW1iZXIgPSAwKSB7XG5cdFx0bGV0IGRlZmF1bHRWYWxzOiBzdHJpbmdbXSA9IFsncicsICdnJywgJ2InLCAnYWxsJ10sXG5cdFx0XHRyZXN1bHQgPSAncmdiKCc7XG5cdFx0aWYgKGRlZmF1bHRWYWxzLmluZGV4T2YoY29sb3IudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG5cdFx0XHRpZiAobWluVmFsIDwgMClcblx0XHRcdFx0bWluVmFsID0gMDtcblx0XHRcdGlmIChtYXhWYWwgPiAyNTApXG5cdFx0XHRcdG1heFZhbCA9IDI1MDtcblx0XHRcdFxuXHRcdFx0bGV0IG5ld1ZhbHVlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4VmFsKTtcblx0XHRcdFxuXHRcdFx0aWYgKG5ld1ZhbHVlIDwgbWluVmFsKVxuXHRcdFx0XHRuZXdWYWx1ZSA9IG1pblZhbDtcblx0XHRcdGVsc2UgaWYgKG5ld1ZhbHVlID4gbWF4VmFsKVxuXHRcdFx0XHRuZXdWYWx1ZSA9IG1heFZhbDtcblx0XHRcdFxuXHRcdFx0aWYgKGNvbG9yLnRvTG93ZXJDYXNlKCkgPT0gJ3InKSB7XG5cdFx0XHRcdHJlc3VsdCArPSBuZXdWYWx1ZSArICcsJyArIG90aGVyVmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJyknO1xuXHRcdFx0fSBlbHNlIGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09ICdnJykge1xuXHRcdFx0XHRyZXN1bHQgKz0gb3RoZXJWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcpJztcblx0XHRcdH0gZWxzZSBpZiAoY29sb3IudG9Mb3dlckNhc2UoKSA9PSAnYicpIHtcblx0XHRcdFx0cmVzdWx0ICs9IG90aGVyVmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnKSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgKz0gbmV3VmFsdWUgKyAnLCcgKyBuZXdWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJyknXG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmVzdWx0O1xuXHRcdFx0XG5cdFx0XHRpZiAobmV3VmFsdWUgPCA3MClcblx0XHRcdFx0dGhpcy5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG5cdFx0XHRlbHNlIHRoaXMuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aHJvdyAoJ1RoZSBjb2xvciBlbnRlcmVkIGFzIGEgY2IgYXJndW1lbnQgaXMgaW5jb3JyZWN0IGl0IG11c3QgYmUgYSB2YWx1ZSBmb3VuZCBpbiBkZWZhdWx0VmFscycpXG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0XG5cdGNvbnN0cnVjdG9yKCkge307XG59O1xuXG5leHBvcnQgeyB0c0V4YW1wbGVzIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
