/// <reference path="../../../../../typings/google.analytics/ga" />
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
                ParallaxHome.prototype.ngAfterContentInit = function () {
                    ga('send', 'pageview');
                };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiUGFyYWxsYXhIb21lIiwiUGFyYWxsYXhIb21lLmNvbnN0cnVjdG9yIiwiUGFyYWxsYXhIb21lLm5nQWZ0ZXJDb250ZW50SW5pdCJdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQW1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT25FO2dCQUFBQTtnQkFvQkFDLENBQUNBO2dCQUhBRCx5Q0FBa0JBLEdBQWxCQTtvQkFDT0UsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzNCQSxDQUFDQTtnQkFuQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLGVBQWVBO3FCQUN6QkEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSxnRkFBZ0ZBO3dCQUM3RkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLDJEQUEyREE7NEJBQzNEQSxtREFBbURBOzRCQUNuREEsc0RBQXNEQTs0QkFDdERBLDZFQUE2RUE7eUJBQzdFQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLHNDQUFVQTt5QkFDVkE7cUJBQ0RBLENBQUNBOztpQ0FNREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXBCQSxBQW9CQ0EsSUFBQTtZQUVRLHVDQUFZIiwiZmlsZSI6InN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vLi4vdHlwaW5ncy9nb29nbGUuYW5hbHl0aWNzL2dhXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LFxuXHRcdCBWaWV3LFxuICAgICAgICAgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgR2lzdFBhcnNlciB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbmcyLWdpc3QtcGFyc2VyLmRpcmVjdGl2ZSdcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFyYWxsYXgtaG9tZSdcbn0pXG5AVmlldyh7XG5cdHRlbXBsYXRlVXJsOiAnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS50ZW1wbGF0ZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2JlZ2lubmluZy1zdHlsZXNoZWV0LmNzcycsXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2dpdGh1Yi1saWdodC5jc3MnLFxuXHRcdCdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L3N0eWxlcy9wYXJhbGxheC5zdHlsZXMuY3NzJyxcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5zdHlsZXMuY3NzJ1xuXHRdLFxuXHRkaXJlY3RpdmVzOiBbXG5cdFx0R2lzdFBhcnNlclxuXHRdXG59KVxuXG5jbGFzcyBQYXJhbGxheEhvbWUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICBnYSgnc2VuZCcsICdwYWdldmlldycpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgUGFyYWxsYXhIb21lIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
