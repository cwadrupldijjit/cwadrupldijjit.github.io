// ng2-parallax
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
                ], Parallax.prototype, "config", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "cssKey", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "parallaxCss", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "parallaxAxis", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "parallaxRatio", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "parallaxInitVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "parallaxIf", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "scrollerId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "maxValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "minValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "cssUnit", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "cb", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "cb_context", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Parallax.prototype, "cb_args", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "scrollElement", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', HTMLElement)
                ], Parallax.prototype, "parallaxElement", void 0);
                Parallax = __decorate([
                    core_1.Directive({
                        selector: '[parallax]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Parallax);
                return Parallax;
            })();
            exports_1("Parallax", Parallax);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL25nMi1wYXJhbGxheC9kaXJlY3RpdmVzL25nMi1wYXJhbGxheC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiUGFyYWxsYXgiLCJQYXJhbGxheC5jb25zdHJ1Y3RvciIsIlBhcmFsbGF4Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUVmO2dCQXdISUEsa0JBQVlBLE9BQW1CQTtvQkF4SG5DQyxpQkEySENBO29CQXRIQUEsU0FBSUEsR0FBV0EsbUJBQW1CQSxDQUFDQTtvQkFHbkNBLHNFQUFzRUE7b0JBQ3RFQSx1RUFBdUVBO29CQUN2RUEsd0VBQXdFQTtvQkFDeEVBLDhEQUE4REE7b0JBQ2xEQSxXQUFNQSxHQUFXQSxvQkFBb0JBLENBQUNBO29CQUN6Q0EsZ0JBQVdBLEdBQVdBLHFCQUFxQkEsQ0FBQ0E7b0JBQzVDQSxpQkFBWUEsR0FBV0EsR0FBR0EsQ0FBQ0E7b0JBQ3hCQSxrQkFBYUEsR0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBQzVCQSxvQkFBZUEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7b0JBQy9CQSxlQUFVQSxHQUFRQSxJQUFJQSxDQUFDQTtvQkFJdkJBLFlBQU9BLEdBQVdBLElBQUlBLENBQUNBO29CQUV2QkEsZUFBVUEsR0FBUUEsSUFBSUEsQ0FBQ0E7b0JBQ3ZCQSxZQUFPQSxHQUFVQSxFQUFFQSxDQUFDQTtvQkFFN0JBLG1CQUFjQSxHQUFPQSxFQUFFQSxDQUFDQTtvQkFHYkEsaUJBQVlBLEdBQVlBLEtBQUtBLENBQUNBO29CQU1qQ0EsbUJBQWNBLEdBQUdBO3dCQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3JCQSxJQUFJQSxTQUFpQkEsQ0FBQ0E7NEJBQ3RCQSxJQUFJQSxPQUFlQSxDQUFDQTs0QkFFcEJBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLGFBQWFBLFlBQVlBLE1BQU1BLENBQUNBO2dD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Q0FBYUEsVUFBTUE7Z0JBQzVCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSxxQ0FBZUEsVUFBY0E7Z0JBakN2Q0E7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7cUJBQ3pCQSxDQUFDQTs7NkJBeUhEQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0EzSEEsQUEySENBLElBQUE7WUFHUSwrQkFBUSIsImZpbGUiOiJzdWJwYWdlcy9uZzItcGFyYWxsYXgvZGlyZWN0aXZlcy9uZzItcGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmcyLXBhcmFsbGF4XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgXG5cdFx0IEVsZW1lbnRSZWYsIFxuXHRcdCBIb3N0LCBcblx0XHQgSW5wdXQsXG5cdFx0IE9wdGlvbmFsLCBcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbi8qIFxuVGhlc2UgYXJlIG9wdGlvbmFsIHZhbHVlcyB5b3UgY2FuIGluY2x1ZGUgaW4gdGhlIGNvbmZpZyBvYmplY3QgeW91IGNhbiBwYXNzIGludG8gdGhlIFxuZGlyZWN0aXZlIGZvciBjdXN0b20gcHJvcGVydGllcyB5b3Ugd2FudCB0byB1c2UgdGhpcyB3aXRoLiAgVGhpcyB0b29sIGNhbiBiZSB1c2VkIGZvciBcbm1vcmUgdGhhbiBqdXN0IHRoZSBwYXJhbGxheCBlZmZlY3QsIGFuZCBpdCBpcyBhYmxlIHRvIHRyYW5zZm9ybSBhbnl0aGluZyBhYm91dCB0aGUgXG5bcGFyYWxsYXhFbGVtZW50XSB0aGF0IHlvdSB3YW50IHRvIGhhdmUgYm91bmQgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgbmVzdGVkIGVsZW1lbnQuICBcblxuKi9cbmludGVyZmFjZSBQYXJhbGxheENvbmZpZyB7XG5cdC8vIHRoZSBjc3MgcHJvcGVydHkgKGNvbnZlcnRlZCB0byBjYW1lbENhc2UpIHRoYXQgeW91IHdhbnQgY2hhbmdlZCBhbG9uZyB3aXRoIHRoZVxuXHQvLyB2YWx1ZSB5b3Ugd2FudCB0byBhc3NpZ24gdG8gdGhlIGNzcyBrZXk7IHlvdSBzaG91bGQgdXNlIFBhcmFsbGF4Q3NzIGlmIHlvdSdyZSBcblx0Ly8ganVzdCBkZWZpbmluZyBvbmUgcHJvcGVydHkgd2l0aG91dCBzcGVjaWFsIHZhbHVlc1xuXHRjc3NLZXk/OiBzdHJpbmc7XG5cdFxuXHQvLyB0aGlzIGlzIHVzZWQgdG8gZGVmaW5lIHRoZSBjc3MgcHJvcGVydHkgeW91J2QgbGlrZSB0byBtb2RpZnkgYXMgeW91IHNjcm9sbFxuXHQvLyBkZWZhdWx0IGlzIGJhY2tncm91bmRQb3NpdGlvbllcblx0cGFyYWxsYXhDc3M/OiBzdHJpbmc7XG5cdFxuXHQvLyByYXRpbyBkZWZpbmluZyBob3cgZmFzdCwgc2xvdywgb3IgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY2hhbmdlcyBvbiBzY3JvbGxpbmdcblx0cGFyYWxsYXhSYXRpbz86IG51bWJlcjtcblx0XG5cdC8vIHRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgaW4gcGl4ZWxzIGZvciB0aGUgcGFyYWxsYXhDc3MgcHJvcGVydHkgeW91IGRlZmluZWRcblx0Ly8gYmVmb3JlIG9yLCBpZiB5b3UgZGlkbid0IGRlZmluZSBvbmUsIGl0IGRlZmF1bHRzIHRvIDBcblx0cGFyYWxsYXhJbml0VmFsPzogbnVtYmVyO1xuXHRcblx0Ly8gdXNlIHRoaXMgaWYgeW91IHdhbnQgdGhlIHBhcmFsbGF4IGVmZmVjdCBvbmx5IGlmIHRoZSBwYXNzZWQgaW4gc3RhdGVtZW50IGlzIFxuXHQvLyB0cnV0aHk7IGRlZmF1bHQgaXMgYm9vbGVhbiB0cnVlXG5cdHBhcmFsbGF4SWY/OiBhbnk7XG5cdFxuXHQvLyB0aGUgaWQgZm9yIHRoZSBlbGVtZW50IG9uIHRoZSBwYWdlIHlvdSdkIGxpa2UgdG8gdHJhY2sgdGhlIHNjcm9sbGluZyBvZiBpbiB0aGUgXG5cdC8vIGNhc2Ugd2hlcmUgdGhlIGVsZW1lbnQgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBjb21wb25lbnQ7IFxuXHQvLyBpZiBubyBpZCBpcyBkZWZpbmVkIGFsb25nIHdpdGggbm8gc2Nyb2xsRWxlbWVudCBiZWxvdywgXG5cdC8vIGl0IGRlZmF1bHRzIHRvIHRoZSBzY3JvbGxpbmcgb2YgdGhlIGJvZHlcblx0c2Nyb2xsZXJJZD86IHN0cmluZztcblx0XG5cdC8vIHRoZSB1cHBlciBjb25zdHJhaW50IGZvciB0aGUgY3NzIHRyYW5zZm9ybWF0aW9uXG5cdG1heFZhbHVlPzogbnVtYmVyO1xuXHRcblx0Ly8gdGhlIGxvd2VyIGNvbnN0cmFpbnQgZm9yIHRoZSBjc3MgdHJhbnNmb3JtYXRpb25cblx0bWluVmFsdWU/OiBudW1iZXI7XG5cdFxuXHQvLyB0aGUgdW5pdCAoZS5nLiAncHgnLCAnZW0nLCAnJScsICd2aCcsIGV0Yy4pIHlvdSB3YW50IGZvciB0aGUgcGFyYWxsYXggZWZmZWN0IHRvIHVzZSBcblx0Y3NzVW5pdD86IHN0cmluZztcblx0XG5cdC8vIHRoZSBlbGVtZW50IGluIHRoZSBjdXJyZW50IGNvbXBvbmVudCB0aGF0IHlvdSdkIGxpa2UgdGhlIGRpcmVjdGl2ZSB0byB0cmFjayBpdHMgXG5cdC8vIHBvc2l0aW9uIGFzIGl0IHNjcm9sbHM7ICBnZXRzIGFzc2lnbmVkIHRvIHRoZSBib2R5IGlmIG5vdGhpbmcgaXMgZGVmaW5lZFxuXHRzY3JvbGxFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG5cdFxuXHQvLyB0aGUgZWxlbWVudCB0aGF0IHlvdSdkIGxpa2UgdGhlIGVmZmVjdHMgZnJvbSBzY3JvbGxpbmcgdGhlIHNjcm9sbEVsZW1lbnQgYXBwbGllZCBcblx0Ly8gdG87IGVzc2VudGlhbGx5IHRoZSBlbGVtZW50IHRoYXQgbW92ZXMgYXMgeW91IHNjcm9sbFxuXHRwYXJhbGxheEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcblx0XG5cdC8vIHdoYXQgeW91IHdhbnQgdG8gY2FsbCBpdCB0byBmaW5kIHRoZSBwYXJ0aWN1bGFyIGluc3RhbmNlIG9mIGl0IGlmIHlvdSBuZWVkIHRvIGRlYnVnXG5cdG5hbWU/OiBzdHJpbmc7XG5cdFxuXHQvLyBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBhY3Rpb25zIGR1cmluZyBzY2FsaW5nXG5cdGNiPygpOiB2b2lkO1xuXHRcblx0Ly8gYXJndW1lbnRzIGZvciBvcHRpb25hbCBjYWxsYmFjayBlbnRlcmVkIGludG8gYW4gYXJyYXk7IGZvciBjb250ZXh0LXNwZWNpZmljIFxuXHRjYl9hcmdzPzogYW55W107XG5cdFxuXHQvLyBjYWxsYmFjayBjb250ZXh0IGluIHRoZSBjYXNlIHdoZXJlIHRoZSBjYWxsYmFjayBpcyBjb250ZXh0LXNwZWNpZmljXG5cdGNiX2NvbnRleHQ/OiBhbnk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BhcmFsbGF4XSdcbn0pXG5cbmNsYXNzIFBhcmFsbGF4IGltcGxlbWVudHMgT25Jbml0IHtcblx0bmFtZTogc3RyaW5nID0gJ3BhcmFsbGF4RGlyZWN0aXZlJztcblx0XG4gICAgQElucHV0KCkgY29uZmlnOiBQYXJhbGxheENvbmZpZztcblx0Ly8gdGhlIGZvbGxvd2luZyBASW5wdXRzIGFyZSBhbGwgcGFydCBvZiB0aGUgY29uZmlnIG9iamVjdCwgd2hpY2ggZm9yIFxuXHQvLyBicmV2aXR5J3Mgc2FrZSwgeW91IGNhbiBkbyBhIGJ1bmNoIG9mIG9wZXJhdGlvbnMgaW4gYnVsayBieSBwYXNzaW5nIFxuXHQvLyBpbiB0aGUgY29uZmlnIG9iamVjdDsgY2F2ZWF0IGZvciB0aGlzIGlzIHRoYXQgYW5ndWxhciAyIHdvbid0IHBlcm1pdCBcblx0Ly8gbW9yZSB0aGFuIDkga2V5cyBiZWluZyBwYXNzZWQgaW4gYW4gb2JqZWN0IHZpYSB0aGUgdGVtcGxhdGVcbiAgICBASW5wdXQoKSBjc3NLZXk6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb24nO1xuXHRASW5wdXQoKSBwYXJhbGxheENzczogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvblknO1xuXHRASW5wdXQoKSBwYXJhbGxheEF4aXM6IHN0cmluZyA9ICdZJztcbiAgICBASW5wdXQoKSBwYXJhbGxheFJhdGlvOiBudW1iZXIgPSAtLjc7XG4gICAgQElucHV0KCkgcGFyYWxsYXhJbml0VmFsOiBudW1iZXIgPSAwO1xuXHRASW5wdXQoKSBwYXJhbGxheElmOiBhbnkgPSB0cnVlO1xuXHRASW5wdXQoKSBzY3JvbGxlcklkOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG1heFZhbHVlOiBudW1iZXI7XG5cdEBJbnB1dCgpIG1pblZhbHVlOiBudW1iZXI7XG5cdEBJbnB1dCgpIGNzc1VuaXQ6IHN0cmluZyA9ICdweCc7XG5cdEBJbnB1dCgpIGNiO1xuXHRASW5wdXQoKSBjYl9jb250ZXh0OiBhbnkgPSBudWxsO1xuXHRASW5wdXQoKSBjYl9hcmdzOiBhbnlbXSA9IFtdO1xuXHRcblx0cGFyYWxsYXhTdHlsZXM6IHt9ID0ge307XG5cdFxuICAgIHByaXZhdGUgY3NzVmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIGlzU3BlY2lhbFZhbDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcblx0cHJpdmF0ZSBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdEBJbnB1dCgpIHNjcm9sbEVsZW1lbnQ6IGFueTtcblx0QElucHV0KCkgcGFyYWxsYXhFbGVtZW50OiBIVE1MRWxlbWVudDtcblx0XG5cdHByaXZhdGUgZXZhbHVhdGVTY3JvbGwgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMucGFyYWxsYXhJZikge1xuXHRcdFx0bGV0IHJlc3VsdFZhbDogc3RyaW5nO1xuXHRcdFx0bGV0IGNhbGNWYWw6IG51bWJlcjtcblx0XHRcdFxuXHRcdFx0aWYgKHRoaXMuc2Nyb2xsRWxlbWVudCBpbnN0YW5jZW9mIFdpbmRvdylcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxZICogdGhpcy5wYXJhbGxheFJhdGlvICsgdGhpcy5wYXJhbGxheEluaXRWYWw7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wICogdGhpcy5wYXJhbGxheFJhdGlvICsgdGhpcy5wYXJhbGxheEluaXRWYWw7XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLm1heFZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FsY1ZhbCA+PSB0aGlzLm1heFZhbHVlKVxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5tYXhWYWx1ZTtcblx0XHRcdGVsc2UgaWYgKHRoaXMubWluVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjYWxjVmFsIDw9IHRoaXMubWluVmFsdWUpXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLm1pblZhbHVlO1xuXHRcdFx0XG5cdFx0XHQvLyBhZGRlZCBhZnRlciByZWFsaXppbmcgb3JpZ2luYWwgc2V0dXAgd2Fzbid0IGNvbXBhdGlibGUgaW4gRmlyZWZveFxuXHRcdFx0Ly8gZGVidWdnZXI7XG5cdFx0XHRpZiAodGhpcy5jc3NLZXkgPT09ICdiYWNrZ3JvdW5kUG9zaXRpb24nKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhcmFsbGF4QXhpcyA9PT0gJ1gnKSB7XG5cdFx0XHRcdFx0cmVzdWx0VmFsID0gY2FsY1ZhbCArIHRoaXMuY3NzVW5pdCArICcgMCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0VmFsID0gJzAgJyArIGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc1NwZWNpYWxWYWwpIHtcblx0XHRcdFx0cmVzdWx0VmFsID0gdGhpcy5jc3NWYWx1ZSArICcoJyArIGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnKSc7XG5cdFx0XHR9IGVsc2UgeyBcblx0XHRcdFx0cmVzdWx0VmFsID0gY2FsY1ZhbCArIHRoaXMuY3NzVW5pdDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKHRoaXMuY2IpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoaXMgc2hvdWxkIGJlIHJ1bm5pbmcnKVxuXHRcdFx0XHR0aGlzLmNiLmFwcGx5KHRoaXMuY2JfY29udGV4dCwgdGhpcy5jYl9hcmdzKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy5wYXJhbGxheEVsZW1lbnQuc3R5bGVbdGhpcy5jc3NLZXldID0gcmVzdWx0VmFsO1xuXHRcdH1cblx0fVxuXHRcblx0bmdPbkluaXQoKSB7XG5cdFx0bGV0IGNzc1ZhbEFycmF5OiBzdHJpbmdbXTtcblx0XHRcblx0XHQvLyBjb25zb2xlLmxvZygnJXMgaW5pdGlhbGl6ZWQgb24gZWxlbWVudCcsIHRoaXMubmFtZSwgdGhpcy5ob3N0RWxlbWVudCk7XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcyk7XG5cdFx0XG5cdFx0Zm9yIChsZXQgcHJvcCBpbiB0aGlzLmNvbmZpZykgeyB0aGlzW3Byb3BdID0gdGhpcy5jb25maWdbcHJvcF07IH1cblx0XHR0aGlzLnBhcmFsbGF4Q3NzID0gdGhpcy5wYXJhbGxheENzcyA/IHRoaXMucGFyYWxsYXhDc3MgOiAnYmFja2dyb3VuZFBvc2l0aW9uWSc7XG5cdFx0aWYgKHRoaXMucGFyYWxsYXhDc3MubWF0Y2goL2JhY2tncm91bmRQb3NpdGlvbi9pKSkge1xuXHRcdFx0aWYgKHRoaXMucGFyYWxsYXhDc3Muc3BsaXQoJ2JhY2tncm91bmRQb3NpdGlvbicpWzFdLnRvVXBwZXJDYXNlKCkgPT09ICdYJykge1xuXHRcdFx0XHR0aGlzLnBhcmFsbGF4QXhpcyA9ICdYJztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy5wYXJhbGxheENzcyA9ICdiYWNrZ3JvdW5kUG9zaXRpb24nO1xuXHRcdH1cblx0XHRcbiAgICAgICAgY3NzVmFsQXJyYXkgPSB0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCc6Jyk7XG4gICAgICAgIHRoaXMuY3NzS2V5ID0gY3NzVmFsQXJyYXlbMF07XG4gICAgICAgIHRoaXMuY3NzVmFsdWUgPSBjc3NWYWxBcnJheVsxXTtcblx0XHRcbiAgICAgICAgdGhpcy5pc1NwZWNpYWxWYWwgPSB0aGlzLmNzc1ZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuY3NzVmFsdWUpIHRoaXMuY3NzVmFsdWUgPSB0aGlzLmNzc0tleTtcblx0XHRcbiAgICAgICAgdGhpcy5wYXJhbGxheFJhdGlvID0gK3RoaXMucGFyYWxsYXhSYXRpbztcbiAgICAgICAgdGhpcy5wYXJhbGxheEluaXRWYWwgPSArdGhpcy5wYXJhbGxheEluaXRWYWw7XG5cdFx0XG5cdFx0dGhpcy5wYXJhbGxheEVsZW1lbnQgPSB0aGlzLnBhcmFsbGF4RWxlbWVudCB8fCB0aGlzLmhvc3RFbGVtZW50O1xuXHRcdGlmICghdGhpcy5zY3JvbGxFbGVtZW50KSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJykpXG5cdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheFNjcm9sbCcpO1xuXHRcdFx0ZWxzZSBpZiAodGhpcy5zY3JvbGxlcklkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zY3JvbGxlcklkKTtcblx0XHRcdFx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudClcblx0XHRcdFx0XHRcdHRocm93KGBUaGUgSUQgcGFzc2VkIHRocm91Z2ggdGhlIHBhcmFsbGF4Q29uZmlnICgnJHt0aGlzLnNjcm9sbGVySWR9Jykgb2JqZWN0IHdhcyBub3QgZm91bmQgaW4gdGhlIGRvY3VtZW50LiAgRGVmYXVsdGluZyB0byB0cmFja2luZyB0aGUgc2Nyb2xsaW5nIG9mIHRoZSB3aW5kb3cuYCk7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihlKTtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSB3aW5kb3c7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB0aGlzLnNjcm9sbEVsZW1lbnQgPSB3aW5kb3c7XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZXZhbHVhdGVTY3JvbGwoKTtcblx0XHRcblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ldmFsdWF0ZVNjcm9sbC5iaW5kKHRoaXMpKTtcblx0fVxuXHRcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG5cdFx0dGhpcy5ob3N0RWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgUGFyYWxsYXgsIFBhcmFsbGF4Q29uZmlnIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
