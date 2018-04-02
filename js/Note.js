var Note = React.createClass({
    edit: function () {
        
    },
    remove: function () {
        
    },
    render: function () {
        return <div className='note'>
        <p>{this.props.children}</p>
        <span>
            <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"></button>
            <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"></button>
        </span>
        </div>
    }
})

React.render(<Note>Hello World</Note>, document.getElementById('react-container'));