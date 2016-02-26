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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lTWFpbkNvbXBvbmVudCIsIkhvbWVNYWluQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZU1haW5Db21wb25lbnQubmdBZnRlckNvbnRlbnRJbml0IiwiSG9tZU1haW5Db21wb25lbnQuYWRkU2Nyb2xsTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNuRTtnQkFnQ0NBLDJCQUFZQSxXQUF5QkE7b0JBQ3BDQyxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxXQUFXQSxDQUFDQTtnQkFDaENBLENBQUNBO2dCQWxCREQsOENBQWtCQSxHQUFsQkE7b0JBQ0NFLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4RkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtvQkFDakNBLENBQUNBO29CQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDUEEsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hCQSxDQUFDQTtvQkFFREEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFOUZBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hDQSxDQUFDQTtnQkFVSUYsNkNBQWlCQSxHQUF6QkEsVUFBMEJBLE1BQU1BO29CQUMvQkcsSUFBSUEsV0FBV0EsR0FBR0EsZUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtvQkFDM0ZBLDBCQUEwQkE7b0JBQzFCQSxXQUFXQTt5QkFDVEEsUUFBUUEsQ0FBQ0E7d0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNoQyxDQUFDLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkEzQ0ZIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLG9DQUFZQTt5QkFDWkE7cUJBQ0RBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBR0EsZ0VBQWdFQTt3QkFDOUVBLFNBQVNBLEVBQUdBOzRCQUNYQSwwQkFBMEJBOzRCQUMxQkEscUJBQXFCQTs0QkFDckJBLG1DQUFtQ0E7eUJBQ25DQTtxQkFDREEsQ0FBQ0E7O3NDQStCREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQTVDQSxBQTRDQ0EsSUFBQTtZQUVRLGlEQUFpQiIsImZpbGUiOiJzdWJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS1tYWluL2hvbWUtbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9nb29nbGUuYW5hbHl0aWNzL2dhXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LFxuXHRcdCBWaWV3LFxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgRWxlbWVudENvb3JkIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZWxlbWVudC1jb29yZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaG9tZS1tYWluJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RWxlbWVudENvb3JkXG5cdF0gXG59KVxuQFZpZXcoe1xuXHR0ZW1wbGF0ZVVybCA6ICdhcHAvc3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtbWFpbi9ob21lLW1haW4udGVtcGxhdGUuaHRtbCcsXG5cdHN0eWxlVXJscyA6IFtcblx0XHQnYXBwL3N0eWxlcy9ub3JtYWxpemUuY3NzJyxcblx0XHQnYXBwL3N0eWxlcy9tYWluLmNzcycsXG5cdFx0J2FwcC9zdWJwYWdlcy9ob21lL3N0eWxlcy9tYWluLmNzcydcblx0XVxufSlcblxuY2xhc3MgSG9tZU1haW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaG9zdC5tYXRjaCgvbG9jYWxob3N0L2kpIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0Lm1hdGNoKC8xOTIuMTY4L2kpKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYnJvd3NpbmcgbG9jYWxseScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLnByb2plY3RIZWFkWCA9IHRoaXMuZWxlbVNlcnZpY2UuZ2V0UG9zaXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaGVhZGVyJykpLng7XG5cdFx0XG5cdFx0dGhpcy5hZGRTY3JvbGxMaXN0ZW5lcih0aGlzLnByb2plY3RIZWFkWCk7XG4gICAgfVxuXHRcblx0cHJpdmF0ZSBwcm9qZWN0SGVhZFg6IG51bWJlcjtcblx0XG5cdGVsZW1TZXJ2aWNlOiBFbGVtZW50Q29vcmQ7XG5cdFxuXHRjb25zdHJ1Y3RvcihlbGVtU2VydmljZTogRWxlbWVudENvb3JkKSB7XG5cdFx0dGhpcy5lbGVtU2VydmljZSA9IGVsZW1TZXJ2aWNlO1xuXHR9XG5cdFxuXHRwcml2YXRlIGFkZFNjcm9sbExpc3RlbmVyKHhDb29yZCkge1xuXHRcdHZhciBzdGlja3lfbWVudSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0sICdzY3JvbGwnKTtcblx0XHQvLyBjb25zb2xlLmxvZyhPYnNlcnZhYmxlKVxuXHRcdHN0aWNreV9tZW51XG5cdFx0XHQubWVyZ2VBbGwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkb2VzIHRoaXMgd29yaz8nKTtcblx0XHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCB7IEhvbWVNYWluQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
