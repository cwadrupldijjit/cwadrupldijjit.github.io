System.register(['angular2/core', '../../directives/ng2-gist-parser.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_gist_parser_directive_1;
    var ParallaxHome;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_gist_parser_directive_1_1) {
                ng2_gist_parser_directive_1 = ng2_gist_parser_directive_1_1;
            }],
        execute: function() {
            ParallaxHome = (function () {
                function ParallaxHome() {
                }
                ParallaxHome = __decorate([
                    core_1.Component({
                        selector: 'parallax-home'
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/ng2-parallax/components/parallax-home/parallax-home.template.html',
                        styleUrls: [
                            'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
                            'app/subpages/ng2-parallax/styles/github-light.css',
                            'app/subpages/ng2-parallax/styles/parallax.styles.css',
                            'app/subpages/ng2-parallax/components/parallax-home/parallax-home.styles.css'
                        ],
                        directives: [
                            ng2_gist_parser_directive_1.GistParser
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParallaxHome);
                return ParallaxHome;
            })();
            exports_1("ParallaxHome", ParallaxHome);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUGFyYWxsYXhIb21lIiwiUGFyYWxsYXhIb21lLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBa0JBQyxDQUFDQTtnQkFsQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLGVBQWVBO3FCQUN6QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSxnRkFBZ0ZBO3dCQUM3RkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0RBQXNEQTs0QkFDdERBLDZFQUE2RUE7eUJBQzdFQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLHNDQUFVQTt5QkFDVkE7cUJBQ0RBLENBQUNBOztpQ0FJREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtZQUVRLHVDQUFZIiwiZmlsZSI6InN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXG5cdFx0IFZpZXcgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEdpc3RQYXJzZXIgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL25nMi1naXN0LXBhcnNlci5kaXJlY3RpdmUnXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BhcmFsbGF4LWhvbWUnXG59KVxuQFZpZXcoe1xuXHR0ZW1wbGF0ZVVybDogJ2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1ob21lL3BhcmFsbGF4LWhvbWUudGVtcGxhdGUuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9iZWdpbm5pbmctc3R5bGVzaGVldC5jc3MnLFxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9naXRodWItbGlnaHQuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvcGFyYWxsYXguc3R5bGVzLmNzcycsXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvY29tcG9uZW50cy9wYXJhbGxheC1ob21lL3BhcmFsbGF4LWhvbWUuc3R5bGVzLmNzcydcblx0XSxcblx0ZGlyZWN0aXZlczogW1xuXHRcdEdpc3RQYXJzZXJcblx0XVxufSlcblxuY2xhc3MgUGFyYWxsYXhIb21lIHtcblx0XG59XG5cbmV4cG9ydCB7IFBhcmFsbGF4SG9tZSB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
