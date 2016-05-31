#react 使用说明 

##react-router@2.4.1使用说明见readme_route.md

--------
##安装

        npm install react --save-dev //获取react 
        
        npm install react-dom --save-dev  //react@15.X.X已经将react-dom分离出来，所以要单独安装
        
        npm install react-tools -g //react转换成javascript工具，可以不安装，使用webpack

## react-tools使用
        jsx --wacth src/ build/   //jsx --wacth 原目录 生成目录  react-tools一定要安装在全局，否则不能使用jsx命令
##html页面应用

注意页面引用react-dom.js
      
    
### react 组件

####例１

        var Animals = React.createClass({
            render: function () {
                return (
                    <div>The animal's type is {this.props.type}</div>
                );
            }
        });
        
        ReactDOM.render(<animals type="dog"></animals>,document.getElementById('example3'))
        
1）获取属性的值用的是this.props.属性名

2）创建的组件名称首字母必须大写。

3）为元素添加css的class时，要用className。

4）组件的style属性的设置方式也值得注意，要写成style={{width: this.state.witdh}}。

5)为元素添加for属性时，要用htmlFor,因为class和for是javascript的保留字。

6）this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点

        var MyClass_5 = React.createClass({
            getInitialState: function () {
                return {opacity: 1}
            },
            componentDidMount: function () {
                var timer = setInterval(function () {
                    var opac = this.state.opacity;
                    if (opac > 0)opac -= 0.05; else opac = 1;
                    this.setState({opacity: opac})
                }.bind(this), 100)
            },
            render: function () {
                return (
                    <div style={{opacity:this.state.opacity,backgroundColor:'red'}}>
                        aaaaaaaaaaaaaaa
                    </div>
                )
            }
        
        })

这里需要注意， this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array 。所以，处理 this.props.children 的时候要小心。
React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object。



####例2 组件状态
组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI 。下面我们来编写一个小例子，一个文本框和一个button，通过点击button可以改变文本框的编辑状态，禁止编辑和允许编辑。通过这个例子来理解ReactJS的状态机制。

我们使用到了一个方法getInitialState,这个函数在组件初始化的时候执行，必需返回NULL或者一个对象。这里我们可以通过this.state.属性名来访问属性值，这里我们将enable这个值跟input的disabled绑定，当要修改这个属性值时，要使用setState方法。我们声明handleClick方法，来绑定到button上面，实现改变state.enable的值。

        var MyInput = React.createClass({
            getInitialState: function () {
                return {enable: true, maxlenght: 12,value:''};
            },
            handleClick: function (event) {
                this.setState({enable: !this.state.enable,value:event.target.value})
                this.refs.myTextInput.focus();
        
            },
            render: function () {
                return (
                    <div>
                        <input type={this.props.type} ref="myTextInput"  disabled={!this.state.enable}/>
                        <input type="button" value="change state" onClick={this.handleClick}/>
                    </div>
                )
            }
        })

1）getInitialState函数必须有返回值，可以是NULL或者一个对象。

2）访问state的方法是this.state.属性名。

3）变量用{}包裹，不需要再加双引号。

4)组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。
  组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
  更多属性，请看[官方文档](http://facebook.github.io/react/docs/reusable-components.html)
  
5）getDefaultProps 方法可以用来设置组件属性的默认值。

      var MyTitle = React.createClass({
          propTypes: {
              title: React.PropTypes.string.isRequired,
          },
        getDefaultProps : function () {
            return {
              title : 'Hello World'
            };
          },
          render: function() {
              return <h1> {this.props.title} </h1>;
          }
      });
      
      var data = 123;
      
      ReactDOM.render(
          <MyTitle title={data} />,
          document.getElementById('example7')
      );

6) 取真实 DOM 的节点，这时就要用到 ref 属性,组件 MyComponent 的子节点有一个文本输入框，用于获取用户的输入。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。为了做到这一点，文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
   需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。上面代码中，通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click 事件之后，才会读取 this.refs.[refName] 属性。
   更多事件请访问[官方文档](http://facebook.github.io/react/docs/events.html#supported-events)
   
7)文本输入框的值，不能用 this.props.value 读取，而要定义一个 onChange 事件的回调函数，通过 event.target.value 读取用户输入的值。textarea 元素、select元素、radio元素都属于这种情况

####例3 组件的生命周期
组件的生命周期分成三个状态：

* Mounting：已插入真实 DOM
* Updating：正在被重新渲染
* Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。

* componentWillMount()
* componentDidMount()
* componentWillUpdate(object nextProps, object nextState)
* componentDidUpdate(object prevProps, object prevState)
* componentWillUnmount()

此外，React 还提供两种特殊状态的处理函数。

* componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
* shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

        var MyClass_5 = React.createClass({
            getInitialState: function () {
                return {opacity: 1}
            },
            componentDidMount: function () {
                var timer = setInterval(function () {
                    var opac = this.state.opacity;
                    if (opac > 0)opac -= 0.05; else opac = 1;
                    this.setState({opacity: opac})
                }.bind(this), 100)
            },
            render: function () {
                return (
                    <div style={{opacity:this.state.opacity,backgroundColor:'red'}}>
                        aaaaaaaaaaaaaaa
                    </div>
                )
            }
        
        })
        
通过 componentDidMount 方法设置一个定时器，每隔100毫秒，就重新设置组件的透明度，从而引发重新渲染。

#### 组件的嵌套

    在一个组件中调用另一个组件，用法简单，各位自己尝试。