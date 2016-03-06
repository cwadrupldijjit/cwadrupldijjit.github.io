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
                            'app/subpages/home/styles/main.css',
                            'app/subpages/home/components/home-main/home-main.styles.css'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lTWFpbkNvbXBvbmVudCIsIkhvbWVNYWluQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZU1haW5Db21wb25lbnQubmdBZnRlckNvbnRlbnRJbml0IiwiSG9tZU1haW5Db21wb25lbnQuYWRkU2Nyb2xsTGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNuRTtnQkFrQ0NBLDJCQUFtQkEsV0FBeUJBO29CQUF6QkMsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWNBO2dCQUFHQSxDQUFDQTtnQkFkaERELDhDQUFrQkEsR0FBbEJBO29CQUNDRSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeEZBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ2pDQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLEVBQUVBLENBQUNBLE1BQU1BLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO29CQUN4QkEsQ0FBQ0E7b0JBRURBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRTlGQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO2dCQUN4Q0EsQ0FBQ0E7Z0JBTUlGLDZDQUFpQkEsR0FBekJBLFVBQTBCQSxNQUFNQTtvQkFDL0JHLElBQUlBLFdBQVdBLEdBQUdBLGVBQVVBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQzNGQSwwQkFBMEJBO29CQUMxQkEsV0FBV0E7eUJBQ1RBLFFBQVFBLENBQUNBO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBM0NGSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFNBQVNBLEVBQUVBOzRCQUNWQSxvQ0FBWUE7eUJBQ1pBO3FCQUNEQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUdBLGdFQUFnRUE7d0JBQzlFQSxTQUFTQSxFQUFHQTs0QkFDWEEsMEJBQTBCQTs0QkFDMUJBLHFCQUFxQkE7NEJBQ3JCQSxtQ0FBbUNBOzRCQUNuQ0EsNkRBQTZEQTt5QkFDN0RBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTt5QkFDakJBO3FCQUNEQSxDQUFDQTs7c0NBMkJEQTtnQkFBREEsd0JBQUNBO1lBQURBLENBNUNBLEFBNENDQSxJQUFBO1lBRVEsaURBQWlCIiwiZmlsZSI6InN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi8uLi90eXBpbmdzL2dvb2dsZS5hbmFseXRpY3MvZ2FcIiAvPlxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LFxyXG5cdFx0IFZpZXcsXHJcbiAgICAgICAgIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7IEVsZW1lbnRDb29yZCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2VsZW1lbnQtY29vcmQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2hvbWUtbWFpbicsXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHRFbGVtZW50Q29vcmRcclxuXHRdIFxyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmwgOiAnYXBwL3N1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLnRlbXBsYXRlLmh0bWwnLFxyXG5cdHN0eWxlVXJscyA6IFtcclxuXHRcdCdhcHAvc3R5bGVzL25vcm1hbGl6ZS5jc3MnLFxyXG5cdFx0J2FwcC9zdHlsZXMvbWFpbi5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9ob21lL3N0eWxlcy9tYWluLmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLnN0eWxlcy5jc3MnXHJcblx0XSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRST1VURVJfRElSRUNUSVZFU1xyXG5cdF1cclxufSlcclxuXHJcbmNsYXNzIEhvbWVNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0Lm1hdGNoKC9sb2NhbGhvc3QvaSkgfHwgd2luZG93LmxvY2F0aW9uLmhvc3QubWF0Y2goLzE5Mi4xNjgvaSkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2Jyb3dzaW5nIGxvY2FsbHknKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMucHJvamVjdEhlYWRYID0gdGhpcy5lbGVtU2VydmljZS5nZXRQb3NpdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1oZWFkZXInKSkueDtcclxuXHRcdFxyXG5cdFx0dGhpcy5hZGRTY3JvbGxMaXN0ZW5lcih0aGlzLnByb2plY3RIZWFkWCk7XHJcbiAgICB9XHJcblx0XHJcblx0cHJpdmF0ZSBwcm9qZWN0SGVhZFg6IG51bWJlcjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbVNlcnZpY2U6IEVsZW1lbnRDb29yZCkge31cclxuXHRcclxuXHRwcml2YXRlIGFkZFNjcm9sbExpc3RlbmVyKHhDb29yZCkge1xyXG5cdFx0dmFyIHN0aWNreV9tZW51ID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSwgJ3Njcm9sbCcpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coT2JzZXJ2YWJsZSlcclxuXHRcdHN0aWNreV9tZW51XHJcblx0XHRcdC5tZXJnZUFsbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZG9lcyB0aGlzIHdvcms/Jyk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgSG9tZU1haW5Db21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
