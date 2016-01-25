System.register(['angular2/core', 'angular2/common', 'angular2/router', './subpages/home/components/home-app/home.app.component', './subpages/ng2-parallax/components/parallax-app/parallax.app.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, home_app_component_1, parallax_app_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_app_component_1_1) {
                home_app_component_1 = home_app_component_1_1;
            },
            function (parallax_app_component_1_1) {
                parallax_app_component_1 = parallax_app_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log("AppComponent init");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    core_1.View({
                        templateUrl: "app/app.template.html",
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            common_1.CORE_DIRECTIVES,
                            common_1.COMMON_DIRECTIVES
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/home/...', component: home_app_component_1.HomeAppComponent, as: 'Home', useAsDefault: true },
                        { path: '/ng2-parallax/...', component: parallax_app_component_1.ParallaxApp, as: 'Ng2Parallax' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQUE7Z0JBdUJBQyxDQUFDQTtnQkFIQUQsK0JBQVFBLEdBQVJBO29CQUNDRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO2dCQUNsQ0EsQ0FBQ0E7Z0JBdEJGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLHlCQUFnQkE7eUJBQ2hCQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFHQSx1QkFBdUJBO3dCQUNyQ0EsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7NEJBQ2pCQSx3QkFBZUE7NEJBQ2ZBLDBCQUFpQkE7eUJBQ2pCQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBSUEsU0FBU0EsRUFBRUEscUNBQWdCQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFJQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFDQTt3QkFDckZBLEVBQUVBLElBQUlBLEVBQUVBLG1CQUFtQkEsRUFBRUEsU0FBU0EsRUFBRUEsb0NBQVdBLEVBQUlBLEVBQUVBLEVBQUVBLGFBQWFBLEVBQUVBO3FCQUMxRUEsQ0FBQ0E7O2lDQU1EQTtnQkFBREEsbUJBQUNBO1lBQURBLENBdkJBLEFBdUJDQSxJQUFBO1lBRVEsdUNBQVkiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT01NT05fRElSRUNUSVZFUyxcclxuXHRcdCBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyxcclxuXHRcdCBST1VURVJfRElSRUNUSVZFUyxcclxuXHRcdCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUFwcENvbXBvbmVudCB9IGZyb20gJy4vc3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtYXBwL2hvbWUuYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhcmFsbGF4QXBwIH0gZnJvbSAnLi9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1hcHAvcGFyYWxsYXguYXBwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcCcsXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRST1VURVJfUFJPVklERVJTXHJcblx0XVxyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmwgOiBgYXBwL2FwcC50ZW1wbGF0ZS5odG1sYCxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRST1VURVJfRElSRUNUSVZFUyxcclxuXHRcdENPUkVfRElSRUNUSVZFUyxcclxuXHRcdENPTU1PTl9ESVJFQ1RJVkVTXHJcblx0XVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG5cdHsgcGF0aDogJy9ob21lLy4uLicsXHRcdCBjb21wb25lbnQ6IEhvbWVBcHBDb21wb25lbnQsIGFzOiAnSG9tZScsIFx0XHR1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG5cdHsgcGF0aDogJy9uZzItcGFyYWxsYXgvLi4uJywgY29tcG9uZW50OiBQYXJhbGxheEFwcCxcdCAgYXM6ICdOZzJQYXJhbGxheCcgfVxyXG5dKVxyXG5cclxuY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQXBwQ29tcG9uZW50IGluaXRcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
