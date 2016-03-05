/// <reference path="../../../../../typings/google.analytics/ga" />
System.register(['angular2/core', 'angular2/router', 'rxjs/Rx', '../../services/element-coord.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Rx_1, element_coord_service_1;
    var HomeMainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lTWFpbkNvbXBvbmVudCIsIkhvbWVNYWluQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZU1haW5Db21wb25lbnQubmdBZnRlckNvbnRlbnRJbml0IiwiSG9tZU1haW5Db21wb25lbnQuYWRkU2Nyb2xsTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNuRTtnQkFpQ0NBLDJCQUFtQkEsV0FBeUJBO29CQUF6QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWNBO2dCQUFHQSxDQUFDQTtnQkFkaERELDhDQUFrQkEsR0FBbEJBO29CQUNDRSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ2pDQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO29CQUN4QkEsQ0FBQ0E7b0JBRURBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRTlGQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBTUlGLDZDQUFpQkEsR0FBekJBLFVBQTBCQSxNQUFNQTtvQkFDL0JHLElBQUlBLFdBQVdBLEdBQUdBLGVBQVVBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQzNGQSwwQkFBMEJBO29CQUMxQkEsV0FBV0E7eUJBQ1RBLFFBQVFBLENBQUNBO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBMUNGSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFNBQVNBLEVBQUVBOzRCQUNWQSxvQ0FBWUE7eUJBQ1pBO3FCQUNEQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUdBLGdFQUFnRUE7d0JBQzlFQSxTQUFTQSxFQUFHQTs0QkFDWEEsMEJBQTBCQTs0QkFDMUJBLHFCQUFxQkE7NEJBQ3JCQSxtQ0FBbUNBO3lCQUNuQ0E7d0JBQ0RBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBO3lCQUNqQkE7cUJBQ0RBLENBQUNBOztzQ0EyQkRBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0EzQ0EsQUEyQ0NBLElBQUE7WUFFUSxpREFBaUIiLCJmaWxlIjoic3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtbWFpbi9ob21lLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvZ29vZ2xlLmFuYWx5dGljcy9nYVwiIC8+XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsXHJcblx0XHQgVmlldyxcclxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgRWxlbWVudENvb3JkIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZWxlbWVudC1jb29yZC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnaG9tZS1tYWluJyxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdEVsZW1lbnRDb29yZFxyXG5cdF0gXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybCA6ICdhcHAvc3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtbWFpbi9ob21lLW1haW4udGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzIDogW1xyXG5cdFx0J2FwcC9zdHlsZXMvbm9ybWFsaXplLmNzcycsXHJcblx0XHQnYXBwL3N0eWxlcy9tYWluLmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL2hvbWUvc3R5bGVzL21haW4uY3NzJ1xyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Uk9VVEVSX0RJUkVDVElWRVNcclxuXHRdXHJcbn0pXHJcblxyXG5jbGFzcyBIb21lTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaG9zdC5tYXRjaCgvbG9jYWxob3N0L2kpIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0Lm1hdGNoKC8xOTIuMTY4L2kpKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdicm93c2luZyBsb2NhbGx5Jyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLnByb2plY3RIZWFkWCA9IHRoaXMuZWxlbVNlcnZpY2UuZ2V0UG9zaXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtaGVhZGVyJykpLng7XHJcblx0XHRcclxuXHRcdHRoaXMuYWRkU2Nyb2xsTGlzdGVuZXIodGhpcy5wcm9qZWN0SGVhZFgpO1xyXG4gICAgfVxyXG5cdFxyXG5cdHByaXZhdGUgcHJvamVjdEhlYWRYOiBudW1iZXI7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIGVsZW1TZXJ2aWNlOiBFbGVtZW50Q29vcmQpIHt9XHJcblx0XHJcblx0cHJpdmF0ZSBhZGRTY3JvbGxMaXN0ZW5lcih4Q29vcmQpIHtcclxuXHRcdHZhciBzdGlja3lfbWVudSA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0sICdzY3JvbGwnKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKE9ic2VydmFibGUpXHJcblx0XHRzdGlja3lfbWVudVxyXG5cdFx0XHQubWVyZ2VBbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2RvZXMgdGhpcyB3b3JrPycpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEhvbWVNYWluQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
