/// <reference path="../../../../../typings/google.analytics/ga" />
System.register(['angular2/core', '../../directives/ng2-gist-parser.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUGFyYWxsYXhIb21lIiwiUGFyYWxsYXhIb21lLmNvbnN0cnVjdG9yIiwiUGFyYWxsYXhIb21lLm5nQWZ0ZXJDb250ZW50SW5pdCJdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT25FO2dCQUFBQTtnQkF3QkFDLENBQUNBO2dCQVBBRCx5Q0FBa0JBLEdBQWxCQTtvQkFDQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3hGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUFBO29CQUNoQ0EsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNQQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtvQkFDeEJBLENBQUNBO2dCQUNDQSxDQUFDQTtnQkF2QkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLGVBQWVBO3FCQUN6QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSxnRkFBZ0ZBO3dCQUM3RkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0RBQXNEQTs0QkFDdERBLDZFQUE2RUE7eUJBQzdFQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLHNDQUFVQTt5QkFDVkE7cUJBQ0RBLENBQUNBOztpQ0FVREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXhCQSxBQXdCQ0EsSUFBQTtZQUVRLHVDQUFZIiwiZmlsZSI6InN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9nb29nbGUuYW5hbHl0aWNzL2dhXCIgLz5cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEdpc3RQYXJzZXIgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1naXN0LXBhcnNlci5kaXJlY3RpdmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3BhcmFsbGF4LWhvbWUnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1ob21lL3BhcmFsbGF4LWhvbWUudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9naXRodWItbGlnaHQuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9wYXJhbGxheC5zdHlsZXMuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtaG9tZS9wYXJhbGxheC1ob21lLnN0eWxlcy5jc3MnXHJcblx0XSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRHaXN0UGFyc2VyXHJcblx0XVxyXG59KVxyXG5cclxuY2xhc3MgUGFyYWxsYXhIb21lIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0Lm1hdGNoKC9sb2NhbGhvc3QvaSkgfHwgd2luZG93LmxvY2F0aW9uLmhvc3QubWF0Y2goLzE5Mi4xNjgvaSkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2Jyb3dzaW5nIGxvY2FsbHknKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGFyYWxsYXhIb21lIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
