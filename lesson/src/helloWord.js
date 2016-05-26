/**
 * Created by hugh on 2016/5/26.
 * 这里需要注意的是，react并不依赖jQuery，当然我们可以使用jQuery，但是render里面第二个参数必须使用JavaScript原生的getElementByID方法，不能使用jQuery来选取DOM节点。
 */
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);
var arr=[
    <h1>my name is new</h1>,
    <h2>your name is old</h2>
]
ReactDOM.render(
    <div>*{arr}*</div>,
    document.getElementById('example2')
)