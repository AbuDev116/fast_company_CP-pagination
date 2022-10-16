import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        if (number >= 5 || number === 1) {
            return (
                <h2>
                    <span className="badge bg-primary">
                        {number} человек тусанёт с тобой сегодня
                    </span>
                </h2>
            );
        } else if (number < 5 && number !== 0 && number !== 1) {
            return (
                <h2>
                    <span className="badge bg-primary">
                        {number} человека тусанут с тобой сегодня
                    </span>
                </h2>
            );
        } else {
            return (
                <h2>
                    <span className="badge bg-danger">
                        Никто с тобой не тусанёт
                    </span>
                </h2>
            );
        }
    };
    return renderPhrase(length);
};
SearchStatus.propTypes = {
    length: PropTypes.number
};
export default SearchStatus;
