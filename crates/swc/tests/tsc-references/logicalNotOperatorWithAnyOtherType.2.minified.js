//// [logicalNotOperatorWithAnyOtherType.ts]
// ! operator on any type
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var n, M, obj1 = {
    x: "",
    y: function() {}
}, A = function() {
    function A() {
        _class_call_check(this, A);
    }
    return A.foo = function() {}, A;
}();
(M || (M = {})).n = n;
var objA = new A();
obj1.x, obj1.y, objA.a, M.n, A.foo(), objA.a, M.n;
