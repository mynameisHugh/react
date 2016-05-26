/**
 * Created by lidongliang on 2016/5/26.
 */
'use strict';


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
ReactDOM.render(<MyInput type="text"/>, document.getElementById('example4'))