import React from 'react'

export default class WidgetListItemComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        editing: false
    }
    toggleEditing = () =>
        this.setState({
            editing: !this.state.editing
        })
    render() {
        return(
            <li>
                {this.props.widget.type}
                {this.state.editing &&
                    <span>
                        <button onClick={
                            () => this.props.deleteWidget(this.props.widget.id)
                        }>
                            Delete
                        </button>
                        <select
                            onChange={(event) => this.props.updateWidget({
                                ...this.props.widget,
                                type: event.target.value
                            })}
                            value={this.props.widget.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="YOUTUBE">YouTube</option>
                            <option value="LIST">List</option>
                            <option value="LINK">Link</option>
                            <option value="IMAGE">Image</option>
                        </select>
                    </span>
                }
                {!this.state.editing &&
                <button onClick={this.toggleEditing}>
                    Edit
                </button>
                }
                {this.state.editing &&
                <button onClick={this.toggleEditing}>
                    Done
                </button>
                }
            </li>
        )
    }

}