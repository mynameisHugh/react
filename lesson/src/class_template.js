/**
 * Created by lidongliang on 2016/5/26.
 */
'use strict';

var Animals = React.createClass({
    render: function () {
        return (
            <div className="myclass">The animal's type is {this.props.type}</div>
        );
    }
});

ReactDOM.render(<Animals type="dog"/>, document.getElementById('example3'))
