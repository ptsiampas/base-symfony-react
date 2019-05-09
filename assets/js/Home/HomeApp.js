import React, {Component} from 'react';
import uuid from 'uuid/v4';
import HomeEventCreator2 from './HomeEventCreator2';
import HomeEventList from "./HomeEventList";

export default class HomeApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            events: [
                {
                    id: uuid(),
                    time: "10:00",
                    title: "Breakfast with Simon",
                    location: "Lounge Caffe",
                    description: "Discuss Q3 targets"
                },
                {
                    id: uuid(),
                    time: "10:30",
                    title: "Daily Standup Meeting (recurring)",
                    location: "Warsaw Spire Office"
                },
                {id: uuid(), time: "11:00", title: "Call with HRs"},
                {
                    id: uuid(),
                    time: "12:00",
                    title: "Lunch with Timmoty",
                    location: "Canteen",
                    description:
                        "Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a"
                }
            ]
        };

        this.handleAddEvent = this.handleAddEvent.bind(this);
        this.handelDeleteEvent = this.handelDeleteEvent.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);

    }


    handleShowModal() {
        this.setState({modal: true})
    }

    handleHideModal() {
        this.setState({modal: false})
    }

    handleAddEvent(eventTime, eventTitle, eventLocation, eventDescription) {
        const newEvent = {
            id: uuid(),
            time: eventTime,
            location: eventLocation,
            title: eventTitle,
            description: eventDescription

        };

        this.setState(prevState => {
            const newAddEvents = [...prevState.events, newEvent];
            // Tricky sort of the time, turn them to date objects compare then return 1 or -1 to tell sort which one was higher.
            newAddEvents.sort((a, b) => (Date.parse('1970-01-01T' + a.time) > Date.parse('1970-01-01T' + b.time)) ? 1 : -1);
            return {events: newAddEvents}
        });

    }

    handelDeleteEvent(ev, eventId) {
        ev.preventDefault();

        this.setState(prevState => {
            return {
                events: prevState.events.filter(event => event.id !== eventId)
            }
        })
    }

    render() {
        const {model, events} = this.state;

        return <div className="starter-template">
            <h1 className="text-center">Bootstrap starter template</h1>
            <p className="text-center lead">Use this document as a way to quickly start any new project.<br/> All you get is this text and a mostly barebones HTML document.</p>

            <div className={'row'}>
                <div className="col-6 mx-auto">
                    <h2>Today</h2>
                    <HomeEventList events={events} onHandleDelete={this.handelDeleteEvent}/>
                    <div className="row">


                        <HomeEventCreator2
                            {...this.props}
                            {...this.state}
                            onAddEvent={this.handleAddEvent}
                        />

                    </div>

                </div>
            </div>

        </div>;
    }
}
