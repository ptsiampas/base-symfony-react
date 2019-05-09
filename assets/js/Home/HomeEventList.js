import React from 'react';
import PropTypes from 'prop-types';

export default function HomeEventList(props) {

    const {events, onHandleDelete} = props;

    return (
        events.map((event) => (
                <div className="event" key={event.id}>
                    <div className="media mt-2">

                        <h3 className="font-weight-bold">{event.time}</h3>

                        <div className="ml-3 media-body">
                            <a href="#"
                               className="ml-2 float-right"
                               onClick={(ev) => onHandleDelete(ev, event.id)}
                            ><i className="fa fa-trash"/></a>
                            <h6 className="mt-0 font-weight-bold">{event.title}</h6>{" "}

                            {event.location && (
                                <>
                                    <hr className="my-2"/>
                                    <p className="text-muted mb-0"><i className="fa fa-compass"/> {event.location}</p>
                                </>
                            )}

                        </div>
                    </div>
                    {event.description && <p className="p-2 bg-info my-2">{event.description}</p>}
                </div>
            )
        )
    );
}

HomeEventList.propTypes = {
    events: PropTypes.array.isRequired,
    onHandleDelete: PropTypes.func.isRequired

};
