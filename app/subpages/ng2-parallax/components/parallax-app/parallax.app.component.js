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
                        selector: 'parallax-app',
                        providers: []
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
                        { path: './', component: parallax_home_component_1.ParallaxHome, as: 'Ng2Home', useAsDefault: true },
                        { path: './ts-examples', component: ts_examples_component_1.tsExamples, as: 'TsExamples' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ParallaxApp);
                return ParallaxApp;
            })();
            exports_1("ParallaxApp", ParallaxApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBhcmFsbGF4QXBwIiwiUGFyYWxsYXhBcHAuY29uc3RydWN0b3IiLCJQYXJhbGxheEFwcC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBQUFBO2dCQTRCQUMsQ0FBQ0E7Z0JBSEFELDhCQUFRQSxHQUFSQTtvQkFDQ0UsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMkJBQTJCQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQTNCRkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsY0FBY0E7d0JBQ3hCQSxTQUFTQSxFQUFFQSxFQUVWQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSw4RUFBOEVBO3dCQUMzRkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLDBCQUEwQkE7NEJBQzFCQSwyREFBMkRBOzRCQUMzREEsbURBQW1EQTs0QkFDbkRBLHNEQUFzREE7eUJBQ3REQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7NEJBQ2pCQSxpQ0FBUUE7eUJBQ1JBO3FCQUNEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxFQUFNQSxTQUFTQSxFQUFFQSxzQ0FBWUEsRUFBR0EsRUFBRUEsRUFBRUEsU0FBU0EsRUFBS0EsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7d0JBQ2xGQSxFQUFFQSxJQUFJQSxFQUFFQSxlQUFlQSxFQUFFQSxTQUFTQSxFQUFFQSxrQ0FBVUEsRUFBR0EsRUFBRUEsRUFBRUEsWUFBWUEsRUFBRUE7cUJBQ25FQSxDQUFDQTs7Z0NBTURBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0E1QkEsQUE0QkNBLElBQUE7WUFFUSxxQ0FBVyIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1hcHAvcGFyYWxsYXguYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyxcclxuXHRcdCBST1VURVJfRElSRUNUSVZFUyxcclxuXHRcdCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgUGFyYWxsYXgsXHJcblx0XHQgUGFyYWxsYXhDb25maWcgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQYXJhbGxheEhvbWUgfSBmcm9tICcuLi9wYXJhbGxheC1ob21lL3BhcmFsbGF4LWhvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgdHNFeGFtcGxlcyB9IGZyb20gJy4uL3RzLWV4YW1wbGVzL3RzLWV4YW1wbGVzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3BhcmFsbGF4LWFwcCcsXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQvLyBST1VURVJfUFJPVklERVJTXHJcblx0XVxyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtYXBwL3BhcmFsbGF4LmFwcC50ZW1wbGF0ZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCdhcHAvc3R5bGVzL25vcm1hbGl6ZS5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2JlZ2lubmluZy1zdHlsZXNoZWV0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvZ2l0aHViLWxpZ2h0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvcGFyYWxsYXguc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0UGFyYWxsYXhcclxuXHRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0eyBwYXRoOiAnLi8nLCBcdFx0XHQgY29tcG9uZW50OiBQYXJhbGxheEhvbWUsIFx0YXM6ICdOZzJIb21lJywgXHQgIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG5cdHsgcGF0aDogJy4vdHMtZXhhbXBsZXMnLCBjb21wb25lbnQ6IHRzRXhhbXBsZXMsIFx0YXM6ICdUc0V4YW1wbGVzJyB9XHJcbl0pXHJcblxyXG5jbGFzcyBQYXJhbGxheEFwcCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlBhcmFsbGF4QXBwQ29tcG9uZW50IGluaXRcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBQYXJhbGxheEFwcCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
