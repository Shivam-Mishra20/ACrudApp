import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([]);

    const [tableDark, setTableDark] = useState("");

    const [search, setSearch] = useState("")



    function getData() {
        axios
            .get("https://667e996ef2cb59c38dc655a0.mockapi.io/crudop/crud-operations")
            .then((res) => {
                setData(res.data);
            });
    }

    function handleDelete(id) {
        axios
            .delete(`https://667e996ef2cb59c38dc655a0.mockapi.io/crudop/crud-operations/${id}`)
            .then(() => {
                getData();
            });
    }

    const setToLocalStorage = (id, name, email, bio, phone) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("bio", bio);
        localStorage.setItem("phone", phone)
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className=" w-full  " style={{
                minHeight: "calc(100vh - 64px)",
                height: "100%",
                backgroundColor: '#21D4FD',
                backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',


            }}>
                <div className="container   pt-4  w-full max-w-screen-sm sm:max-w-screen-md"  >
                    <div className="form-check form-switch pt-1 ">
                        <input
                            className="form-check-input   "
                            type="checkbox"
                            onClick={() => {
                                setTableDark(prev => (prev === "table-dark" ? "" : "table-dark"));
                            }}
                        />
                    </div>
                    <div className="d-flex flex-wrap justify-content-between m-2">
                        <h2 className=" text-wrap  pb-2  font-mono"> Data Collection</h2>
                        <input
                            type="text"
                            name="search"
                            value={search}
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}

                            className="border  text-white p-1 bg-transparent px-2  mr-2"
                        />
                        <Link to="/create">
                            <button className="btn btn-secondary">Create</button>
                        </Link>
                    </div>
                    <div className="table-responsive">
                        <table className={`table ${tableDark}`}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Bio</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data
                                    .filter((el) => {
                                        if (el === "") {
                                            return el;
                                        } else {
                                            return (
                                                el.name.toLowerCase().includes(search) ||
                                                el.email.toLowerCase().includes(search) ||
                                                el.phone.toLowerCase().includes(search) ||
                                                el.bio.toLowerCase().includes(search)
                                            );
                                        }
                                    })
                                    .map((eachData) => (
                                        <tr key={eachData.id}>
                                            <th scope="row">{eachData.id}</th>
                                            <td>{eachData.name}</td>
                                            <td>{eachData.email}</td>
                                            <td>{eachData.phone}</td>
                                            <td>{eachData.bio}</td>
                                            <td>
                                                <Link
                                                    to="/update"
                                                    onClick={() =>
                                                        setToLocalStorage(
                                                            eachData.id,
                                                            eachData.name,
                                                            eachData.email,
                                                            eachData.bio,
                                                            eachData.phone
                                                        )
                                                    }
                                                >
                                                    <button className="btn btn-success">Edit</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(eachData.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div >
            </div>

        </>
    );
};

export default Read;
