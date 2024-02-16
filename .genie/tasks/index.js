"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _promises = /*#__PURE__*/ _interop_require_default(require("node:fs/promises"));
const _genie = /*#__PURE__*/ _interop_require_wildcard(require("@dashkite/genie"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
// bootstrap it here
_genie.on("clean", async function() {
    try {
        return await _promises.default.rm("build", {
            recursive: true
        });
    } catch (error) {}
}); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Rhc2tzL2luZGV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVAsTUFBQTs7QUFDQSxPQUFPLENBQUEsU0FBUCxNQUFBLGtCQURBOzs7QUFJQSxLQUFLLENBQUMsRUFBTixDQUFTLE9BQVQsRUFBa0IsTUFBQSxRQUFBLENBQUEsQ0FBQTtBQUNoQjtXQUFJLENBQUEsTUFBTSxFQUFFLENBQUMsRUFBSCxDQUFNLE9BQU4sRUFBZTtNQUFBLFNBQUEsRUFBVztJQUFYLENBQWYsQ0FBTixFQUFKO0dBQUE7QUFEZ0IsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRlMgZnJvbSBcIm5vZGU6ZnMvcHJvbWlzZXNcIlxuaW1wb3J0ICogYXMgR2VuaWUgZnJvbSBcIkBkYXNoa2l0ZS9nZW5pZVwiXG5cbiMgYm9vdHN0cmFwIGl0IGhlcmVcbkdlbmllLm9uIFwiY2xlYW5cIiwgLT5cbiAgdHJ5IGF3YWl0IEZTLnJtIFwiYnVpbGRcIiwgcmVjdXJzaXZlOiB0cnVlIl19
 //# sourceURL=/tasks/index.coffee

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90YXNrcy9pbmRleC5jb2ZmZWUiLCI8YW5vbj4iXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZTIGZyb20gXCJub2RlOmZzL3Byb21pc2VzXCJcbmltcG9ydCAqIGFzIEdlbmllIGZyb20gXCJAZGFzaGtpdGUvZ2VuaWVcIlxuXG4jIGJvb3RzdHJhcCBpdCBoZXJlXG5HZW5pZS5vbiBcImNsZWFuXCIsIC0+XG4gIHRyeSBhd2FpdCBGUy5ybSBcImJ1aWxkXCIsIHJlY3Vyc2l2ZTogdHJ1ZSIsbnVsbF0sIm5hbWVzIjpbIkdlbmllIiwib24iLCJGUyIsInJtIiwicmVjdXJzaXZlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7aUVBQUE7K0RBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBQSxPQUFNQyxFQUFOLENBQVMsU0FBUztJQUNoQixJQUFBO2VBQUksTUFBTUMsaUJBQUUsQ0FBQ0MsRUFBSCxDQUFNLFNBQVM7WUFBQUMsV0FBVztRQUFYO01BQXpCLE9BQUFDLE9BQUEsQ0FBQTtBQURnQiJ9