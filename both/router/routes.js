/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route("home", {path: "/"});
  this.route("map", {path: "/map"});
  this.route("mycircles", {path: "/mycircles"});
  this.route("account", {path: "/me"});
  this.route("notifications", {path: "/notifications"})
});
