/**
 * Created by lidongliang on 2016/5/26.
 */
'use strict';

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