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
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBhcmFsbGF4QXBwIiwiUGFyYWxsYXhBcHAuY29uc3RydWN0b3IiLCJQYXJhbGxheEFwcC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUFBO2dCQXlCQUMsQ0FBQ0E7Z0JBSEFELDhCQUFRQSxHQUFSQTtvQkFDQ0UsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQXhCRkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsY0FBY0E7cUJBQ3hCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDhFQUE4RUE7d0JBQzNGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMEJBQTBCQTs0QkFDMUJBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0RBQXNEQTt5QkFDdERBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLGlDQUFRQTt5QkFDUkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQU1BLFNBQVNBLEVBQUVBLHNDQUFZQSxFQUFHQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFFQTt3QkFDbkZBLEVBQUVBLElBQUlBLEVBQUVBLGNBQWNBLEVBQUVBLFNBQVNBLEVBQUVBLGtDQUFVQSxFQUFHQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFFQTtxQkFDbEVBLENBQUNBOztnQ0FNREE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQXpCQSxBQXlCQ0EsSUFBQTtZQUVRLHFDQUFXIiwiZmlsZSI6InN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxyXG5cdFx0IFZpZXcsXHJcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxyXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFyYWxsYXgsXHJcblx0XHQgUGFyYWxsYXhDb25maWcgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQYXJhbGxheEhvbWUgfSBmcm9tICcuLi9wYXJhbGxheC1ob21lL3BhcmFsbGF4LWhvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgdHNFeGFtcGxlcyB9IGZyb20gJy4uL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3BhcmFsbGF4LWFwcCdcclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAudGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnYXBwL3N0eWxlcy9ub3JtYWxpemUuY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9iZWdpbm5pbmctc3R5bGVzaGVldC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2dpdGh1Yi1saWdodC5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL3BhcmFsbGF4LnN0eWxlcy5jc3MnXHJcblx0XSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRST1VURVJfRElSRUNUSVZFUyxcclxuXHRcdFBhcmFsbGF4XHJcblx0XVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG5cdHsgcGF0aDogJy8nLCBcdFx0XHQgY29tcG9uZW50OiBQYXJhbGxheEhvbWUsIFx0YXM6ICdQYXJhbGxheEhvbWUnLFx0dXNlQXNEZWZhdWx0OiB0cnVlIH0sXHJcblx0eyBwYXRoOiAnL3RzLWV4YW1wbGVzJywgY29tcG9uZW50OiB0c0V4YW1wbGVzLCBcdGFzOiAnVHNFeGFtcGxlcycgfVxyXG5dKVxyXG5cclxuY2xhc3MgUGFyYWxsYXhBcHAgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJQYXJhbGxheEFwcENvbXBvbmVudCBpbml0XCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGFyYWxsYXhBcHAgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
