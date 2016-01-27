System.register(['angular2/core', 'angular2/router', '../home-main/home-main.component'], function(exports_1) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLWFwcC9ob21lLmFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUFwcENvbXBvbmVudCIsIkhvbWVBcHBDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQXBwQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUFBQTtnQkF1QkFDLENBQUNBO2dCQUhBRCxtQ0FBUUEsR0FBUkE7b0JBQ0NFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3RDQSxDQUFDQTtnQkF0QkZGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLE1BQU1BO3dCQUNoQkEsU0FBU0EsRUFBRUEsRUFFVkE7cUJBQ0RBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsOERBQThEQTt3QkFDM0VBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBO3lCQUNqQkE7d0JBQ0RBLFNBQVNBLEVBQUVBOzRCQUNWQSxtQ0FBbUNBO3lCQUNuQ0E7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQUVBLFNBQVNBLEVBQUVBLHVDQUFpQkEsRUFBRUEsRUFBRUEsRUFBRUEsVUFBVUEsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7cUJBQy9FQSxDQUFDQTs7cUNBTURBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0F2QkEsQUF1QkNBLElBQUE7WUFFUSwrQ0FBZ0IiLCJmaWxlIjoic3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtYXBwL2hvbWUuYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyxcclxuXHRcdCBST1VURVJfRElSRUNUSVZFUyxcclxuXHRcdCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZU1haW5Db21wb25lbnQgfSBmcm9tICcuLi9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2hvbWUnLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Ly8gUk9VVEVSX1BST1ZJREVSU1xyXG5cdF1cclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL3N1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLWFwcC9ob21lLmFwcC50ZW1wbGF0ZS5odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRST1VURVJfRElSRUNUSVZFU1xyXG5cdF0sXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnYXBwL3N1YnBhZ2VzL2hvbWUvc3R5bGVzL21haW4uY3NzJ1xyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lTWFpbkNvbXBvbmVudCwgYXM6ICdIb21lTWFpbicsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9XHJcbl0pXHJcblxyXG5jbGFzcyBIb21lQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiSG9tZUFwcENvbXBvbmVudCBpbml0XCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgSG9tZUFwcENvbXBvbmVudCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
