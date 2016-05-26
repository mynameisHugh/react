/**
 * Created by hugh on 2016/5/26.
 * 这里需要注意的是，react并不依赖jQuery，当然我们可以使用jQuery，但是render里面第二个参数必须使用JavaScript原生的getElementByID方法，不能使用jQuery来选取DOM节点。
 */
ReactDOM.render(
    React.createElement("h1", null, "Hello, world!"),
    document.getElementById('example')
);
var arr=[
    React.createElement("h1", null, "my name is new"),
    React.createElement("h2", null, "your name is old")
]
ReactDOM.render(
    React.createElement("div", null, "*", arr, "*"),
    document.getElementById('example2')
)