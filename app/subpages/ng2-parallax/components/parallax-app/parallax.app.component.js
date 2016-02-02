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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBhcmFsbGF4QXBwIiwiUGFyYWxsYXhBcHAuY29uc3RydWN0b3IiLCJQYXJhbGxheEFwcC50b2dnbGVNZW51IiwiUGFyYWxsYXhBcHAubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQW1DSUE7b0JBYkhDLGVBQVVBLEdBQVlBLEtBQUtBLENBQUNBO2dCQWN6QkEsQ0FBQ0E7Z0JBWkpELGdDQUFVQSxHQUFWQTtvQkFDQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7d0JBQ25CQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDekJBLElBQUlBO3dCQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDNUJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGNBQWNBLENBQUNBLENBQUFBO2dCQUM1QkEsQ0FBQ0E7Z0JBRURGLDhCQUFRQSxHQUFSQTtvQkFDQ0csT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQWpDRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsY0FBY0E7cUJBQ3hCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDhFQUE4RUE7d0JBQzNGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMEJBQTBCQTs0QkFDMUJBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0RBQXNEQTt5QkFDdERBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLGlDQUFRQTt5QkFDUkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQU1BLFNBQVNBLEVBQUVBLHNDQUFZQSxFQUFHQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFFQTt3QkFDbkZBLEVBQUVBLElBQUlBLEVBQUVBLGNBQWNBLEVBQUVBLFNBQVNBLEVBQUVBLGtDQUFVQSxFQUFHQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFFQTtxQkFDbEVBLENBQUNBOztnQ0FrQkRBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0FyQ0EsQUFxQ0NBLElBQUE7WUFFUSxxQ0FBVyIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1hcHAvcGFyYWxsYXguYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcblx0XHQgVmlldyxcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyxcblx0XHQgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgUGFyYWxsYXgsXG5cdFx0IFBhcmFsbGF4Q29uZmlnIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZzItcGFyYWxsYXguZGlyZWN0aXZlJztcbmltcG9ydCB7IFBhcmFsbGF4SG9tZSB9IGZyb20gJy4uL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgdHNFeGFtcGxlcyB9IGZyb20gJy4uL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BhcmFsbGF4LWFwcCdcbn0pXG5AVmlldyh7XG5cdHRlbXBsYXRlVXJsOiAnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAudGVtcGxhdGUuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCdhcHAvc3R5bGVzL25vcm1hbGl6ZS5jc3MnLFxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9iZWdpbm5pbmctc3R5bGVzaGVldC5jc3MnLFxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9naXRodWItbGlnaHQuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvcGFyYWxsYXguc3R5bGVzLmNzcydcblx0XSxcblx0ZGlyZWN0aXZlczogW1xuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTLFxuXHRcdFBhcmFsbGF4XG5cdF1cbn0pXG5AUm91dGVDb25maWcoW1xuXHR7IHBhdGg6ICcvJywgXHRcdFx0IGNvbXBvbmVudDogUGFyYWxsYXhIb21lLCBcdGFzOiAnUGFyYWxsYXhIb21lJyxcdHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuXHR7IHBhdGg6ICcvdHMtZXhhbXBsZXMnLCBjb21wb25lbnQ6IHRzRXhhbXBsZXMsIFx0YXM6ICdUc0V4YW1wbGVzJyB9XG5dKVxuXG5jbGFzcyBQYXJhbGxheEFwcCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGlzTWVudU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblx0XG5cdHRvZ2dsZU1lbnUoKSB7XG5cdFx0aWYgKHRoaXMuaXNNZW51T3Blbilcblx0XHRcdHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlO1xuXHRcdGVsc2UgdGhpcy5pc01lbnVPcGVuID0gdHJ1ZTtcblx0XHRjb25zb2xlLmxvZygnbWVudSB0b2dnbGVkJylcblx0fVxuXHRcblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJQYXJhbGxheEFwcENvbXBvbmVudCBpbml0XCIpO1xuXHR9XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuXG5leHBvcnQgeyBQYXJhbGxheEFwcCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
