import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    // диструктаризировал данные из users
    const pageCount = Math.ceil(itemsCount / pageSize); // выяснил сколько страниц нужно
    if (pageCount === 1) return null; // если кол-во отображ-ых элементов будет только на 1 страницу, то пагинация не нужна
    const pages = _.range(1, pageCount + 1); // из pageCount нужно реализовать массив;
    return (
        <>
            <nav>
                <ul className="pagination">
                    {pages.map((page) => (
                        <li
                            className={
                                "page-item " +
                                (page === currentPage ? "active" : "")
                            }
                            key={"page_" + page}
                        >
                            <button
                                className="page-link"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
