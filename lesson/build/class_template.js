/**
 * Created by lidongliang on 2016/5/26.
 */
'use strict';

var Animals = React.createClass({displayName: "Animals",
    render: function () {
        return (
            React.createElement("div", {className: "myclass"}, "The animal's type is ", this.props.type)
        );
    }
});

ReactDOM.render(React.createElement(Animals, {type: "dog"}), document.getElementById('example3'))
