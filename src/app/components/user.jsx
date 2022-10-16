import React from "react";
import Quality from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onChange
}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>{profession.name}</td>
            <td>
                {qualities.map((q) => (
                    <Quality key={q._id} {...q} />
                ))}
            </td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <Bookmark
                    key={_id}
                    id={_id}
                    onChange={onChange}
                    status={bookmark}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    qualities: PropTypes.array.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default User;
