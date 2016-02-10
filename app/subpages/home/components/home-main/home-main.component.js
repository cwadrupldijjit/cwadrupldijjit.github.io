/// <reference path="../../../../../typings/google.analytics/ga" />
System.register(['angular2/core', 'rxjs/Rx', '../../services/element-coord.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1, element_coord_service_1;
    var HomeMainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (element_coord_service_1_1) {
                element_coord_service_1 = element_coord_service_1_1;
            }],
        execute: function() {
            HomeMainComponent = (function () {
                function HomeMainComponent(elemService) {
                    this.elemService = elemService;
                }
                HomeMainComponent.prototype.ngAfterContentInit = function () {
                    if (window.location.host.match(/localhost/i) || window.location.host.match(/192.168/i)) {
                        console.log('browsing locally');
                    }
                    else {
                        ga('send', 'pageview');
                    }
                    this.projectHeadX = this.elemService.getPosition(document.getElementById('project-header')).x;
                    this.addScrollListener(this.projectHeadX);
                };
                HomeMainComponent.prototype.addScrollListener = function (xCoord) {
                    var sticky_menu = Rx_1.Observable.fromEvent(document.getElementsByTagName('body')[0], 'scroll');
                    // console.log(Observable)
                    sticky_menu
                        .mergeAll(function () {
                        console.log('does this work?');
                    });
                };
                HomeMainComponent = __decorate([
                    core_1.Component({
                        selector: 'home-main',
                        providers: [
                            element_coord_service_1.ElementCoord
                        ]
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/home/components/home-main/home-main.template.html',
                        styleUrls: [
                            'app/styles/normalize.css',
                            'app/styles/main.css',
                            'app/subpages/home/styles/main.css'
                        ]
                    }), 
                    __metadata('design:paramtypes', [element_coord_service_1.ElementCoord])
                ], HomeMainComponent);
                return HomeMainComponent;
            })();
            exports_1("HomeMainComponent", HomeMainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lTWFpbkNvbXBvbmVudCIsIkhvbWVNYWluQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZU1haW5Db21wb25lbnQubmdBZnRlckNvbnRlbnRJbml0IiwiSG9tZU1haW5Db21wb25lbnQuYWRkU2Nyb2xsTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNuRTtnQkFnQ0NBLDJCQUFZQSxXQUF5QkE7b0JBQ3BDQyxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQWxCREQsOENBQWtCQSxHQUFsQkE7b0JBQ0NFLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtvQkFDakNBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDUEEsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hCQSxDQUFDQTtvQkFFREEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFOUZBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxDQUFDQTtnQkFVSUYsNkNBQWlCQSxHQUF6QkEsVUFBMEJBLE1BQU1BO29CQUMvQkcsSUFBSUEsV0FBV0EsR0FBR0EsZUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtvQkFDM0ZBLDBCQUEwQkE7b0JBQzFCQSxXQUFXQTt5QkFDVEEsUUFBUUEsQ0FBQ0E7d0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNoQyxDQUFDLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkEzQ0ZIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLG9DQUFZQTt5QkFDWkE7cUJBQ0RBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBR0EsZ0VBQWdFQTt3QkFDOUVBLFNBQVNBLEVBQUdBOzRCQUNYQSwwQkFBMEJBOzRCQUMxQkEscUJBQXFCQTs0QkFDckJBLG1DQUFtQ0E7eUJBQ25DQTtxQkFDREEsQ0FBQ0E7O3NDQStCREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtZQUVRLGlEQUFpQiIsImZpbGUiOiJzdWJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS1tYWluL2hvbWUtbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9nb29nbGUuYW5hbHl0aWNzL2dhXCIgLz5cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBWaWV3LFxyXG4gICAgICAgICBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBFbGVtZW50Q29vcmQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lbGVtZW50LWNvb3JkLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdob21lLW1haW4nLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0RWxlbWVudENvb3JkXHJcblx0XSBcclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsIDogJ2FwcC9zdWJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS1tYWluL2hvbWUtbWFpbi50ZW1wbGF0ZS5odG1sJyxcclxuXHRzdHlsZVVybHMgOiBbXHJcblx0XHQnYXBwL3N0eWxlcy9ub3JtYWxpemUuY3NzJyxcclxuXHRcdCdhcHAvc3R5bGVzL21haW4uY3NzJyxcclxuXHRcdCdhcHAvc3VicGFnZXMvaG9tZS9zdHlsZXMvbWFpbi5jc3MnXHJcblx0XVxyXG59KVxyXG5cclxuY2xhc3MgSG9tZU1haW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhvc3QubWF0Y2goL2xvY2FsaG9zdC9pKSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdC5tYXRjaCgvMTkyLjE2OC9pKSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnYnJvd3NpbmcgbG9jYWxseScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5wcm9qZWN0SGVhZFggPSB0aGlzLmVsZW1TZXJ2aWNlLmdldFBvc2l0aW9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWhlYWRlcicpKS54O1xyXG5cdFx0XHJcblx0XHR0aGlzLmFkZFNjcm9sbExpc3RlbmVyKHRoaXMucHJvamVjdEhlYWRYKTtcclxuICAgIH1cclxuXHRcclxuXHRwcml2YXRlIHByb2plY3RIZWFkWDogbnVtYmVyO1xyXG5cdFxyXG5cdGVsZW1TZXJ2aWNlOiBFbGVtZW50Q29vcmQ7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoZWxlbVNlcnZpY2U6IEVsZW1lbnRDb29yZCkge1xyXG5cdFx0dGhpcy5lbGVtU2VydmljZSA9IGVsZW1TZXJ2aWNlO1xyXG5cdH1cclxuXHRcclxuXHRwcml2YXRlIGFkZFNjcm9sbExpc3RlbmVyKHhDb29yZCkge1xyXG5cdFx0dmFyIHN0aWNreV9tZW51ID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSwgJ3Njcm9sbCcpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coT2JzZXJ2YWJsZSlcclxuXHRcdHN0aWNreV9tZW51XHJcblx0XHRcdC5tZXJnZUFsbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZG9lcyB0aGlzIHdvcms/Jyk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgSG9tZU1haW5Db21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
