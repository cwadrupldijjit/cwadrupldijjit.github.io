/// <reference path="../../../../../typings/google.analytics/ga" />
System.register(['angular2/core', '../../directives/ng2-gist-parser.directive'], function(exports_1) {
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
    var core_1, ng2_gist_parser_directive_1;
    var ParallaxHome;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_gist_parser_directive_1_1) {
                ng2_gist_parser_directive_1 = ng2_gist_parser_directive_1_1;
            }],
        execute: function() {
            ParallaxHome = (function () {
                function ParallaxHome() {
                }
                ParallaxHome.prototype.ngAfterContentInit = function () {
                    if (window.location.host.match(/localhost/i) || window.location.host.match(/192.168/i)) {
                        console.log('browsing locally');
                    }
                    else {
                        ga('send', 'pageview');
                    }
                };
                ParallaxHome = __decorate([
                    core_1.Component({
                        selector: 'parallax-home'
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/ng2-parallax/components/parallax-home/parallax-home.template.html',
                        styleUrls: [
                            'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
                            'app/subpages/ng2-parallax/styles/github-light.css',
                            'app/subpages/ng2-parallax/styles/parallax.styles.css',
                            'app/subpages/ng2-parallax/components/parallax-home/parallax-home.styles.css'
                        ],
                        directives: [
                            ng2_gist_parser_directive_1.GistParser
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParallaxHome);
                return ParallaxHome;
            })();
            exports_1("ParallaxHome", ParallaxHome);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUGFyYWxsYXhIb21lIiwiUGFyYWxsYXhIb21lLmNvbnN0cnVjdG9yIiwiUGFyYWxsYXhIb21lLm5nQWZ0ZXJDb250ZW50SW5pdCJdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPbkU7Z0JBQUFBO2dCQXdCQUMsQ0FBQ0E7Z0JBUEFELHlDQUFrQkEsR0FBbEJBO29CQUNDRSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ2pDQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO29CQUN4QkEsQ0FBQ0E7Z0JBQ0NBLENBQUNBO2dCQXZCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsZUFBZUE7cUJBQ3pCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLGdGQUFnRkE7d0JBQzdGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMkRBQTJEQTs0QkFDM0RBLG1EQUFtREE7NEJBQ25EQSxzREFBc0RBOzRCQUN0REEsNkVBQTZFQTt5QkFDN0VBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsc0NBQVVBO3lCQUNWQTtxQkFDREEsQ0FBQ0E7O2lDQVVEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBeEJBLEFBd0JDQSxJQUFBO1lBRVEsdUNBQVkiLCJmaWxlIjoic3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtaG9tZS9wYXJhbGxheC1ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi8uLi90eXBpbmdzL2dvb2dsZS5hbmFseXRpY3MvZ2FcIiAvPlxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LFxyXG5cdFx0IFZpZXcsXHJcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgR2lzdFBhcnNlciB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbmcyLWdpc3QtcGFyc2VyLmRpcmVjdGl2ZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncGFyYWxsYXgtaG9tZSdcclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS50ZW1wbGF0ZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9iZWdpbm5pbmctc3R5bGVzaGVldC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2dpdGh1Yi1saWdodC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL3BhcmFsbGF4LnN0eWxlcy5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1ob21lL3BhcmFsbGF4LWhvbWUuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdEdpc3RQYXJzZXJcclxuXHRdXHJcbn0pXHJcblxyXG5jbGFzcyBQYXJhbGxheEhvbWUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhvc3QubWF0Y2goL2xvY2FsaG9zdC9pKSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdC5tYXRjaCgvMTkyLjE2OC9pKSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnYnJvd3NpbmcgbG9jYWxseScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGFyYWxsYXhIb21lIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
