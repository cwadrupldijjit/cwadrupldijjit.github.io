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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lTWFpbkNvbXBvbmVudCIsIkhvbWVNYWluQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZU1haW5Db21wb25lbnQubmdBZnRlckNvbnRlbnRJbml0IiwiSG9tZU1haW5Db21wb25lbnQuYWRkU2Nyb2xsTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNuRTtnQkE4QkNBLDJCQUFtQkEsV0FBeUJBO29CQUF6QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWNBO2dCQUFHQSxDQUFDQTtnQkFkaERELDhDQUFrQkEsR0FBbEJBO29CQUNDRSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ2pDQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO29CQUN4QkEsQ0FBQ0E7b0JBRURBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRTlGQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBTUlGLDZDQUFpQkEsR0FBekJBLFVBQTBCQSxNQUFNQTtvQkFDL0JHLElBQUlBLFdBQVdBLEdBQUdBLGVBQVVBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQzNGQSwwQkFBMEJBO29CQUMxQkEsV0FBV0E7eUJBQ1RBLFFBQVFBLENBQUNBO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBdkNGSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFNBQVNBLEVBQUVBOzRCQUNWQSxvQ0FBWUE7eUJBQ1pBO3FCQUNEQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUdBLGdFQUFnRUE7d0JBQzlFQSxTQUFTQSxFQUFHQTs0QkFDWEEsMEJBQTBCQTs0QkFDMUJBLHFCQUFxQkE7NEJBQ3JCQSxtQ0FBbUNBO3lCQUNuQ0E7cUJBQ0RBLENBQUNBOztzQ0EyQkRBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0F4Q0EsQUF3Q0NBLElBQUE7WUFFUSxpREFBaUIiLCJmaWxlIjoic3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtbWFpbi9ob21lLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvZ29vZ2xlLmFuYWx5dGljcy9nYVwiIC8+XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsXHJcblx0XHQgVmlldyxcclxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgRWxlbWVudENvb3JkIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZWxlbWVudC1jb29yZC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnaG9tZS1tYWluJyxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdEVsZW1lbnRDb29yZFxyXG5cdF0gXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybCA6ICdhcHAvc3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtbWFpbi9ob21lLW1haW4udGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzIDogW1xyXG5cdFx0J2FwcC9zdHlsZXMvbm9ybWFsaXplLmNzcycsXHJcblx0XHQnYXBwL3N0eWxlcy9tYWluLmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL2hvbWUvc3R5bGVzL21haW4uY3NzJ1xyXG5cdF1cclxufSlcclxuXHJcbmNsYXNzIEhvbWVNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0Lm1hdGNoKC9sb2NhbGhvc3QvaSkgfHwgd2luZG93LmxvY2F0aW9uLmhvc3QubWF0Y2goLzE5Mi4xNjgvaSkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2Jyb3dzaW5nIGxvY2FsbHknKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMucHJvamVjdEhlYWRYID0gdGhpcy5lbGVtU2VydmljZS5nZXRQb3NpdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1oZWFkZXInKSkueDtcclxuXHRcdFxyXG5cdFx0dGhpcy5hZGRTY3JvbGxMaXN0ZW5lcih0aGlzLnByb2plY3RIZWFkWCk7XHJcbiAgICB9XHJcblx0XHJcblx0cHJpdmF0ZSBwcm9qZWN0SGVhZFg6IG51bWJlcjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbVNlcnZpY2U6IEVsZW1lbnRDb29yZCkge31cclxuXHRcclxuXHRwcml2YXRlIGFkZFNjcm9sbExpc3RlbmVyKHhDb29yZCkge1xyXG5cdFx0dmFyIHN0aWNreV9tZW51ID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSwgJ3Njcm9sbCcpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coT2JzZXJ2YWJsZSlcclxuXHRcdHN0aWNreV9tZW51XHJcblx0XHRcdC5tZXJnZUFsbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZG9lcyB0aGlzIHdvcms/Jyk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgSG9tZU1haW5Db21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
