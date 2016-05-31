/**
 * Created by lidongliang on 2016/5/31.
 */
'use strict';

//此处赋值注意新老版本区别，此处为新版本
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = React.createClass({displayName: "App",
    render: function () {
        return (React.createElement("div", null, 
            React.createElement("nav", null, 
                React.createElement(Link, {to: "/movies"}, "电影"), 
                React.createElement(Link, {to: "/about"}, "关于")
            ), 
            React.createElement("section", null, 
                this.props.children
            )
        ))
    }
})
var About = React.createClass({displayName: "About",
    render: function () {
        return (
            React.createElement("h1", null, "关于我们的哥")
        )
    }
})
var Movies = React.createClass({displayName: "Movies",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("ul", null, 
                    React.createElement("li", {key: 1}, React.createElement(Link, {to: "/movie/1"}, "煎饼侠")), 
                    React.createElement("li", {key: 2}, React.createElement(Link, {to: "/movie/2"}, "捉妖记")), 
                    React.createElement("li", {key: 3}, React.createElement(Link, {to: "/movie/3"}, "西游记之大圣归来"))
                ), 
                this.props.children
            )
        )
    }
})
var Movie = React.createClass({displayName: "Movie",
    render: function () {
        return (
            React.createElement("article", null, 
                React.createElement("h1", null, "这里是电影 id 为 ", this.props.params.userId, " 的详情介绍")
            )
        )
    }
})
var NoMatch = React.createClass({displayName: "NoMatch",
    render: function () {
        return (
            React.createElement("article", null, 
                React.createElement("h1", null, "404")
            )
        )
    }
})
ReactDOM.render((React.createElement(Router, null, 
    React.createElement(Route, {path: "/", component: App}, 
        React.createElement(Route, {path: "about", component: About}), 
        React.createElement(Route, {path: "movies", component: Movies}, 
            React.createElement(Route, {path: "/movie/:userId", component: Movie})
        ), 
        React.createElement(Route, {path: "*", component: NoMatch})
    )
)), document.getElementById('example8'))