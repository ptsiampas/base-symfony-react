import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';

export default class HomeEventCreator2 extends Component {
    constructor(props) {
        super(props);
        this.state = {modal: false};

        this.eventTime = React.createRef();
        this.eventTitle = React.createRef();
        this.eventLocation = React.createRef();
        this.eventDescription = React.createRef();

        this.toggle = this.toggle.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
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
        this.toggle();
    }

    render() {

        return (
            <div>
                <Row>
                    <Col>
                        <Button color="success" onClick={this.toggle}><i className="fa fa-plus-circle"/> Add New Eventl</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.modal}>
                    <form onSubmit={this.handleFormSubmit}>
                        <ModalHeader>Add New Event</ModalHeader>
                        <ModalBody>
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
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                            <input type="submit" value="Submit" color="primary" className="btn btn-primary"/>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }

}

HomeEventCreator2.propTypes = {
    onAddEvent: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired,
};
