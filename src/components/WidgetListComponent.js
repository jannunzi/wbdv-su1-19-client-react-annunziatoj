import React from 'react'
import WidgetListItemComponent from './WidgetListItemComponent'

class WidgetListComponent extends React.Component {//({widgets}) =>
    constructor(props) {
        super(props)
        this.props.findAllWidgets()
    }
    render() {
        return(
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>
                <ul>
                    {
                        this.props.widgets.map(widget =>
                            <WidgetListItemComponent
                                key={widget.id}
                                updateWidget={this.props.updateWidget}
                                widget={widget}
                                deleteWidget={this.props.deleteWidget}/>
                        )
                    }
                </ul>
                <button onClick={this.props.createWidget}>Create</button>
            </div>
        )
    }
}

export default WidgetListComponent