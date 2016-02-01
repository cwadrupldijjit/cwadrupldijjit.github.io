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
                    if (!window.location.host.match(/localhost/i)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJ0c0V4YW1wbGVzIiwidHNFeGFtcGxlcy5jb25zdHJ1Y3RvciIsInRzRXhhbXBsZXMubmdBZnRlckNvbnRlbnRJbml0IiwidHNFeGFtcGxlcy5wYXJhbGxheEZuIl0sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTbkU7Z0JBbUVDQTtnQkFBZUMsQ0FBQ0E7Z0JBOUNiRCx1Q0FBa0JBLEdBQWxCQTtvQkFDRkUsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQy9DQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtvQkFDeEJBLENBQUNBO2dCQUNDQSxDQUFDQTtnQkFFSkYsK0JBQVVBLEdBQVZBLFVBQVdBLEtBQWFBLEVBQUVBLE1BQW9CQSxFQUFFQSxNQUFrQkEsRUFBRUEsVUFBc0JBO29CQUFoRUcsc0JBQW9CQSxHQUFwQkEsWUFBb0JBO29CQUFFQSxzQkFBa0JBLEdBQWxCQSxVQUFrQkE7b0JBQUVBLDBCQUFzQkEsR0FBdEJBLGNBQXNCQTtvQkFDekZBLElBQUlBLFdBQVdBLEdBQWFBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLEVBQ2pEQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtvQkFDakJBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNyREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2RBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO3dCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQTs0QkFDaEJBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO3dCQUVkQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxNQUFNQSxDQUFDQSxDQUFDQTt3QkFFbERBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBOzRCQUNyQkEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBQ25CQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTs0QkFDMUJBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUVuQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2hDQSxNQUFNQSxJQUFJQSxRQUFRQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDaEVBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkNBLE1BQU1BLElBQUlBLFVBQVVBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUNoRUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUN2Q0EsTUFBTUEsSUFBSUEsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQ2hFQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ1BBLE1BQU1BLElBQUlBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUFBO3dCQUMzREEsQ0FBQ0E7d0JBRURBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGVBQWVBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUVwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7NEJBQ2pCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTt3QkFDNUJBLElBQUlBOzRCQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTtvQkFDakNBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDUEEsSUFBSUEsQ0FBQ0E7NEJBQ0pBLE1BQU1BLENBQUNBLHlGQUF5RkEsQ0FBQ0EsQ0FBQUE7d0JBQ2xHQSxDQUFFQTt3QkFBQUEsS0FBS0EsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1hBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQkEsQ0FBQ0E7b0JBQ0ZBLENBQUNBO2dCQUNGQSxDQUFDQTs7O2dCQWpFRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsYUFBYUE7cUJBQ3ZCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDRFQUE0RUE7d0JBQ3pGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMEJBQTBCQTs0QkFDMUJBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0VBQXNFQTs0QkFDdEVBLHdFQUF3RUE7eUJBQ3hFQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLGlDQUFRQTs0QkFDUkEsc0NBQVVBO3lCQUNWQTtxQkFDREEsQ0FBQ0E7OytCQW9EREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQXBFQSxBQW9FQ0EsSUFBQTtZQUFBLENBQUM7WUFFTyxtQ0FBVSIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy90cy1leGFtcGxlcy90cy1leGFtcGxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9nb29nbGUuYW5hbHl0aWNzL2dhXCIgLz5cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4LFxyXG5cdFx0IFBhcmFsbGF4Q29uZmlnIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZzItcGFyYWxsYXguZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgR2lzdFBhcnNlciB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbmcyLWdpc3QtcGFyc2VyLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3RzLWV4YW1wbGVzJ1xyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvdHMtZXhhbXBsZXMvdHMtZXhhbXBsZXMudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnYXBwL3N0eWxlcy9ub3JtYWxpemUuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9iZWdpbm5pbmctc3R5bGVzaGVldC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2dpdGh1Yi1saWdodC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvdHMtZXhhbXBsZXMvdHMtZXhhbXBsZXMuc3R5bGUuY3NzJ1xyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0UGFyYWxsYXgsXHJcblx0XHRHaXN0UGFyc2VyXHJcblx0XVxyXG59KVxyXG5cclxuY2xhc3MgdHNFeGFtcGxlcyBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gICAgc3R5bGU6IGFueTtcclxuICAgIFxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0aWYgKCF3aW5kb3cubG9jYXRpb24uaG9zdC5tYXRjaCgvbG9jYWxob3N0L2kpKSB7XHJcblx0XHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHR9XHJcbiAgICB9XHJcbiAgICBcclxuXHRwYXJhbGxheEZuKGNvbG9yOiBzdHJpbmcsIG1heFZhbDogbnVtYmVyID0gMjUwLCBtaW5WYWw6IG51bWJlciA9IDAsIG90aGVyVmFsdWU6IG51bWJlciA9IDApIHtcclxuXHRcdGxldCBkZWZhdWx0VmFsczogc3RyaW5nW10gPSBbJ3InLCAnZycsICdiJywgJ2FsbCddLFxyXG5cdFx0XHRyZXN1bHQgPSAncmdiKCc7XHJcblx0XHRpZiAoZGVmYXVsdFZhbHMuaW5kZXhPZihjb2xvci50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpIHtcclxuXHRcdFx0aWYgKG1pblZhbCA8IDApXHJcblx0XHRcdFx0bWluVmFsID0gMDtcclxuXHRcdFx0aWYgKG1heFZhbCA+IDI1MClcclxuXHRcdFx0XHRtYXhWYWwgPSAyNTA7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBtYXhWYWwpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKG5ld1ZhbHVlIDwgbWluVmFsKVxyXG5cdFx0XHRcdG5ld1ZhbHVlID0gbWluVmFsO1xyXG5cdFx0XHRlbHNlIGlmIChuZXdWYWx1ZSA+IG1heFZhbClcclxuXHRcdFx0XHRuZXdWYWx1ZSA9IG1heFZhbDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09ICdyJykge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBuZXdWYWx1ZSArICcsJyArIG90aGVyVmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJyknO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbG9yLnRvTG93ZXJDYXNlKCkgPT0gJ2cnKSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IG90aGVyVmFsdWUgKyAnLCcgKyBuZXdWYWx1ZSArICcsJyArIG90aGVyVmFsdWUgKyAnKSc7XHJcblx0XHRcdH0gZWxzZSBpZiAoY29sb3IudG9Mb3dlckNhc2UoKSA9PSAnYicpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gb3RoZXJWYWx1ZSArICcsJyArIG90aGVyVmFsdWUgKyAnLCcgKyBuZXdWYWx1ZSArICcpJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gbmV3VmFsdWUgKyAnLCcgKyBuZXdWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJyknXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmVzdWx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKG5ld1ZhbHVlIDwgNzApXHJcblx0XHRcdFx0dGhpcy5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcblx0XHRcdGVsc2UgdGhpcy5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRocm93ICgnVGhlIGNvbG9yIGVudGVyZWQgYXMgYSBjYiBhcmd1bWVudCBpcyBpbmNvcnJlY3QgaXQgbXVzdCBiZSBhIHZhbHVlIGZvdW5kIGluIGRlZmF1bHRWYWxzJylcclxuXHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHt9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdHNFeGFtcGxlcyB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
