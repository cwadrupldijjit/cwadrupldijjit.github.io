System.register(['angular2/core', 'angular2/router', '../../directives/ng2-parallax.directive', '../parallax-home/parallax-home.component', '../ts-examples/ts-examples.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ng2_parallax_directive_1, parallax_home_component_1, ts_examples_component_1;
    var ParallaxApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_parallax_directive_1_1) {
                ng2_parallax_directive_1 = ng2_parallax_directive_1_1;
            },
            function (parallax_home_component_1_1) {
                parallax_home_component_1 = parallax_home_component_1_1;
            },
            function (ts_examples_component_1_1) {
                ts_examples_component_1 = ts_examples_component_1_1;
            }],
        execute: function() {
            ParallaxApp = (function () {
                function ParallaxApp() {
                    this.isMenuOpen = false;
                }
                ParallaxApp.prototype.toggleMenu = function () {
                    if (this.isMenuOpen)
                        this.isMenuOpen = false;
                    else
                        this.isMenuOpen = true;
                    console.log('menu toggled');
                };
                ParallaxApp.prototype.ngOnInit = function () {
                    console.log("ParallaxAppComponent init");
                };
                ParallaxApp = __decorate([
                    core_1.Component({
                        selector: 'parallax-app'
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/ng2-parallax/components/parallax-app/parallax.app.template.html',
                        styleUrls: [
                            'app/styles/normalize.css',
                            'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
                            'app/subpages/ng2-parallax/styles/github-light.css',
                            'app/subpages/ng2-parallax/styles/parallax.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            ng2_parallax_directive_1.Parallax
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: parallax_home_component_1.ParallaxHome, as: 'ParallaxHome', useAsDefault: true },
                        { path: '/ts-examples', component: ts_examples_component_1.tsExamples, as: 'TsExamples' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ParallaxApp);
                return ParallaxApp;
            })();
            exports_1("ParallaxApp", ParallaxApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBhcmFsbGF4QXBwIiwiUGFyYWxsYXhBcHAuY29uc3RydWN0b3IiLCJQYXJhbGxheEFwcC50b2dnbGVNZW51IiwiUGFyYWxsYXhBcHAubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQW1DSUE7b0JBYkhDLGVBQVVBLEdBQVlBLEtBQUtBLENBQUNBO2dCQWN6QkEsQ0FBQ0E7Z0JBWkpELGdDQUFVQSxHQUFWQTtvQkFDQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7d0JBQ25CQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDekJBLElBQUlBO3dCQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDNUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLENBQUNBLENBQUFBO2dCQUM1QkEsQ0FBQ0E7Z0JBRURGLDhCQUFRQSxHQUFSQTtvQkFDQ0csT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQWpDRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsY0FBY0E7cUJBQ3hCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDhFQUE4RUE7d0JBQzNGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMEJBQTBCQTs0QkFDMUJBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0RBQXNEQTt5QkFDdERBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLGlDQUFRQTt5QkFDUkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQU1BLFNBQVNBLEVBQUVBLHNDQUFZQSxFQUFHQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFFQTt3QkFDbkZBLEVBQUVBLElBQUlBLEVBQUVBLGNBQWNBLEVBQUVBLFNBQVNBLEVBQUVBLGtDQUFVQSxFQUFHQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFFQTtxQkFDbEVBLENBQUNBOztnQ0FrQkRBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0FyQ0EsQUFxQ0NBLElBQUE7WUFFUSxxQ0FBVyIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1hcHAvcGFyYWxsYXguYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyxcclxuXHRcdCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBhcmFsbGF4LFxyXG5cdFx0IFBhcmFsbGF4Q29uZmlnIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZzItcGFyYWxsYXguZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUGFyYWxsYXhIb21lIH0gZnJvbSAnLi4vcGFyYWxsYXgtaG9tZS9wYXJhbGxheC1ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRzRXhhbXBsZXMgfSBmcm9tICcuLi90cy1leGFtcGxlcy90cy1leGFtcGxlcy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdwYXJhbGxheC1hcHAnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1hcHAvcGFyYWxsYXguYXBwLnRlbXBsYXRlLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0J2FwcC9zdHlsZXMvbm9ybWFsaXplLmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvYmVnaW5uaW5nLXN0eWxlc2hlZXQuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9naXRodWItbGlnaHQuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9wYXJhbGxheC5zdHlsZXMuY3NzJ1xyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Uk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRQYXJhbGxheFxyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0IGNvbXBvbmVudDogUGFyYWxsYXhIb21lLCBcdGFzOiAnUGFyYWxsYXhIb21lJyxcdHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG5cdHsgcGF0aDogJy90cy1leGFtcGxlcycsIGNvbXBvbmVudDogdHNFeGFtcGxlcywgXHRhczogJ1RzRXhhbXBsZXMnIH1cclxuXSlcclxuXHJcbmNsYXNzIFBhcmFsbGF4QXBwIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRpc01lbnVPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHJcblx0dG9nZ2xlTWVudSgpIHtcclxuXHRcdGlmICh0aGlzLmlzTWVudU9wZW4pXHJcblx0XHRcdHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlO1xyXG5cdFx0ZWxzZSB0aGlzLmlzTWVudU9wZW4gPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coJ21lbnUgdG9nZ2xlZCcpXHJcblx0fVxyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJQYXJhbGxheEFwcENvbXBvbmVudCBpbml0XCIpO1xyXG5cdH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBhcmFsbGF4QXBwIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
