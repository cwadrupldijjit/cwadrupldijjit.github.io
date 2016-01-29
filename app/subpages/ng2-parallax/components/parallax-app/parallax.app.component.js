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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBhcmFsbGF4QXBwIiwiUGFyYWxsYXhBcHAuY29uc3RydWN0b3IiLCJQYXJhbGxheEFwcC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUFBO2dCQXlCQUMsQ0FBQ0E7Z0JBSEFELDhCQUFRQSxHQUFSQTtvQkFDQ0UsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQXhCRkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsY0FBY0E7cUJBQ3hCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDhFQUE4RUE7d0JBQzNGQSxTQUFTQSxFQUFFQTs0QkFDVkEsMEJBQTBCQTs0QkFDMUJBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0RBQXNEQTt5QkFDdERBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLGlDQUFRQTt5QkFDUkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQU1BLFNBQVNBLEVBQUVBLHNDQUFZQSxFQUFHQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFFQTt3QkFDbkZBLEVBQUVBLElBQUlBLEVBQUVBLGNBQWNBLEVBQUVBLFNBQVNBLEVBQUVBLGtDQUFVQSxFQUFHQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFFQTtxQkFDbEVBLENBQUNBOztnQ0FNREE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQXpCQSxBQXlCQ0EsSUFBQTtZQUVRLHFDQUFXIiwiZmlsZSI6InN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxuXHRcdCBWaWV3LFxuXHRcdCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxuXHRcdCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBQYXJhbGxheCxcblx0XHQgUGFyYWxsYXhDb25maWcgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1wYXJhbGxheC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUGFyYWxsYXhIb21lIH0gZnJvbSAnLi4vcGFyYWxsYXgtaG9tZS9wYXJhbGxheC1ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0c0V4YW1wbGVzIH0gZnJvbSAnLi4vdHMtZXhhbXBsZXMvdHMtZXhhbXBsZXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFyYWxsYXgtYXBwJ1xufSlcbkBWaWV3KHtcblx0dGVtcGxhdGVVcmw6ICdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtYXBwL3BhcmFsbGF4LmFwcC50ZW1wbGF0ZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0J2FwcC9zdHlsZXMvbm9ybWFsaXplLmNzcycsXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2JlZ2lubmluZy1zdHlsZXNoZWV0LmNzcycsXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2dpdGh1Yi1saWdodC5jc3MnLFxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9wYXJhbGxheC5zdHlsZXMuY3NzJ1xuXHRdLFxuXHRkaXJlY3RpdmVzOiBbXG5cdFx0Uk9VVEVSX0RJUkVDVElWRVMsXG5cdFx0UGFyYWxsYXhcblx0XVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy8nLCBcdFx0XHQgY29tcG9uZW50OiBQYXJhbGxheEhvbWUsIFx0YXM6ICdQYXJhbGxheEhvbWUnLFx0dXNlQXNEZWZhdWx0OiB0cnVlIH0sXG5cdHsgcGF0aDogJy90cy1leGFtcGxlcycsIGNvbXBvbmVudDogdHNFeGFtcGxlcywgXHRhczogJ1RzRXhhbXBsZXMnIH1cbl0pXG5cbmNsYXNzIFBhcmFsbGF4QXBwIGltcGxlbWVudHMgT25Jbml0IHtcblx0bmdPbkluaXQoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJQYXJhbGxheEFwcENvbXBvbmVudCBpbml0XCIpO1xuXHR9XG59XG5cbmV4cG9ydCB7IFBhcmFsbGF4QXBwIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
