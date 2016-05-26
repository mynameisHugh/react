/**
 * Created by lidongliang on 2016/5/26.
 */
'use strict';


var MyInput = React.createClass({displayName: "MyInput",
    getInitialState: function () {
        return {enable: true, maxlenght: 12,value:''};
    },
    handleClick: function (event) {
        this.setState({enable: !this.state.enable,value:event.target.value})
        this.refs.myTextInput.focus();

    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: this.props.type, ref: "myTextInput", disabled: !this.state.enable}), 
                React.createElement("input", {type: "button", value: "change state", onClick: this.handleClick})
            )
        )
    }
})
ReactDOM.render(React.createElement(MyInput, {type: "text"}), document.getElementById('example4'))