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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJ0c0V4YW1wbGVzIiwidHNFeGFtcGxlcy5jb25zdHJ1Y3RvciIsInRzRXhhbXBsZXMucGFyYWxsYXhGbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkEyRENBO2dCQUFlQyxDQUFDQTtnQkF4Q2hCRCwrQkFBVUEsR0FBVkEsVUFBV0EsS0FBYUEsRUFBRUEsTUFBb0JBLEVBQUVBLE1BQWtCQSxFQUFFQSxVQUFzQkE7b0JBQWhFRSxzQkFBb0JBLEdBQXBCQSxZQUFvQkE7b0JBQUVBLHNCQUFrQkEsR0FBbEJBLFVBQWtCQTtvQkFBRUEsMEJBQXNCQSxHQUF0QkEsY0FBc0JBO29CQUN6RkEsSUFBSUEsV0FBV0EsR0FBYUEsQ0FBQ0EsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsR0FBR0EsRUFBRUEsS0FBS0EsQ0FBQ0EsRUFDakRBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO29CQUNqQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3JEQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTs0QkFDZEEsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBOzRCQUNoQkEsTUFBTUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBRWRBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLEdBQUdBLE1BQU1BLENBQUNBLENBQUNBO3dCQUVsREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7NEJBQ3JCQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTt3QkFDbkJBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBOzRCQUMxQkEsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBRW5CQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDaENBLE1BQU1BLElBQUlBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUNoRUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUN2Q0EsTUFBTUEsSUFBSUEsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsVUFBVUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQ2hFQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3ZDQSxNQUFNQSxJQUFJQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDaEVBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTs0QkFDUEEsTUFBTUEsSUFBSUEsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsUUFBUUEsR0FBR0EsR0FBR0EsQ0FBQUE7d0JBQzNEQSxDQUFDQTt3QkFFREEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsZUFBZUEsR0FBR0EsTUFBTUEsQ0FBQ0E7d0JBRXBDQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxFQUFFQSxDQUFDQTs0QkFDakJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBO3dCQUM1QkEsSUFBSUE7NEJBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEdBQUdBLE9BQU9BLENBQUNBO29CQUNqQ0EsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNQQSxJQUFJQSxDQUFDQTs0QkFDSkEsTUFBTUEsQ0FBQ0EseUZBQXlGQSxDQUFDQSxDQUFBQTt3QkFDbEdBLENBQUVBO3dCQUFBQSxLQUFLQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDWEEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pCQSxDQUFDQTtvQkFDRkEsQ0FBQ0E7Z0JBQ0ZBLENBQUNBOzs7Z0JBekRGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxhQUFhQTtxQkFDdkJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsNEVBQTRFQTt3QkFDekZBLFNBQVNBLEVBQUVBOzRCQUNWQSwwQkFBMEJBOzRCQUMxQkEsMkRBQTJEQTs0QkFDM0RBLG1EQUFtREE7NEJBQ25EQSxzRUFBc0VBOzRCQUN0RUEsd0VBQXdFQTt5QkFDeEVBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsaUNBQVFBOzRCQUNSQSxzQ0FBVUE7eUJBQ1ZBO3FCQUNEQSxDQUFDQTs7K0JBNENEQTtnQkFBREEsaUJBQUNBO1lBQURBLENBNURBLEFBNERDQSxJQUFBO1lBQUEsQ0FBQztZQUVPLG1DQUFVIiwiZmlsZSI6InN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4LFxyXG5cdFx0IFBhcmFsbGF4Q29uZmlnIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZzItcGFyYWxsYXguZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgR2lzdFBhcnNlciB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbmcyLWdpc3QtcGFyc2VyLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3RzLWV4YW1wbGVzJ1xyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvdHMtZXhhbXBsZXMvdHMtZXhhbXBsZXMudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnYXBwL3N0eWxlcy9ub3JtYWxpemUuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9iZWdpbm5pbmctc3R5bGVzaGVldC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2dpdGh1Yi1saWdodC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvdHMtZXhhbXBsZXMvdHMtZXhhbXBsZXMuc3R5bGUuY3NzJ1xyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0UGFyYWxsYXgsXHJcblx0XHRHaXN0UGFyc2VyXHJcblx0XVxyXG59KVxyXG5cclxuY2xhc3MgdHNFeGFtcGxlcyB7XHJcblx0cGFyYWxsYXhGbihjb2xvcjogc3RyaW5nLCBtYXhWYWw6IG51bWJlciA9IDI1MCwgbWluVmFsOiBudW1iZXIgPSAwLCBvdGhlclZhbHVlOiBudW1iZXIgPSAwKSB7XHJcblx0XHRsZXQgZGVmYXVsdFZhbHM6IHN0cmluZ1tdID0gWydyJywgJ2cnLCAnYicsICdhbGwnXSxcclxuXHRcdFx0cmVzdWx0ID0gJ3JnYignO1xyXG5cdFx0aWYgKGRlZmF1bHRWYWxzLmluZGV4T2YoY29sb3IudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XHJcblx0XHRcdGlmIChtaW5WYWwgPCAwKVxyXG5cdFx0XHRcdG1pblZhbCA9IDA7XHJcblx0XHRcdGlmIChtYXhWYWwgPiAyNTApXHJcblx0XHRcdFx0bWF4VmFsID0gMjUwO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG5ld1ZhbHVlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4VmFsKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChuZXdWYWx1ZSA8IG1pblZhbClcclxuXHRcdFx0XHRuZXdWYWx1ZSA9IG1pblZhbDtcclxuXHRcdFx0ZWxzZSBpZiAobmV3VmFsdWUgPiBtYXhWYWwpXHJcblx0XHRcdFx0bmV3VmFsdWUgPSBtYXhWYWw7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY29sb3IudG9Mb3dlckNhc2UoKSA9PSAncicpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gbmV3VmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcpJztcclxuXHRcdFx0fSBlbHNlIGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09ICdnJykge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBvdGhlclZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJyknO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbG9yLnRvTG93ZXJDYXNlKCkgPT0gJ2InKSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IG90aGVyVmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnKSc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IG5ld1ZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnLCcgKyBuZXdWYWx1ZSArICcpJ1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJlc3VsdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChuZXdWYWx1ZSA8IDcwKVxyXG5cdFx0XHRcdHRoaXMuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG5cdFx0XHRlbHNlIHRoaXMuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR0aHJvdyAoJ1RoZSBjb2xvciBlbnRlcmVkIGFzIGEgY2IgYXJndW1lbnQgaXMgaW5jb3JyZWN0IGl0IG11c3QgYmUgYSB2YWx1ZSBmb3VuZCBpbiBkZWZhdWx0VmFscycpXHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7fTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRzRXhhbXBsZXMgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
