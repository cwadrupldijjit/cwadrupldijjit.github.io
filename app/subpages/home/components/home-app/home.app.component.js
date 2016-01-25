System.register(['angular2/core', 'angular2/router', '../home-main/home-main.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_main_component_1;
    var HomeAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_main_component_1_1) {
                home_main_component_1 = home_main_component_1_1;
            }],
        execute: function() {
            HomeAppComponent = (function () {
                function HomeAppComponent() {
                }
                HomeAppComponent = __decorate([
                    core_1.Component({
                        selector: 'home'
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/home/components/home-app/home.app.template.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: './', component: home_main_component_1.HomeMainComponent, as: 'HomeMain' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HomeAppComponent);
                return HomeAppComponent;
            })();
            exports_1("HomeAppComponent", HomeAppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLWFwcC9ob21lLmFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUFwcENvbXBvbmVudCIsIkhvbWVBcHBDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkFlQUMsQ0FBQ0E7Z0JBZkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLE1BQU1BO3FCQUNoQkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSw4REFBOERBO3dCQUMzRUEsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7eUJBQ2pCQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsRUFBRUEsU0FBU0EsRUFBRUEsdUNBQWlCQSxFQUFFQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFFQTtxQkFDNURBLENBQUNBOztxQ0FJREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFFUSwrQ0FBZ0IiLCJmaWxlIjoic3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtYXBwL2hvbWUuYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxyXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZU1haW5Db21wb25lbnQgfSBmcm9tICcuLi9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2hvbWUnXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9zdWJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS1hcHAvaG9tZS5hcHAudGVtcGxhdGUuaHRtbCcsXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Uk9VVEVSX0RJUkVDVElWRVNcclxuXHRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0eyBwYXRoOiAnLi8nLCBjb21wb25lbnQ6IEhvbWVNYWluQ29tcG9uZW50LCBhczogJ0hvbWVNYWluJyB9XHJcbl0pXHJcblxyXG5jbGFzcyBIb21lQXBwQ29tcG9uZW50IHtcclxuXHRcclxufVxyXG5cclxuZXhwb3J0IHsgSG9tZUFwcENvbXBvbmVudCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
