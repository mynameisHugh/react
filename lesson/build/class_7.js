/**
 * Created by lidongliang on 2016/5/26.
 */
'use strict';

var MyTitle = React.createClass({displayName: "MyTitle",
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    getDefaultProps : function () {
        return {
            title : 'Hello World'
        };
    },
    render: function() {
        return React.createElement("h1", null, " ", this.props.title, " ");
    }
});

var data = 123;

ReactDOM.render(
    React.createElement(MyTitle, {title: data}),
    document.getElementById('example7')
);