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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUGFyYWxsYXhIb21lIiwiUGFyYWxsYXhIb21lLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBa0JBQyxDQUFDQTtnQkFsQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLGVBQWVBO3FCQUN6QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSxnRkFBZ0ZBO3dCQUM3RkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0RBQXNEQTs0QkFDdERBLDZFQUE2RUE7eUJBQzdFQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLHNDQUFVQTt5QkFDVkE7cUJBQ0RBLENBQUNBOztpQ0FJREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtZQUVRLHVDQUFZIiwiZmlsZSI6InN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXHJcblx0XHQgVmlldyB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBHaXN0UGFyc2VyIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9uZzItZ2lzdC1wYXJzZXIuZGlyZWN0aXZlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdwYXJhbGxheC1ob21lJ1xyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtaG9tZS9wYXJhbGxheC1ob21lLnRlbXBsYXRlLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2JlZ2lubmluZy1zdHlsZXNoZWV0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvZ2l0aHViLWxpZ2h0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvcGFyYWxsYXguc3R5bGVzLmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5zdHlsZXMuY3NzJ1xyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0R2lzdFBhcnNlclxyXG5cdF1cclxufSlcclxuXHJcbmNsYXNzIFBhcmFsbGF4SG9tZSB7XHJcblx0XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBhcmFsbGF4SG9tZSB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
