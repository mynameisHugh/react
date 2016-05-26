/**
 * Created by lidongliang on 2016/5/26.
 */
'use strict';

var NotesList = React.createClass({displayName: "NotesList",
    render: function() {
        return (
            React.createElement("ol", null, 
                
                    React.Children.map(this.props.children, function (child) {
                        return React.createElement("li", null, child);
                    })
                
            )
        );
    }
});

ReactDOM.render(
    React.createElement(NotesList, null, 
        React.createElement("span", null, "hello"), 
        React.createElement("span", null, "world")
    ),
    document.getElementById('example6')
);