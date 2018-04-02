var Note = React.createClass({
    //The initial state of the note is not going to be editable
    getInitialState: function() {
        return {editing: false}
    },
    //When you click on edit is going to set the state to be editable
    edit: function() {
        this.setState({editing: true});
    },
    //When you click save you can't edit anymore (state: not editable)
    save: function() {
        this.setState({editing: false});
        //getDOMNode is going to look for the value that has the "newText" attached to it. 
        var val = this.refs.newText.getDOMNode().value;
        alert("Save note value " + val);
    },
    remove: function() {
        alert('removing note');
    },
    //The display render is the default state of the note (it has the icon to remove and edit)
     //The render display is triggered if (editing: false) 
    renderDisplay: function() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    },
    //The render form is triggered if (editing: true) 
    renderForm: function() {
        return (
            <div className="note">
            <textarea  ref="newText" defaultValue={this.props.children} 
            className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            )
    },
    //Depending on the state of the editing we call the (renderForm) or (renderDisplay)
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});
//To make a property validation we use board (the parent component of the notes)
var Board = React.createClass({
    //Is a method that is part of the react library, and it handles validation
    propTypes: {
        //the property is count (the # of notes that appears on our board )
        count: function (props, propName) {
            //The first validation is that our count is always a number
            if (typeof props[propName !== "number"]) {
                return new Error("The count property must be a number")
            } 
            //If the count is higher than 100 we will return a error
            if (props[propName] > 100) {
                return new Error ("Creating " + props[propName] + " notes is ridiculous")
            }
        }
    },
//Function that is going to return a list of notes
    getInitialState: function () {
        return {
            notes: [
                "Call Bill",
                "Email Lisa",
                "Pickup Murphy",
                "Send proposal"
            ]
        }
    },
    //Inside we want to render a div with a classname of Board
    render: function () {
        return (<div className="board">{this.state.notes.map(function (note, i){
            return (<Note key={i}>{note}</Note>);
        })}</div>
        );
    } 
}) 
//The render will now return cunt
React.render(<Board count={10} />, 
    document.getElementById('react-container'));