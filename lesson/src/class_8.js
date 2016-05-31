/**
 * Created by lidongliang on 2016/5/31.
 */
'use strict';

//此处赋值注意新老版本区别，此处为新版本
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var App = React.createClass({
    render: function () {
        return (<div>
            <nav>
                <Link to="/movies">电影</Link>
                <Link to="/about">关于</Link>
            </nav>
            <section>
                {this.props.children}
            </section>
        </div>)
    }
})
var About = React.createClass({
    render: function () {
        return (
            <h1>关于我们的哥</h1>
        )
    }
})
var Movies = React.createClass({
    render: function () {
        return (
            <div>
                <ul>
                    <li key={1}><Link to="/movie/1">煎饼侠</Link></li>
                    <li key={2}><Link to="/movie/2">捉妖记</Link></li>
                    <li key={3}><Link to="/movie/3">西游记之大圣归来</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})
var Movie = React.createClass({
    render: function () {
        return (
            <article>
                <h1>这里是电影 id 为 {this.props.params.userId} 的详情介绍</h1>
            </article>
        )
    }
})
var NoMatch = React.createClass({
    render: function () {
        return (
            <article>
                <h1>404</h1>
            </article>
        )
    }
})
ReactDOM.render((<Router>
    <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="movies" component={Movies}>
            <Route path="/movie/:userId" component={Movie}/>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Route>
</Router>), document.getElementById('example8'))