import React from 'react'
import CourseCard from './CourseCard'
import ModuleList from "./ModuleList";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseList from './CourseList'
import CourseGrid from './CourseGrid'
import courses from './courses.json'
import OmdbClient from '../omdb/OmdbClient'
import WidgetListComponent from './WidgetListComponent'
import WidgetService from '../services/WidgetService'
import widgetReducer from '../reducers/widgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import WidgetListContainer from '../containers/WidgetListContainer'

const store = createStore(widgetReducer)

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props)
        this.widgetService = WidgetService.getInstance()
        this.state = {
            widgets: this.widgetService.findAllWidgets()
        }
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <h1>WhiteBoard</h1>
                        <Link to="/omdb">Omdb</Link> |
                        <Link to="/course-list">List</Link> |
                        <Link to="/course-grid">Grid</Link> |
                        <Link to="/course-editor">Editor</Link> |
                        <Link to="/widgets">Widgets</Link>

                        <WidgetListContainer/>


                        <Route
                            path="/omdb"
                            component={OmdbClient}
                        />
                        <Route
                            path="/course-grid"
                            render={() => <CourseGrid courses={courses}/>}/>
                        <Route
                            path="/course-list"
                            render={() => <CourseList courses={courses}/>}/>
                        <Route
                            path="/course-editor/:courseId"
                            render={() => <CourseEditor/>}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}

