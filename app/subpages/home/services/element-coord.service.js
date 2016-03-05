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
    var ElementCoord;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ElementCoord = (function () {
                function ElementCoord() {
                }
                ElementCoord.prototype.getPosition = function (element) {
                    var xPosition = 0;
                    var yPosition = 0;
                    while (element) {
                        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                        element = element.offsetParent;
                    }
                    return { x: xPosition, y: yPosition };
                };
                ElementCoord = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ElementCoord);
                return ElementCoord;
            })();
            exports_1("ElementCoord", ElementCoord);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvc2VydmljZXMvZWxlbWVudC1jb29yZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkVsZW1lbnRDb29yZCIsIkVsZW1lbnRDb29yZC5jb25zdHJ1Y3RvciIsIkVsZW1lbnRDb29yZC5nZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7Z0JBYUFDLENBQUNBO2dCQVhBRCxrQ0FBV0EsR0FBWEEsVUFBWUEsT0FBT0E7b0JBQ2xCRSxJQUFJQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDbEJBLElBQUlBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBO29CQUVsQkEsT0FBTUEsT0FBT0EsRUFBRUEsQ0FBQ0E7d0JBQ2ZBLFNBQVNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLEdBQUdBLE9BQU9BLENBQUNBLFVBQVVBLEdBQUdBLE9BQU9BLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO3dCQUM1RUEsU0FBU0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3pFQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQTtvQkFDaENBLENBQUNBO29CQUNEQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxTQUFTQSxFQUFFQSxDQUFDQSxFQUFFQSxTQUFTQSxFQUFFQSxDQUFDQTtnQkFDdkNBLENBQUNBO2dCQVpGRjtvQkFBQ0EsaUJBQVVBLEVBQUVBOztpQ0FhWkE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFFUSx1Q0FBWSIsImZpbGUiOiJzdWJwYWdlcy9ob21lL3NlcnZpY2VzL2VsZW1lbnQtY29vcmQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgRWxlbWVudENvb3JkIHtcclxuXHRnZXRQb3NpdGlvbihlbGVtZW50KSB7XHJcblx0XHR2YXIgeFBvc2l0aW9uID0gMDtcclxuXHRcdHZhciB5UG9zaXRpb24gPSAwO1xyXG5cdFx0XHJcblx0XHR3aGlsZShlbGVtZW50KSB7XHJcblx0XHRcdHhQb3NpdGlvbiArPSAoZWxlbWVudC5vZmZzZXRMZWZ0IC0gZWxlbWVudC5zY3JvbGxMZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0KTtcclxuXHRcdFx0eVBvc2l0aW9uICs9IChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRUb3ApO1xyXG5cdFx0XHRlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4geyB4OiB4UG9zaXRpb24sIHk6IHlQb3NpdGlvbiB9O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgRWxlbWVudENvb3JkIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
