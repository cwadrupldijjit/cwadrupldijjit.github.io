// ng2-parallax
System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var Parallax;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Parallax = (function () {
                function Parallax(element) {
                    var _this = this;
                    this.name = 'parallaxDirective';
                    // the following @Inputs are all part of the config object, which for 
                    // brevity's sake, you can do a bunch of operations in bulk by passing 
                    // in the config object; caveat for this is that angular 2 won't permit 
                    // more than 9 keys being passed in an object via the template
                    this.cssKey = 'backgroundPosition';
                    this.parallaxCss = 'backgroundPositionY';
                    this.parallaxAxis = 'Y';
                    this.parallaxRatio = -.7;
                    this.parallaxInitVal = 0;
                    this.parallaxIf = true;
                    this.cssUnit = 'px';
                    this.cb_context = null;
                    this.cb_args = [];
                    this.parallaxStyles = {};
                    this.isSpecialVal = false;
                    this.evaluateScroll = function () {
                        if (_this.parallaxIf) {
                            var resultVal;
                            var calcVal;
                            if (_this.scrollElement instanceof Window)
                                calcVal = _this.scrollElement.scrollY * _this.parallaxRatio + _this.parallaxInitVal;
                            else
                                calcVal = _this.scrollElement.scrollTop * _this.parallaxRatio + _this.parallaxInitVal;
                            if (_this.maxValue !== undefined && calcVal >= _this.maxValue)
                                calcVal = _this.maxValue;
                            else if (_this.minValue !== undefined && calcVal <= _this.minValue)
                                calcVal = _this.minValue;
                            // added after realizing original setup wasn't compatible in Firefox
                            // debugger;
                            if (_this.cssKey === 'backgroundPosition') {
                                if (_this.parallaxAxis === 'X') {
                                    resultVal = calcVal + _this.cssUnit + ' 0';
                                }
                                else {
                                    resultVal = '0 ' + calcVal + _this.cssUnit;
                                }
                            }
                            else if (_this.isSpecialVal) {
                                resultVal = _this.cssValue + '(' + calcVal + _this.cssUnit + ')';
                            }
                            else {
                                resultVal = calcVal + _this.cssUnit;
                            }
                            if (_this.cb) {
                                // console.log('this should be running')
                                _this.cb.apply(_this.cb_context, _this.cb_args);
                            }
                            _this.parallaxElement.style[_this.cssKey] = resultVal;
                        }
                    };
                    this.hostElement = element.nativeElement;
                }
                Parallax.prototype.ngOnInit = function () {
                    var cssValArray;
                    // console.log('%s initialized on element', this.name, this.hostElement);
                    // console.log(this);
                    for (var prop in this.config) {
                        this[prop] = this.config[prop];
                    }
                    this.parallaxCss = this.parallaxCss ? this.parallaxCss : 'backgroundPositionY';
                    if (this.parallaxCss.match(/backgroundPosition/i)) {
                        if (this.parallaxCss.split('backgroundPosition')[1].toUpperCase() === 'X') {
                            this.parallaxAxis = 'X';
                        }
                        this.parallaxCss = 'backgroundPosition';
                    }
                    cssValArray = this.parallaxCss.split(':');
                    this.cssKey = cssValArray[0];
                    this.cssValue = cssValArray[1];
                    this.isSpecialVal = this.cssValue ? true : false;
                    if (!this.cssValue)
                        this.cssValue = this.cssKey;
                    this.parallaxRatio = +this.parallaxRatio;
                    this.parallaxInitVal = +this.parallaxInitVal;
                    this.parallaxElement = this.parallaxElement || this.hostElement;
                    if (!this.scrollElement) {
                        if (document.getElementById('parallaxScroll'))
                            this.scrollElement = document.getElementById('parallaxScroll');
                        else if (this.scrollerId) {
                            try {
                                this.scrollElement = document.getElementById(this.scrollerId);
                                if (!this.scrollElement)
                                    throw ("The ID passed through the parallaxConfig ('" + this.scrollerId + "') object was not found in the document.  Defaulting to tracking the scrolling of the window.");
                            }
                            catch (e) {
                                console.warn(e);
                                this.scrollElement = window;
                            }
                        }
                        else
                            this.scrollElement = window;
                    }
                    this.evaluateScroll();
                    this.scrollElement.addEventListener('scroll', this.evaluateScroll.bind(this));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "config");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "cssKey");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "parallaxCss");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "parallaxAxis");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "parallaxRatio");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "parallaxInitVal");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "parallaxIf");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "scrollerId");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "maxValue");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "minValue");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "cssUnit");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "cb");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "cb_context");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Parallax.prototype, "cb_args");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "scrollElement");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', HTMLElement)
                ], Parallax.prototype, "parallaxElement");
                Parallax = __decorate([
                    core_1.Directive({
                        selector: '[parallax]'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], Parallax);
                return Parallax;
                var _a;
            })();
            exports_1("Parallax", Parallax);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9kaXJlY3RpdmVzL25nMi1wYXJhbGxheC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiUGFyYWxsYXgiLCJQYXJhbGxheC5jb25zdHJ1Y3RvciIsIlBhcmFsbGF4Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5RWY7Z0JBd0hJQSxrQkFBWUEsT0FBbUJBO29CQXhIbkNDLGlCQTJIQ0E7b0JBdEhBQSxTQUFJQSxHQUFXQSxtQkFBbUJBLENBQUNBO29CQUduQ0Esc0VBQXNFQTtvQkFDdEVBLHVFQUF1RUE7b0JBQ3ZFQSx3RUFBd0VBO29CQUN4RUEsOERBQThEQTtvQkFDbERBLFdBQU1BLEdBQVdBLG9CQUFvQkEsQ0FBQ0E7b0JBQ3pDQSxnQkFBV0EsR0FBV0EscUJBQXFCQSxDQUFDQTtvQkFDNUNBLGlCQUFZQSxHQUFXQSxHQUFHQSxDQUFDQTtvQkFDeEJBLGtCQUFhQSxHQUFXQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDNUJBLG9CQUFlQSxHQUFXQSxDQUFDQSxDQUFDQTtvQkFDL0JBLGVBQVVBLEdBQVFBLElBQUlBLENBQUNBO29CQUl2QkEsWUFBT0EsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBRXZCQSxlQUFVQSxHQUFRQSxJQUFJQSxDQUFDQTtvQkFDdkJBLFlBQU9BLEdBQVVBLEVBQUVBLENBQUNBO29CQUU3QkEsbUJBQWNBLEdBQU9BLEVBQUVBLENBQUNBO29CQUdiQSxpQkFBWUEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBTWpDQSxtQkFBY0EsR0FBR0E7d0JBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDckJBLElBQUlBLFNBQWlCQSxDQUFDQTs0QkFDdEJBLElBQUlBLE9BQWVBLENBQUNBOzRCQUVwQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsYUFBYUEsWUFBWUEsTUFBTUEsQ0FBQ0E7Z0NBQ3hDQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxLQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTs0QkFDbEZBLElBQUlBO2dDQUNIQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxLQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTs0QkFFcEZBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFFBQVFBLEtBQUtBLFNBQVNBLElBQUlBLE9BQU9BLElBQUlBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBO2dDQUMzREEsT0FBT0EsR0FBR0EsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7NEJBQ3pCQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxRQUFRQSxLQUFLQSxTQUFTQSxJQUFJQSxPQUFPQSxJQUFJQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTtnQ0FDaEVBLE9BQU9BLEdBQUdBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBOzRCQUV6QkEsb0VBQW9FQTs0QkFDcEVBLFlBQVlBOzRCQUNaQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxNQUFNQSxLQUFLQSxvQkFBb0JBLENBQUNBLENBQUNBLENBQUNBO2dDQUMxQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsWUFBWUEsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0NBQy9CQSxTQUFTQSxHQUFHQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtnQ0FDM0NBLENBQUNBO2dDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQ0FDUEEsU0FBU0EsR0FBR0EsSUFBSUEsR0FBR0EsT0FBT0EsR0FBR0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7Z0NBQzNDQSxDQUFDQTs0QkFDRkEsQ0FBQ0E7NEJBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBO2dDQUM5QkEsU0FBU0EsR0FBR0EsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsT0FBT0EsR0FBR0EsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsR0FBR0EsQ0FBQ0E7NEJBQ2hFQSxDQUFDQTs0QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NBQ1BBLFNBQVNBLEdBQUdBLE9BQU9BLEdBQUdBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBOzRCQUNwQ0EsQ0FBQ0E7NEJBRURBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dDQUNiQSx3Q0FBd0NBO2dDQUN4Q0EsS0FBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7NEJBQzlDQSxDQUFDQTs0QkFFREEsS0FBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsU0FBU0EsQ0FBQ0E7d0JBQ3JEQSxDQUFDQTtvQkFDRkEsQ0FBQ0EsQ0FBQUE7b0JBa0RBQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDdkNBLENBQUNBO2dCQWpESkQsMkJBQVFBLEdBQVJBO29CQUNDRSxJQUFJQSxXQUFxQkEsQ0FBQ0E7b0JBRTFCQSx5RUFBeUVBO29CQUN6RUEscUJBQXFCQTtvQkFFckJBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFBQ0EsQ0FBQ0E7b0JBQ2pFQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxxQkFBcUJBLENBQUNBO29CQUMvRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDbkRBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsV0FBV0EsRUFBRUEsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQzNFQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDekJBLENBQUNBO3dCQUVEQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxvQkFBb0JBLENBQUNBO29CQUN6Q0EsQ0FBQ0E7b0JBRUtBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUMxQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzdCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFL0JBLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO29CQUNqREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO29CQUVoREEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7b0JBQ3pDQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTtvQkFFbkRBLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLElBQUlBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO29CQUNoRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3pCQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBOzRCQUM3Q0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTt3QkFDaEVBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBOzRCQUMxQkEsSUFBSUEsQ0FBQ0E7Z0NBQ0pBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO2dDQUM5REEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7b0NBQ3ZCQSxNQUFLQSxDQUFDQSxnREFBOENBLElBQUlBLENBQUNBLFVBQVVBLGtHQUErRkEsQ0FBQ0EsQ0FBQ0E7NEJBQ3RLQSxDQUFFQTs0QkFBQUEsS0FBS0EsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0NBQ1hBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUNoQkEsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsTUFBTUEsQ0FBQ0E7NEJBQzdCQSxDQUFDQTt3QkFDRkEsQ0FBQ0E7d0JBQUNBLElBQUlBOzRCQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxNQUFNQSxDQUFDQTtvQkFDcENBLENBQUNBO29CQUVEQSxJQUFJQSxDQUFDQSxjQUFjQSxFQUFFQSxDQUFDQTtvQkFFdEJBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9FQSxDQUFDQTtnQkEvR0VGO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLDRCQUFNQSxFQUFpQkE7Z0JBS2hDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw0QkFBTUEsRUFBZ0NBO2dCQUNsREE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsaUNBQVdBLEVBQWlDQTtnQkFDckRBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLGtDQUFZQSxFQUFlQTtnQkFDakNBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLG1DQUFhQSxFQUFlQTtnQkFDckNBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLHFDQUFlQSxFQUFhQTtnQkFDeENBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLGdDQUFVQSxFQUFhQTtnQkFDaENBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLGdDQUFVQSxFQUFTQTtnQkFDNUJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLDhCQUFRQSxFQUFTQTtnQkFDMUJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLDhCQUFRQSxFQUFTQTtnQkFDMUJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLDZCQUFPQSxFQUFnQkE7Z0JBQ2hDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSx3QkFBRUEsRUFBQ0E7Z0JBQ1pBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLGdDQUFVQSxFQUFhQTtnQkFDaENBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLDZCQUFPQSxFQUFhQTtnQkFRN0JBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLG1DQUFhQSxFQUFNQTtnQkFDNUJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLHFDQUFlQSxFQUFjQTtnQkFqQ3ZDQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxZQUFZQTtxQkFDekJBLENBQUNBOzs2QkF5SERBO2dCQUFEQSxlQUFDQTs7WUFBREEsQ0EzSEEsQUEySENBLElBQUE7WUFHUSwrQkFBUSIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvZGlyZWN0aXZlcy9uZzItcGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmcyLXBhcmFsbGF4XHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFxyXG5cdFx0IEVsZW1lbnRSZWYsIFxyXG5cdFx0IEhvc3QsIFxyXG5cdFx0IElucHV0LFxyXG5cdFx0IE9wdGlvbmFsLCBcclxuXHRcdCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbi8qIFxyXG5UaGVzZSBhcmUgb3B0aW9uYWwgdmFsdWVzIHlvdSBjYW4gaW5jbHVkZSBpbiB0aGUgY29uZmlnIG9iamVjdCB5b3UgY2FuIHBhc3MgaW50byB0aGUgXHJcbmRpcmVjdGl2ZSBmb3IgY3VzdG9tIHByb3BlcnRpZXMgeW91IHdhbnQgdG8gdXNlIHRoaXMgd2l0aC4gIFRoaXMgdG9vbCBjYW4gYmUgdXNlZCBmb3IgXHJcbm1vcmUgdGhhbiBqdXN0IHRoZSBwYXJhbGxheCBlZmZlY3QsIGFuZCBpdCBpcyBhYmxlIHRvIHRyYW5zZm9ybSBhbnl0aGluZyBhYm91dCB0aGUgXHJcbltwYXJhbGxheEVsZW1lbnRdIHRoYXQgeW91IHdhbnQgdG8gaGF2ZSBib3VuZCB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBuZXN0ZWQgZWxlbWVudC4gIFxyXG5cclxuKi9cclxuaW50ZXJmYWNlIFBhcmFsbGF4Q29uZmlnIHtcclxuXHQvLyB0aGUgY3NzIHByb3BlcnR5IChjb252ZXJ0ZWQgdG8gY2FtZWxDYXNlKSB0aGF0IHlvdSB3YW50IGNoYW5nZWQgYWxvbmcgd2l0aCB0aGVcclxuXHQvLyB2YWx1ZSB5b3Ugd2FudCB0byBhc3NpZ24gdG8gdGhlIGNzcyBrZXk7IHlvdSBzaG91bGQgdXNlIFBhcmFsbGF4Q3NzIGlmIHlvdSdyZSBcclxuXHQvLyBqdXN0IGRlZmluaW5nIG9uZSBwcm9wZXJ0eSB3aXRob3V0IHNwZWNpYWwgdmFsdWVzXHJcblx0Y3NzS2V5Pzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIHRoaXMgaXMgdXNlZCB0byBkZWZpbmUgdGhlIGNzcyBwcm9wZXJ0eSB5b3UnZCBsaWtlIHRvIG1vZGlmeSBhcyB5b3Ugc2Nyb2xsXHJcblx0Ly8gZGVmYXVsdCBpcyBiYWNrZ3JvdW5kUG9zaXRpb25ZXHJcblx0cGFyYWxsYXhDc3M/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gcmF0aW8gZGVmaW5pbmcgaG93IGZhc3QsIHNsb3csIG9yIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNoYW5nZXMgb24gc2Nyb2xsaW5nXHJcblx0cGFyYWxsYXhSYXRpbz86IG51bWJlcjtcclxuXHRcclxuXHQvLyB0aGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIGluIHBpeGVscyBmb3IgdGhlIHBhcmFsbGF4Q3NzIHByb3BlcnR5IHlvdSBkZWZpbmVkXHJcblx0Ly8gYmVmb3JlIG9yLCBpZiB5b3UgZGlkbid0IGRlZmluZSBvbmUsIGl0IGRlZmF1bHRzIHRvIDBcclxuXHRwYXJhbGxheEluaXRWYWw/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdXNlIHRoaXMgaWYgeW91IHdhbnQgdGhlIHBhcmFsbGF4IGVmZmVjdCBvbmx5IGlmIHRoZSBwYXNzZWQgaW4gc3RhdGVtZW50IGlzIFxyXG5cdC8vIHRydXRoeTsgZGVmYXVsdCBpcyBib29sZWFuIHRydWVcclxuXHRwYXJhbGxheElmPzogYW55O1xyXG5cdFxyXG5cdC8vIHRoZSBpZCBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIHBhZ2UgeW91J2QgbGlrZSB0byB0cmFjayB0aGUgc2Nyb2xsaW5nIG9mIGluIHRoZSBcclxuXHQvLyBjYXNlIHdoZXJlIHRoZSBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50OyBcclxuXHQvLyBpZiBubyBpZCBpcyBkZWZpbmVkIGFsb25nIHdpdGggbm8gc2Nyb2xsRWxlbWVudCBiZWxvdywgXHJcblx0Ly8gaXQgZGVmYXVsdHMgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgYm9keVxyXG5cdHNjcm9sbGVySWQ/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gdGhlIHVwcGVyIGNvbnN0cmFpbnQgZm9yIHRoZSBjc3MgdHJhbnNmb3JtYXRpb25cclxuXHRtYXhWYWx1ZT86IG51bWJlcjtcclxuXHRcclxuXHQvLyB0aGUgbG93ZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxyXG5cdG1pblZhbHVlPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoZSB1bml0IChlLmcuICdweCcsICdlbScsICclJywgJ3ZoJywgZXRjLikgeW91IHdhbnQgZm9yIHRoZSBwYXJhbGxheCBlZmZlY3QgdG8gdXNlIFxyXG5cdGNzc1VuaXQ/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gdGhlIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50IHRoYXQgeW91J2QgbGlrZSB0aGUgZGlyZWN0aXZlIHRvIHRyYWNrIGl0cyBcclxuXHQvLyBwb3NpdGlvbiBhcyBpdCBzY3JvbGxzOyAgZ2V0cyBhc3NpZ25lZCB0byB0aGUgYm9keSBpZiBub3RoaW5nIGlzIGRlZmluZWRcclxuXHRzY3JvbGxFbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0Ly8gdGhlIGVsZW1lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBlZmZlY3RzIGZyb20gc2Nyb2xsaW5nIHRoZSBzY3JvbGxFbGVtZW50IGFwcGxpZWQgXHJcblx0Ly8gdG87IGVzc2VudGlhbGx5IHRoZSBlbGVtZW50IHRoYXQgbW92ZXMgYXMgeW91IHNjcm9sbFxyXG5cdHBhcmFsbGF4RWxlbWVudD86IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdC8vIHdoYXQgeW91IHdhbnQgdG8gY2FsbCBpdCB0byBmaW5kIHRoZSBwYXJ0aWN1bGFyIGluc3RhbmNlIG9mIGl0IGlmIHlvdSBuZWVkIHRvIGRlYnVnXHJcblx0bmFtZT86IHN0cmluZztcclxuXHRcclxuXHQvLyBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBhY3Rpb25zIGR1cmluZyBzY2FsaW5nXHJcblx0Y2I/KCk6IHZvaWQ7XHJcblx0XHJcblx0Ly8gYXJndW1lbnRzIGZvciBvcHRpb25hbCBjYWxsYmFjayBlbnRlcmVkIGludG8gYW4gYXJyYXk7IGZvciBjb250ZXh0LXNwZWNpZmljIFxyXG5cdGNiX2FyZ3M/OiBhbnlbXTtcclxuXHRcclxuXHQvLyBjYWxsYmFjayBjb250ZXh0IGluIHRoZSBjYXNlIHdoZXJlIHRoZSBjYWxsYmFjayBpcyBjb250ZXh0LXNwZWNpZmljXHJcblx0Y2JfY29udGV4dD86IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1twYXJhbGxheF0nXHJcbn0pXHJcblxyXG5jbGFzcyBQYXJhbGxheCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0bmFtZTogc3RyaW5nID0gJ3BhcmFsbGF4RGlyZWN0aXZlJztcclxuXHRcclxuICAgIEBJbnB1dCgpIGNvbmZpZzogUGFyYWxsYXhDb25maWc7XHJcblx0Ly8gdGhlIGZvbGxvd2luZyBASW5wdXRzIGFyZSBhbGwgcGFydCBvZiB0aGUgY29uZmlnIG9iamVjdCwgd2hpY2ggZm9yIFxyXG5cdC8vIGJyZXZpdHkncyBzYWtlLCB5b3UgY2FuIGRvIGEgYnVuY2ggb2Ygb3BlcmF0aW9ucyBpbiBidWxrIGJ5IHBhc3NpbmcgXHJcblx0Ly8gaW4gdGhlIGNvbmZpZyBvYmplY3Q7IGNhdmVhdCBmb3IgdGhpcyBpcyB0aGF0IGFuZ3VsYXIgMiB3b24ndCBwZXJtaXQgXHJcblx0Ly8gbW9yZSB0aGFuIDkga2V5cyBiZWluZyBwYXNzZWQgaW4gYW4gb2JqZWN0IHZpYSB0aGUgdGVtcGxhdGVcclxuICAgIEBJbnB1dCgpIGNzc0tleTogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XHJcblx0QElucHV0KCkgcGFyYWxsYXhDc3M6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcclxuXHRASW5wdXQoKSBwYXJhbGxheEF4aXM6IHN0cmluZyA9ICdZJztcclxuICAgIEBJbnB1dCgpIHBhcmFsbGF4UmF0aW86IG51bWJlciA9IC0uNztcclxuICAgIEBJbnB1dCgpIHBhcmFsbGF4SW5pdFZhbDogbnVtYmVyID0gMDtcclxuXHRASW5wdXQoKSBwYXJhbGxheElmOiBhbnkgPSB0cnVlO1xyXG5cdEBJbnB1dCgpIHNjcm9sbGVySWQ6IHN0cmluZztcclxuXHRASW5wdXQoKSBtYXhWYWx1ZTogbnVtYmVyO1xyXG5cdEBJbnB1dCgpIG1pblZhbHVlOiBudW1iZXI7XHJcblx0QElucHV0KCkgY3NzVW5pdDogc3RyaW5nID0gJ3B4JztcclxuXHRASW5wdXQoKSBjYjtcclxuXHRASW5wdXQoKSBjYl9jb250ZXh0OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpIGNiX2FyZ3M6IGFueVtdID0gW107XHJcblx0XHJcblx0cGFyYWxsYXhTdHlsZXM6IHt9ID0ge307XHJcblx0XHJcbiAgICBwcml2YXRlIGNzc1ZhbHVlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGlzU3BlY2lhbFZhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFxyXG5cdHByaXZhdGUgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdEBJbnB1dCgpIHNjcm9sbEVsZW1lbnQ6IGFueTtcclxuXHRASW5wdXQoKSBwYXJhbGxheEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdHByaXZhdGUgZXZhbHVhdGVTY3JvbGwgPSAoKSA9PiB7XHJcblx0XHRpZiAodGhpcy5wYXJhbGxheElmKSB7XHJcblx0XHRcdGxldCByZXN1bHRWYWw6IHN0cmluZztcclxuXHRcdFx0bGV0IGNhbGNWYWw6IG51bWJlcjtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh0aGlzLnNjcm9sbEVsZW1lbnQgaW5zdGFuY2VvZiBXaW5kb3cpXHJcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxZICogdGhpcy5wYXJhbGxheFJhdGlvICsgdGhpcy5wYXJhbGxheEluaXRWYWw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCAqIHRoaXMucGFyYWxsYXhSYXRpbyArIHRoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHRoaXMubWF4VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjYWxjVmFsID49IHRoaXMubWF4VmFsdWUpXHJcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWF4VmFsdWU7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMubWluVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjYWxjVmFsIDw9IHRoaXMubWluVmFsdWUpXHJcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWluVmFsdWU7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBhZGRlZCBhZnRlciByZWFsaXppbmcgb3JpZ2luYWwgc2V0dXAgd2Fzbid0IGNvbXBhdGlibGUgaW4gRmlyZWZveFxyXG5cdFx0XHQvLyBkZWJ1Z2dlcjtcclxuXHRcdFx0aWYgKHRoaXMuY3NzS2V5ID09PSAnYmFja2dyb3VuZFBvc2l0aW9uJykge1xyXG5cdFx0XHRcdGlmICh0aGlzLnBhcmFsbGF4QXhpcyA9PT0gJ1gnKSB7XHJcblx0XHRcdFx0XHRyZXN1bHRWYWwgPSBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyAwJztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0VmFsID0gJzAgJyArIGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuaXNTcGVjaWFsVmFsKSB7XHJcblx0XHRcdFx0cmVzdWx0VmFsID0gdGhpcy5jc3NWYWx1ZSArICcoJyArIGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnKSc7XHJcblx0XHRcdH0gZWxzZSB7IFxyXG5cdFx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmICh0aGlzLmNiKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoaXMgc2hvdWxkIGJlIHJ1bm5pbmcnKVxyXG5cdFx0XHRcdHRoaXMuY2IuYXBwbHkodGhpcy5jYl9jb250ZXh0LCB0aGlzLmNiX2FyZ3MpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudC5zdHlsZVt0aGlzLmNzc0tleV0gPSByZXN1bHRWYWw7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0bGV0IGNzc1ZhbEFycmF5OiBzdHJpbmdbXTtcclxuXHRcdFxyXG5cdFx0Ly8gY29uc29sZS5sb2coJyVzIGluaXRpYWxpemVkIG9uIGVsZW1lbnQnLCB0aGlzLm5hbWUsIHRoaXMuaG9zdEVsZW1lbnQpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcyk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHByb3AgaW4gdGhpcy5jb25maWcpIHsgdGhpc1twcm9wXSA9IHRoaXMuY29uZmlnW3Byb3BdOyB9XHJcblx0XHR0aGlzLnBhcmFsbGF4Q3NzID0gdGhpcy5wYXJhbGxheENzcyA/IHRoaXMucGFyYWxsYXhDc3MgOiAnYmFja2dyb3VuZFBvc2l0aW9uWSc7XHJcblx0XHRpZiAodGhpcy5wYXJhbGxheENzcy5tYXRjaCgvYmFja2dyb3VuZFBvc2l0aW9uL2kpKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCdiYWNrZ3JvdW5kUG9zaXRpb24nKVsxXS50b1VwcGVyQ2FzZSgpID09PSAnWCcpIHtcclxuXHRcdFx0XHR0aGlzLnBhcmFsbGF4QXhpcyA9ICdYJztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5wYXJhbGxheENzcyA9ICdiYWNrZ3JvdW5kUG9zaXRpb24nO1xyXG5cdFx0fVxyXG5cdFx0XHJcbiAgICAgICAgY3NzVmFsQXJyYXkgPSB0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgdGhpcy5jc3NLZXkgPSBjc3NWYWxBcnJheVswXTtcclxuICAgICAgICB0aGlzLmNzc1ZhbHVlID0gY3NzVmFsQXJyYXlbMV07XHJcblx0XHRcclxuICAgICAgICB0aGlzLmlzU3BlY2lhbFZhbCA9IHRoaXMuY3NzVmFsdWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNzc1ZhbHVlKSB0aGlzLmNzc1ZhbHVlID0gdGhpcy5jc3NLZXk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnBhcmFsbGF4UmF0aW8gPSArdGhpcy5wYXJhbGxheFJhdGlvO1xyXG4gICAgICAgIHRoaXMucGFyYWxsYXhJbml0VmFsID0gK3RoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudCA9IHRoaXMucGFyYWxsYXhFbGVtZW50IHx8IHRoaXMuaG9zdEVsZW1lbnQ7XHJcblx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudCkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJykpXHJcblx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJyk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuc2Nyb2xsZXJJZCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNjcm9sbGVySWQpO1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpXHJcblx0XHRcdFx0XHRcdHRocm93KGBUaGUgSUQgcGFzc2VkIHRocm91Z2ggdGhlIHBhcmFsbGF4Q29uZmlnICgnJHt0aGlzLnNjcm9sbGVySWR9Jykgb2JqZWN0IHdhcyBub3QgZm91bmQgaW4gdGhlIGRvY3VtZW50LiAgRGVmYXVsdGluZyB0byB0cmFja2luZyB0aGUgc2Nyb2xsaW5nIG9mIHRoZSB3aW5kb3cuYCk7XHJcblx0XHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSB3aW5kb3c7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgdGhpcy5zY3JvbGxFbGVtZW50ID0gd2luZG93O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLmV2YWx1YXRlU2Nyb2xsKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmV2YWx1YXRlU2Nyb2xsLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMuaG9zdEVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhDb25maWcgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
