function merge() {
    let result = {}
    let obj;
  
    for (let i = 0; i < arguments.length; i++) {
      obj = arguments[i];
      for (let key in obj) {
        if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
          if (typeof result[key] === "undefined") {
            result[key] = {};
          }
          result[key] = merge(result[key], obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }
  
  export default merge;