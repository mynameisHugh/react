#react-router@2.4.1使用说明

###第一次接触react-route就是这个版本，和以前的版本有很大的差异，特写了个文档方便记忆。
###此处仅做测试，直接页面引用，未在服务端使用。
###Demo示例在lesson8.html中。

##安装

        npm install react-router --save-dev

##页面引用

        <script src="../build/reactRouter.min.js"></script>
        
##js中引用变量
    网上大部分Demo都为老版本，在做此处时会有坑，注意引用。

        var Router = ReactRouter.Router;
        var Route = ReactRouter.Route;
        var Link = ReactRouter.Link;
        
##定义组件
    此版本不在有RouteHanler，用 {this.props.children}来代替

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
        
##路由

    此处在处理时用了document.body,出现一个了问题，大概意思是body里所有内容包括第三方插件会被覆盖，所以不能用document.body
        ReactDOM.render((<Router>
            <Route path="/" component={App}>
                <Route path="about" component={About}/>
                <Route path="movies" component={Movies}>
                    <Route path="/movie/:userId" component={Movie}/>
                </Route>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>), document.getElementById('example8'))
        
