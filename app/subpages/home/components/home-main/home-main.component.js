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
                    if (window.location.host.match(/localhost/i) || window.location.host.match(/192.168/i)) {
                        console.log('browsing locally');
                    }
                    else {
                        ga('send', 'pageview');
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLW1haW4vaG9tZS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJIb21lTWFpbkNvbXBvbmVudCIsIkhvbWVNYWluQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiSG9tZU1haW5Db21wb25lbnQubmdBZnRlckNvbnRlbnRJbml0Il0sIm1hcHBpbmdzIjoiQUFBQSxtRUFBbUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNbkUsd0JBQXdCO1lBRXhCO2dCQUFBQTtnQkFvQkFDLENBQUNBO2dCQVBBRCw4Q0FBa0JBLEdBQWxCQTtvQkFDQ0UsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3hGQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBO29CQUNqQ0EsQ0FBQ0E7b0JBQUNBLElBQUlBLENBQUNBLENBQUNBO3dCQUNQQSxFQUFFQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxDQUFDQSxDQUFDQTtvQkFDeEJBLENBQUNBO2dCQUNDQSxDQUFDQTtnQkFuQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLFdBQVdBO3FCQUNyQkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFHQSxnRUFBZ0VBO3dCQUM5RUEsU0FBU0EsRUFBR0E7NEJBQ1hBLDBCQUEwQkE7NEJBQzFCQSxxQkFBcUJBOzRCQUNyQkEsbUNBQW1DQTt5QkFDbkNBO3FCQUNEQSxDQUFDQTs7c0NBVURBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0FwQkEsQUFvQkNBLElBQUE7WUFFUSxpREFBaUIiLCJmaWxlIjoic3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtbWFpbi9ob21lLW1haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvZ29vZ2xlLmFuYWx5dGljcy9nYVwiIC8+XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsXHJcblx0XHQgVmlldyxcclxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7IH0gZnJvbSAnLi4vJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdob21lLW1haW4nXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybCA6ICdhcHAvc3VicGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUtbWFpbi9ob21lLW1haW4udGVtcGxhdGUuaHRtbCcsXHJcblx0c3R5bGVVcmxzIDogW1xyXG5cdFx0J2FwcC9zdHlsZXMvbm9ybWFsaXplLmNzcycsXHJcblx0XHQnYXBwL3N0eWxlcy9tYWluLmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL2hvbWUvc3R5bGVzL21haW4uY3NzJ1xyXG5cdF1cclxufSlcclxuXHJcbmNsYXNzIEhvbWVNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0Lm1hdGNoKC9sb2NhbGhvc3QvaSkgfHwgd2luZG93LmxvY2F0aW9uLmhvc3QubWF0Y2goLzE5Mi4xNjgvaSkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2Jyb3dzaW5nIGxvY2FsbHknKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEhvbWVNYWluQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
