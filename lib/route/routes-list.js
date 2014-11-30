// an extension to Array.prototype (array of routes) which adds a display function ;)
// Usage:
//  route.getRoutesBy('name', 'priority').display()

// for iterating and displaying routes
module.exports = function () {};
RoutesList.prototype = Array.prototype;
RoutesList.prototype.display = function() {
  return this.map(function(routeInfo) {
    return Object.keys(routeInfo).map(function(key) {
      return key + ': ' + routeInfo[key];
    }).join(', ')
  }).join('\n')
};
