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
                        selector: 'app'
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
                        { path: '/...', component: home_app_component_1.HomeAppComponent, as: 'Home', useAsDefault: true },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQUE7Z0JBb0JBQyxDQUFDQTtnQkFIQUQsK0JBQVFBLEdBQVJBO29CQUNDRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO2dCQUNsQ0EsQ0FBQ0E7Z0JBbkJGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTtxQkFDZkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFHQSx1QkFBdUJBO3dCQUNyQ0EsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7NEJBQ2pCQSx3QkFBZUE7NEJBQ2ZBLDBCQUFpQkE7eUJBQ2pCQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBSUEsU0FBU0EsRUFBRUEscUNBQWdCQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFJQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFDQTt3QkFDaEZBLEVBQUVBLElBQUlBLEVBQUVBLG1CQUFtQkEsRUFBRUEsU0FBU0EsRUFBRUEsb0NBQVdBLEVBQUlBLEVBQUVBLEVBQUVBLGFBQWFBLEVBQUVBO3FCQUMxRUEsQ0FBQ0E7O2lDQU1EQTtnQkFBREEsbUJBQUNBO1lBQURBLENBcEJBLEFBb0JDQSxJQUFBO1lBRVEsdUNBQVkiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcblx0XHQgVmlldyxcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBDT01NT05fRElSRUNUSVZFUyxcblx0XHQgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxuXHRcdCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS1hcHAvaG9tZS5hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFBhcmFsbGF4QXBwIH0gZnJvbSAnLi9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1hcHAvcGFyYWxsYXguYXBwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FwcCdcbn0pXG5AVmlldyh7XG5cdHRlbXBsYXRlVXJsIDogYGFwcC9hcHAudGVtcGxhdGUuaHRtbGAsXG5cdGRpcmVjdGl2ZXM6IFtcblx0XHRST1VURVJfRElSRUNUSVZFUyxcblx0XHRDT1JFX0RJUkVDVElWRVMsXG5cdFx0Q09NTU9OX0RJUkVDVElWRVNcblx0XVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy8uLi4nLFx0XHQgY29tcG9uZW50OiBIb21lQXBwQ29tcG9uZW50LCBhczogJ0hvbWUnLCBcdFx0dXNlQXNEZWZhdWx0OiB0cnVlfSxcblx0eyBwYXRoOiAnL25nMi1wYXJhbGxheC8uLi4nLCBjb21wb25lbnQ6IFBhcmFsbGF4QXBwLFx0ICBhczogJ05nMlBhcmFsbGF4JyB9XG5dKVxuXG5jbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRuZ09uSW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZyhcIkFwcENvbXBvbmVudCBpbml0XCIpO1xuXHR9XG59XG5cbmV4cG9ydCB7IEFwcENvbXBvbmVudCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
