System.register(['angular2/core', 'angular2/common', 'angular2/router', './subpages/home/components/home-app/home.app.component', './subpages/ng2-parallax/components/parallax-app/parallax.app.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUFBQTtnQkFvQkFDLENBQUNBO2dCQUhBRCwrQkFBUUEsR0FBUkE7b0JBQ0NFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG1CQUFtQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQTtnQkFuQkZGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO3FCQUNmQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUdBLHVCQUF1QkE7d0JBQ3JDQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLHdCQUFlQTs0QkFDZkEsMEJBQWlCQTt5QkFDakJBO3FCQUNEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFJQSxTQUFTQSxFQUFFQSxxQ0FBZ0JBLEVBQUVBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUlBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUNBO3dCQUNoRkEsRUFBRUEsSUFBSUEsRUFBRUEsbUJBQW1CQSxFQUFFQSxTQUFTQSxFQUFFQSxvQ0FBV0EsRUFBSUEsRUFBRUEsRUFBRUEsYUFBYUEsRUFBRUE7cUJBQzFFQSxDQUFDQTs7aUNBTURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FwQkEsQUFvQkNBLElBQUE7WUFFUSx1Q0FBWSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxyXG5cdFx0IFZpZXcsXHJcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxyXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUFwcENvbXBvbmVudCB9IGZyb20gJy4vc3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtYXBwL2hvbWUuYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhcmFsbGF4QXBwIH0gZnJvbSAnLi9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1hcHAvcGFyYWxsYXguYXBwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcCdcclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsIDogYGFwcC9hcHAudGVtcGxhdGUuaHRtbGAsXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Uk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRDT1JFX0RJUkVDVElWRVMsXHJcblx0XHRDT01NT05fRElSRUNUSVZFU1xyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvLi4uJyxcdFx0IGNvbXBvbmVudDogSG9tZUFwcENvbXBvbmVudCwgYXM6ICdIb21lJywgXHRcdHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcblx0eyBwYXRoOiAnL25nMi1wYXJhbGxheC8uLi4nLCBjb21wb25lbnQ6IFBhcmFsbGF4QXBwLFx0ICBhczogJ05nMlBhcmFsbGF4JyB9XHJcbl0pXHJcblxyXG5jbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJBcHBDb21wb25lbnQgaW5pdFwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcENvbXBvbmVudCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
