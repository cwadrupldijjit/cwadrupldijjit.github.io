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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQUE7Z0JBb0JBQyxDQUFDQTtnQkFIQUQsK0JBQVFBLEdBQVJBO29CQUNDRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBLENBQUNBO2dCQUNsQ0EsQ0FBQ0E7Z0JBbkJGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTtxQkFDZkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFHQSx1QkFBdUJBO3dCQUNyQ0EsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7NEJBQ2pCQSx3QkFBZUE7NEJBQ2ZBLDBCQUFpQkE7eUJBQ2pCQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBSUEsU0FBU0EsRUFBRUEscUNBQWdCQSxFQUFFQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFJQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFDQTt3QkFDaEZBLEVBQUVBLElBQUlBLEVBQUVBLG1CQUFtQkEsRUFBRUEsU0FBU0EsRUFBRUEsb0NBQVdBLEVBQUlBLEVBQUVBLEVBQUVBLGFBQWFBLEVBQUVBO3FCQUMxRUEsQ0FBQ0E7O2lDQU1EQTtnQkFBREEsbUJBQUNBO1lBQURBLENBcEJBLEFBb0JDQSxJQUFBO1lBRVEsdUNBQVkiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT01NT05fRElSRUNUSVZFUyxcclxuXHRcdCBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyxcclxuXHRcdCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVBcHBDb21wb25lbnQgfSBmcm9tICcuL3N1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLWFwcC9ob21lLmFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXJhbGxheEFwcCB9IGZyb20gJy4vc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtYXBwL3BhcmFsbGF4LmFwcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybCA6IGBhcHAvYXBwLnRlbXBsYXRlLmh0bWxgLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0Q09SRV9ESVJFQ1RJVkVTLFxyXG5cdFx0Q09NTU9OX0RJUkVDVElWRVNcclxuXHRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0eyBwYXRoOiAnLy4uLicsXHRcdCBjb21wb25lbnQ6IEhvbWVBcHBDb21wb25lbnQsIGFzOiAnSG9tZScsIFx0XHR1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG5cdHsgcGF0aDogJy9uZzItcGFyYWxsYXgvLi4uJywgY29tcG9uZW50OiBQYXJhbGxheEFwcCxcdCAgYXM6ICdOZzJQYXJhbGxheCcgfVxyXG5dKVxyXG5cclxuY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiQXBwQ29tcG9uZW50IGluaXRcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
