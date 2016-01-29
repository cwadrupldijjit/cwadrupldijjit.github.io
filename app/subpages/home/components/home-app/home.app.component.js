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
                HomeAppComponent.prototype.ngOnInit = function () {
                    console.log("HomeAppComponent init");
                };
                HomeAppComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        providers: []
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/home/components/home-app/home.app.template.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                        styleUrls: [
                            'app/subpages/home/styles/main.css'
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_main_component_1.HomeMainComponent, as: 'HomeMain', useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HomeAppComponent);
                return HomeAppComponent;
            })();
            exports_1("HomeAppComponent", HomeAppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLWFwcC9ob21lLmFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUFwcENvbXBvbmVudCIsIkhvbWVBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQUE7Z0JBdUJBQyxDQUFDQTtnQkFIQUQsbUNBQVFBLEdBQVJBO29CQUNDRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx1QkFBdUJBLENBQUNBLENBQUNBO2dCQUN0Q0EsQ0FBQ0E7Z0JBdEJGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFNBQVNBLEVBQUVBLEVBRVZBO3FCQUNEQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLDhEQUE4REE7d0JBQzNFQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTt5QkFDakJBO3dCQUNEQSxTQUFTQSxFQUFFQTs0QkFDVkEsbUNBQW1DQTt5QkFDbkNBO3FCQUNEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSx1Q0FBaUJBLEVBQUVBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUVBO3FCQUMvRUEsQ0FBQ0E7O3FDQU1EQTtnQkFBREEsdUJBQUNBO1lBQURBLENBdkJBLEFBdUJDQSxJQUFBO1lBRVEsK0NBQWdCIiwiZmlsZSI6InN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLWFwcC9ob21lLmFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXG5cdFx0IFZpZXcsXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTLFxuXHRcdCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVNYWluQ29tcG9uZW50IH0gZnJvbSAnLi4vaG9tZS1tYWluL2hvbWUtbWFpbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdob21lJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Ly8gUk9VVEVSX1BST1ZJREVSU1xuXHRdXG59KVxuQFZpZXcoe1xuXHR0ZW1wbGF0ZVVybDogJ2FwcC9zdWJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS1hcHAvaG9tZS5hcHAudGVtcGxhdGUuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6IFtcblx0XHRST1VURVJfRElSRUNUSVZFU1xuXHRdLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnYXBwL3N1YnBhZ2VzL2hvbWUvc3R5bGVzL21haW4uY3NzJ1xuXHRdXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0eyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZU1haW5Db21wb25lbnQsIGFzOiAnSG9tZU1haW4nLCB1c2VBc0RlZmF1bHQ6IHRydWUgfVxuXSlcblxuY2xhc3MgSG9tZUFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdG5nT25Jbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKFwiSG9tZUFwcENvbXBvbmVudCBpbml0XCIpO1xuXHR9XG59XG5cbmV4cG9ydCB7IEhvbWVBcHBDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
