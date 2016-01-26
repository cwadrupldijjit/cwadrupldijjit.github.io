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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJ0c0V4YW1wbGVzIiwidHNFeGFtcGxlcy5jb25zdHJ1Y3RvciIsInRzRXhhbXBsZXMucGFyYWxsYXhGbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBMkRDQTtnQkFBZUMsQ0FBQ0E7Z0JBeENoQkQsK0JBQVVBLEdBQVZBLFVBQVdBLEtBQWFBLEVBQUVBLE1BQW9CQSxFQUFFQSxNQUFrQkEsRUFBRUEsVUFBc0JBO29CQUFoRUUsc0JBQW9CQSxHQUFwQkEsWUFBb0JBO29CQUFFQSxzQkFBa0JBLEdBQWxCQSxVQUFrQkE7b0JBQUVBLDBCQUFzQkEsR0FBdEJBLGNBQXNCQTtvQkFDekZBLElBQUlBLFdBQVdBLEdBQWFBLENBQUNBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEtBQUtBLENBQUNBLEVBQ2pEQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtvQkFDakJBLEVBQUVBLENBQUNBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNyREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2RBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBO3dCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQTs0QkFDaEJBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO3dCQUVkQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxHQUFHQSxNQUFNQSxDQUFDQSxDQUFDQTt3QkFFbERBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBOzRCQUNyQkEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBQ25CQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTs0QkFDMUJBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUVuQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ2hDQSxNQUFNQSxJQUFJQSxRQUFRQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDaEVBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkNBLE1BQU1BLElBQUlBLFVBQVVBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUNoRUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUN2Q0EsTUFBTUEsSUFBSUEsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQ2hFQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ1BBLE1BQU1BLElBQUlBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUFBO3dCQUMzREEsQ0FBQ0E7d0JBRURBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGVBQWVBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUVwQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7NEJBQ2pCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTt3QkFDNUJBLElBQUlBOzRCQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTtvQkFDakNBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDUEEsSUFBSUEsQ0FBQ0E7NEJBQ0pBLE1BQU1BLENBQUNBLHlGQUF5RkEsQ0FBQ0EsQ0FBQUE7d0JBQ2xHQSxDQUFFQTt3QkFBQUEsS0FBS0EsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ1hBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUNqQkEsQ0FBQ0E7b0JBQ0ZBLENBQUNBO2dCQUNGQSxDQUFDQTs7O2dCQXpERkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsYUFBYUE7cUJBQ3ZCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDRFQUE0RUE7d0JBQ3pGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMEJBQTBCQTs0QkFDMUJBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0VBQXNFQTs0QkFDdEVBLHdFQUF3RUE7eUJBQ3hFQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLGlDQUFRQTs0QkFDUkEsc0NBQVVBO3lCQUNWQTtxQkFDREEsQ0FBQ0E7OytCQTRDREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQTVEQSxBQTREQ0EsSUFBQTtZQUFBLENBQUM7WUFFTyxtQ0FBVSIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy90cy1leGFtcGxlcy90cy1leGFtcGxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXHJcblx0XHQgVmlldyB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCxcclxuXHRcdCBQYXJhbGxheENvbmZpZyB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbmcyLXBhcmFsbGF4LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEdpc3RQYXJzZXIgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1naXN0LXBhcnNlci5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICd0cy1leGFtcGxlcydcclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLnRlbXBsYXRlLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0J2FwcC9zdHlsZXMvbm9ybWFsaXplLmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9naXRodWItbGlnaHQuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvc3R5bGVzL2JlZ2lubmluZy1zdHlsZXNoZWV0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLnN0eWxlLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFBhcmFsbGF4LFxyXG5cdFx0R2lzdFBhcnNlclxyXG5cdF1cclxufSlcclxuXHJcbmNsYXNzIHRzRXhhbXBsZXMge1xyXG5cdHBhcmFsbGF4Rm4oY29sb3I6IHN0cmluZywgbWF4VmFsOiBudW1iZXIgPSAyNTAsIG1pblZhbDogbnVtYmVyID0gMCwgb3RoZXJWYWx1ZTogbnVtYmVyID0gMCkge1xyXG5cdFx0bGV0IGRlZmF1bHRWYWxzOiBzdHJpbmdbXSA9IFsncicsICdnJywgJ2InLCAnYWxsJ10sXHJcblx0XHRcdHJlc3VsdCA9ICdyZ2IoJztcclxuXHRcdGlmIChkZWZhdWx0VmFscy5pbmRleE9mKGNvbG9yLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xyXG5cdFx0XHRpZiAobWluVmFsIDwgMClcclxuXHRcdFx0XHRtaW5WYWwgPSAwO1xyXG5cdFx0XHRpZiAobWF4VmFsID4gMjUwKVxyXG5cdFx0XHRcdG1heFZhbCA9IDI1MDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBuZXdWYWx1ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heFZhbCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAobmV3VmFsdWUgPCBtaW5WYWwpXHJcblx0XHRcdFx0bmV3VmFsdWUgPSBtaW5WYWw7XHJcblx0XHRcdGVsc2UgaWYgKG5ld1ZhbHVlID4gbWF4VmFsKVxyXG5cdFx0XHRcdG5ld1ZhbHVlID0gbWF4VmFsO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNvbG9yLnRvTG93ZXJDYXNlKCkgPT0gJ3InKSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IG5ld1ZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcsJyArIG90aGVyVmFsdWUgKyAnKSc7XHJcblx0XHRcdH0gZWxzZSBpZiAoY29sb3IudG9Mb3dlckNhc2UoKSA9PSAnZycpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gb3RoZXJWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcpJztcclxuXHRcdFx0fSBlbHNlIGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09ICdiJykge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBvdGhlclZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJyknO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBuZXdWYWx1ZSArICcsJyArIG5ld1ZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnKSdcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByZXN1bHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAobmV3VmFsdWUgPCA3MClcclxuXHRcdFx0XHR0aGlzLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuXHRcdFx0ZWxzZSB0aGlzLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dGhyb3cgKCdUaGUgY29sb3IgZW50ZXJlZCBhcyBhIGNiIGFyZ3VtZW50IGlzIGluY29ycmVjdCBpdCBtdXN0IGJlIGEgdmFsdWUgZm91bmQgaW4gZGVmYXVsdFZhbHMnKVxyXG5cdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge307XHJcbn07XHJcblxyXG5leHBvcnQgeyB0c0V4YW1wbGVzIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
