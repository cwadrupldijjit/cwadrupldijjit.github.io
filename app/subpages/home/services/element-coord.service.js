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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnBhZ2VzL2hvbWUvc2VydmljZXMvZWxlbWVudC1jb29yZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkVsZW1lbnRDb29yZCIsIkVsZW1lbnRDb29yZC5jb25zdHJ1Y3RvciIsIkVsZW1lbnRDb29yZC5nZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO2dCQWFBQyxDQUFDQTtnQkFYQUQsa0NBQVdBLEdBQVhBLFVBQVlBLE9BQU9BO29CQUNsQkUsSUFBSUEsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSxJQUFJQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFFbEJBLE9BQU1BLE9BQU9BLEVBQUVBLENBQUNBO3dCQUNmQSxTQUFTQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxHQUFHQSxPQUFPQSxDQUFDQSxVQUFVQSxHQUFHQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTt3QkFDNUVBLFNBQVNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLEdBQUdBLE9BQU9BLENBQUNBLFNBQVNBLEdBQUdBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO3dCQUN6RUEsT0FBT0EsR0FBR0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0E7b0JBQ2hDQSxDQUFDQTtvQkFDREEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsU0FBU0EsRUFBRUEsQ0FBQ0EsRUFBRUEsU0FBU0EsRUFBRUEsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkFaRkY7b0JBQUNBLGlCQUFVQSxFQUFFQTs7aUNBYVpBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FiQSxBQWFDQSxJQUFBO1lBRVEsdUNBQVkiLCJmaWxlIjoic3VicGFnZXMvaG9tZS9zZXJ2aWNlcy9lbGVtZW50LWNvb3JkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmNsYXNzIEVsZW1lbnRDb29yZCB7XG5cdGdldFBvc2l0aW9uKGVsZW1lbnQpIHtcblx0XHR2YXIgeFBvc2l0aW9uID0gMDtcblx0XHR2YXIgeVBvc2l0aW9uID0gMDtcblx0XHRcblx0XHR3aGlsZShlbGVtZW50KSB7XG5cdFx0XHR4UG9zaXRpb24gKz0gKGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdCk7XG5cdFx0XHR5UG9zaXRpb24gKz0gKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50LmNsaWVudFRvcCk7XG5cdFx0XHRlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiB7IHg6IHhQb3NpdGlvbiwgeTogeVBvc2l0aW9uIH07XG5cdH1cbn1cblxuZXhwb3J0IHsgRWxlbWVudENvb3JkIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
