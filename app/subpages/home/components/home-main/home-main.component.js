/// <reference path="../../../../../typings/google.analytics/ga" />
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HomeMainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import { } from '../'
            HomeMainComponent = (function () {
                function HomeMainComponent() {
                }
                HomeMainComponent.prototype.ngAfterContentInit = function () {
                    ga('send', 'pageview');
                };
                HomeMainComponent = __decorate([
                    core_1.Component({
                        selector: 'home-main'
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/home/components/home-main/home-main.template.html',
                        styleUrls: [
                            'app/styles/normalize.css',
                            'app/styles/main.css',
                            'app/subpages/home/styles/main.css'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeMainComponent);
                return HomeMainComponent;
            })();
            exports_1("HomeMainComponent", HomeMainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lTWFpbkNvbXBvbmVudCIsIkhvbWVNYWluQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZU1haW5Db21wb25lbnQubmdBZnRlckNvbnRlbnRJbml0Il0sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNbkUsd0JBQXdCO1lBRXhCO2dCQUFBQTtnQkFnQkFDLENBQUNBO2dCQUhBRCw4Q0FBa0JBLEdBQWxCQTtvQkFDT0UsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFmTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsV0FBV0E7cUJBQ3JCQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUdBLGdFQUFnRUE7d0JBQzlFQSxTQUFTQSxFQUFHQTs0QkFDWEEsMEJBQTBCQTs0QkFDMUJBLHFCQUFxQkE7NEJBQ3JCQSxtQ0FBbUNBO3lCQUNuQ0E7cUJBQ0RBLENBQUNBOztzQ0FNREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtZQUVRLGlEQUFpQiIsImZpbGUiOiJzdWJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS1tYWluL2hvbWUtbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9nb29nbGUuYW5hbHl0aWNzL2dhXCIgLz5cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuLy8gaW1wb3J0IHsgfSBmcm9tICcuLi8nXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2hvbWUtbWFpbidcclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsIDogJ2FwcC9zdWJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS1tYWluL2hvbWUtbWFpbi50ZW1wbGF0ZS5odG1sJyxcclxuXHRzdHlsZVVybHMgOiBbXHJcblx0XHQnYXBwL3N0eWxlcy9ub3JtYWxpemUuY3NzJyxcclxuXHRcdCdhcHAvc3R5bGVzL21haW4uY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvaG9tZS9zdHlsZXMvbWFpbi5jc3MnXHJcblx0XVxyXG59KVxyXG5cclxuY2xhc3MgSG9tZU1haW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgSG9tZU1haW5Db21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
