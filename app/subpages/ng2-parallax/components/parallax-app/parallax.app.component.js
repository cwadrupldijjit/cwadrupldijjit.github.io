System.register(['angular2/core', 'angular2/router', '../../directives/ng2-parallax.directive', '../parallax-home/parallax-home.component', '../ts-examples/ts-examples.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ng2_parallax_directive_1, parallax_home_component_1, ts_examples_component_1;
    var ParallaxApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_parallax_directive_1_1) {
                ng2_parallax_directive_1 = ng2_parallax_directive_1_1;
            },
            function (parallax_home_component_1_1) {
                parallax_home_component_1 = parallax_home_component_1_1;
            },
            function (ts_examples_component_1_1) {
                ts_examples_component_1 = ts_examples_component_1_1;
            }],
        execute: function() {
            ParallaxApp = (function () {
                function ParallaxApp() {
                }
                ParallaxApp.prototype.ngOnInit = function () {
                    console.log("ParallaxAppComponent init");
                };
                ParallaxApp = __decorate([
                    core_1.Component({
                        selector: 'parallax-app'
                    }),
                    core_1.View({
                        templateUrl: 'app/subpages/ng2-parallax/components/parallax-app/parallax.app.template.html',
                        styleUrls: [
                            'app/styles/normalize.css',
                            'app/subpages/ng2-parallax/styles/beginning-stylesheet.css',
                            'app/subpages/ng2-parallax/styles/github-light.css',
                            'app/subpages/ng2-parallax/styles/parallax.styles.css'
                        ],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            ng2_parallax_directive_1.Parallax
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: parallax_home_component_1.ParallaxHome, as: 'ParallaxHome', useAsDefault: true },
                        { path: '/ts-examples', component: ts_examples_component_1.tsExamples, as: 'TsExamples' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ParallaxApp);
                return ParallaxApp;
            })();
            exports_1("ParallaxApp", ParallaxApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9jb21wb25lbnRzL3BhcmFsbGF4LWFwcC9wYXJhbGxheC5hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBhcmFsbGF4QXBwIiwiUGFyYWxsYXhBcHAuY29uc3RydWN0b3IiLCJQYXJhbGxheEFwcC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQUE7Z0JBeUJBQyxDQUFDQTtnQkFIQUQsOEJBQVFBLEdBQVJBO29CQUNDRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSwyQkFBMkJBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBeEJGRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxjQUFjQTtxQkFDeEJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsOEVBQThFQTt3QkFDM0ZBLFNBQVNBLEVBQUVBOzRCQUNWQSwwQkFBMEJBOzRCQUMxQkEsMkRBQTJEQTs0QkFDM0RBLG1EQUFtREE7NEJBQ25EQSxzREFBc0RBO3lCQUN0REE7d0JBQ0RBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBOzRCQUNqQkEsaUNBQVFBO3lCQUNSQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBTUEsU0FBU0EsRUFBRUEsc0NBQVlBLEVBQUdBLEVBQUVBLEVBQUVBLGNBQWNBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUVBO3dCQUNuRkEsRUFBRUEsSUFBSUEsRUFBRUEsY0FBY0EsRUFBRUEsU0FBU0EsRUFBRUEsa0NBQVVBLEVBQUdBLEVBQUVBLEVBQUVBLFlBQVlBLEVBQUVBO3FCQUNsRUEsQ0FBQ0E7O2dDQU1EQTtnQkFBREEsa0JBQUNBO1lBQURBLENBekJBLEFBeUJDQSxJQUFBO1lBRVEscUNBQVciLCJmaWxlIjoic3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtYXBwL3BhcmFsbGF4LmFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXHJcblx0XHQgVmlldyxcclxuXHRcdCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVDb25maWcsXHJcblx0XHQgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXJhbGxheCxcclxuXHRcdCBQYXJhbGxheENvbmZpZyB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbmcyLXBhcmFsbGF4LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4SG9tZSB9IGZyb20gJy4uL3BhcmFsbGF4LWhvbWUvcGFyYWxsYXgtaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0c0V4YW1wbGVzIH0gZnJvbSAnLi4vdHMtZXhhbXBsZXMvdHMtZXhhbXBsZXMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncGFyYWxsYXgtYXBwJ1xyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvc3VicGFnZXMvbmcyLXBhcmFsbGF4L2NvbXBvbmVudHMvcGFyYWxsYXgtYXBwL3BhcmFsbGF4LmFwcC50ZW1wbGF0ZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCdhcHAvc3R5bGVzL25vcm1hbGl6ZS5jc3MnLFxyXG5cdFx0J2FwcC9zdWJwYWdlcy9uZzItcGFyYWxsYXgvc3R5bGVzL2JlZ2lubmluZy1zdHlsZXNoZWV0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvZ2l0aHViLWxpZ2h0LmNzcycsXHJcblx0XHQnYXBwL3N1YnBhZ2VzL25nMi1wYXJhbGxheC9zdHlsZXMvcGFyYWxsYXguc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0UGFyYWxsYXhcclxuXHRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0eyBwYXRoOiAnLycsIFx0XHRcdCBjb21wb25lbnQ6IFBhcmFsbGF4SG9tZSwgXHRhczogJ1BhcmFsbGF4SG9tZScsXHR1c2VBc0RlZmF1bHQ6IHRydWUgfSxcclxuXHR7IHBhdGg6ICcvdHMtZXhhbXBsZXMnLCBjb21wb25lbnQ6IHRzRXhhbXBsZXMsIFx0YXM6ICdUc0V4YW1wbGVzJyB9XHJcbl0pXHJcblxyXG5jbGFzcyBQYXJhbGxheEFwcCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIlBhcmFsbGF4QXBwQ29tcG9uZW50IGluaXRcIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgeyBQYXJhbGxheEFwcCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
