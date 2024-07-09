import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImgCont from "./ImgCont";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [phone, setPhone] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !bio || !phone) {
            toast.warning('All fields are mandatory');
            return;
        }

        axios
            .post("https://667e996ef2cb59c38dc655a0.mockapi.io/crudop/crud-operations", {
                name: name,
                email: email,
                bio: bio,
                phone: phone
            })
            .then(() => {
                toast.success('Data saved in the database');
                setTimeout(() => {
                    history("/read");
                }, 1000);
            })
            .catch((error) => {
                console.error('Error while saving data:', error);
                toast.error('Failed to save data');
            });
    };

    return (
        <>
            <div style={{



            }}>
                <div className="sm:flex items-center w-full mt-3  px-4  justify-around container">
                    <div className=" w-auto min-w-[310px] sm:max-w-screen-md">
                        <div className="d-flex justify-content-between m-2">
                            <h2 className="font-extrabold font-mono text-2xl">Create</h2>
                            <Link to="/read">
                                <button className="btn btn-primary">Show Data</button>
                            </Link>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    maxLength={10}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Bio</label>
                                <textarea
                                    className="form-control"
                                    onChange={(e) => setBio(e.target.value)}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <ImgCont />
                    <ToastContainer position="top-left" autoClose={2000} />
                </div>
            </div>
        </>
    );
};

export default Create;
