import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "../api";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelet = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleChangeStatus = (id) => {
        setUsers(
            users.map((user) =>
                user._id === id ? { ...user, bookmark: !user.bookmark } : user
            )
        );
    };
    return (
        <>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                onDelete={handleDelet}
                onChange={handleChangeStatus}
            />
        </>
    );
};

export default App;
