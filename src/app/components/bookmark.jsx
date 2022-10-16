import React from "react";
import PropTypes from "prop-types";
const Bookmark = ({ status, id, onChange }) => {
    if (status) {
        return (
            <i
                className="bi bi-suit-heart-fill"
                onClick={() => onChange(id)}
            ></i>
        );
    } else {
        return (
            <i className="bi bi-suit-heart" onClick={() => onChange(id)}></i>
        );
    }
};
Bookmark.propTypes = {
    status: PropTypes.bool.isRequired,
    id: PropTypes.string,
    onChange: PropTypes.func
};
export default Bookmark;
