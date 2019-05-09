import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class HomeEventCreator extends Component {
    constructor(props) {
        super(props);
        const {modal} = this.props;

        this.eventTime = React.createRef();
        this.eventTitle = React.createRef();
        this.eventLocation = React.createRef();
        this.eventDescription = React.createRef();

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(ev) {
        ev.preventDefault();

        const {onAddEvent} = this.props;

        const eventTime = this.eventTime.current;
        const eventTitle = this.eventTitle.current;
        const eventLocation = this.eventLocation.current;
        const eventDescription = this.eventDescription.current;

        onAddEvent(eventTime.value, eventTitle.value, eventLocation.value, eventDescription.value);

        eventTime.value = '';
        eventTitle.value = '';
        eventDescription.value = '';
        eventLocation.value = '';

        // close the modal here?? how?

    }

    render() {
        return (
            <div className='modal fade' id="newEventModal" tabIndex="-1" role="dialog" aria-labelledby="newEventModal" aria-hidden="true">

                <div className="modal-dialog">
                    <div className="modal-content">
                        <form className="form" onSubmit={this.handleFormSubmit}>
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Event</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="eventTime" className="control-label required">Time of event</label>
                                    <input type="time"
                                           id="eventTime"
                                           ref={this.eventTime}
                                           required="required"
                                           name="eventTime"
                                           placeholder="00:00"
                                           className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eventTitle" className="control-label required">Event Title</label>
                                    <input type="text"
                                           id="eventTitle"
                                           ref={this.eventTitle}
                                           required="required"
                                           name="eventTitle"
                                           placeholder="Title of the event"
                                           className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eventLocation" className="control-label required">Event Title</label>
                                    <input type="text"
                                           id="eventLocation"
                                           ref={this.eventLocation}
                                           name="eventLocation"
                                           placeholder="Location of event (Optional)"
                                           className="form-control"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eventDescription" className="control-label">Event Description</label>
                                    <textarea
                                        id="eventDescription"
                                        ref={this.eventDescription}
                                        name="eventDescription"
                                        placeholder="(Optional)"
                                        className="form-control"
                                    />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal"><i className="fa fa-times"/> Close</button>
                                <button type="submit" className="btn btn-primary" ><i className="fa fa-save"/> Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

HomeEventCreator.propTypes = {
    onAddEvent: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired,
};
