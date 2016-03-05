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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvc2VydmljZXMvZWxlbWVudC1jb29yZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkVsZW1lbnRDb29yZCIsIkVsZW1lbnRDb29yZC5jb25zdHJ1Y3RvciIsIkVsZW1lbnRDb29yZC5nZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO2dCQWFBQyxDQUFDQTtnQkFYQUQsa0NBQVdBLEdBQVhBLFVBQVlBLE9BQU9BO29CQUNsQkUsSUFBSUEsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxJQUFJQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFFbEJBLE9BQU1BLE9BQU9BLEVBQUVBLENBQUNBO3dCQUNmQSxTQUFTQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxHQUFHQSxPQUFPQSxDQUFDQSxVQUFVQSxHQUFHQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTt3QkFDNUVBLFNBQVNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLEdBQUdBLE9BQU9BLENBQUNBLFNBQVNBLEdBQUdBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO3dCQUN6RUEsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0E7b0JBQ2hDQSxDQUFDQTtvQkFDREEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsU0FBU0EsRUFBRUEsQ0FBQ0EsRUFBRUEsU0FBU0EsRUFBRUEsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkFaRkY7b0JBQUNBLGlCQUFVQSxFQUFFQTs7aUNBYVpBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FiQSxBQWFDQSxJQUFBO1lBRVEsdUNBQVkiLCJmaWxlIjoic3VicGFnZXMvaG9tZS9zZXJ2aWNlcy9lbGVtZW50LWNvb3JkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmNsYXNzIEVsZW1lbnRDb29yZCB7XHJcblx0Z2V0UG9zaXRpb24oZWxlbWVudCkge1xyXG5cdFx0dmFyIHhQb3NpdGlvbiA9IDA7XHJcblx0XHR2YXIgeVBvc2l0aW9uID0gMDtcclxuXHRcdFxyXG5cdFx0d2hpbGUoZWxlbWVudCkge1xyXG5cdFx0XHR4UG9zaXRpb24gKz0gKGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdCk7XHJcblx0XHRcdHlQb3NpdGlvbiArPSAoZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnNjcm9sbFRvcCArIGVsZW1lbnQuY2xpZW50VG9wKTtcclxuXHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHsgeDogeFBvc2l0aW9uLCB5OiB5UG9zaXRpb24gfTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEVsZW1lbnRDb29yZCB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
