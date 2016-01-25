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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQUE7Z0JBcUJBQyxDQUFDQTtnQkFyQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO3dCQUNmQSxTQUFTQSxFQUFFQTs0QkFDVkEseUJBQWdCQTt5QkFDaEJBO3FCQUNEQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUdBLHVCQUF1QkE7d0JBQ3JDQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLHdCQUFlQTs0QkFDZkEsMEJBQWlCQTt5QkFDakJBO3FCQUNEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFJQSxTQUFTQSxFQUFFQSxxQ0FBZ0JBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUlBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUNBO3dCQUNyRkEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQSxTQUFTQSxFQUFFQSxvQ0FBV0EsRUFBSUEsRUFBRUEsRUFBRUEsYUFBYUEsRUFBRUE7cUJBQzFFQSxDQUFDQTs7aUNBSURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FyQkEsQUFxQkNBLElBQUE7WUFFUSx1Q0FBWSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxyXG5cdFx0IFZpZXcgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQ09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHQgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVDb25maWcsXHJcblx0XHQgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHQgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVBcHBDb21wb25lbnQgfSBmcm9tICcuL3N1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLWFwcC9ob21lLmFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXJhbGxheEFwcCB9IGZyb20gJy4vc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtYXBwL3BhcmFsbGF4LmFwcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Uk9VVEVSX1BST1ZJREVSU1xyXG5cdF1cclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsIDogYGFwcC9hcHAudGVtcGxhdGUuaHRtbGAsXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Uk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRDT1JFX0RJUkVDVElWRVMsXHJcblx0XHRDT01NT05fRElSRUNUSVZFU1xyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvaG9tZS8uLi4nLFx0XHQgY29tcG9uZW50OiBIb21lQXBwQ29tcG9uZW50LCBhczogJ0hvbWUnLCBcdFx0dXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuXHR7IHBhdGg6ICcvbmcyLXBhcmFsbGF4Ly4uLicsIGNvbXBvbmVudDogUGFyYWxsYXhBcHAsXHQgIGFzOiAnTmcyUGFyYWxsYXgnIH1cclxuXSlcclxuXHJcbmNsYXNzIEFwcENvbXBvbmVudCB7XHJcblx0XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcENvbXBvbmVudCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
