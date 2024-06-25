import React, { useState, useEffect } from 'react';
import './User.css';
import { VscChevronUp } from "react-icons/vsc";
import Header1 from '../../components/Header1/Header1';
import axios from 'axios';
import Modul from '../../components/Modul/Modul';
import { PatternFormat } from 'react-number-format';

const User = ({ btn1 }) => {
    const [modal, setModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '', number: '' });
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3000/users')
            .then(res => setUsers(res.data))
            .catch(err => console.error('Error fetching users:', err));
    }, []);

    const handleAddOrEdit = (e) => {
        e.preventDefault();
        if (isEdit) {
            axios
                .put(`http://localhost:3000/users/${selectedUserId}`, newUser)
                .then(res => {
                    setUsers(users.map(user => (user.id === selectedUserId ? res.data : user)));
                    resetForm();
                })
                .catch(err => console.error('Error updating user:', err));
        } else {
            axios
                .post('http://localhost:3000/users', newUser)
                .then(res => {
                    setUsers([...users, res.data]);
                    resetForm();
                })
                .catch(err => console.error('Error adding user:', err));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = (user) => {
        setNewUser({ name: user.name, email: user.email, number: user.number });
        setSelectedUserId(user.id);
        setIsEdit(true);
        setModal(true);
    };

    const handleDelete = (userId) => {
        axios
            .delete(`http://localhost:3000/users/${userId}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch(err => console.error('Error deleting user:', err));
    };

    const resetForm = () => {
        setNewUser({ name: '', email: '', number: '' });
        setIsEdit(false);
        setSelectedUserId(null);
        setModal(false);
    };

    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const links = users?.map((user, index) => (
        <tr key={user.id}>
            <td style={{ textAlign: 'center' }}>{index + 1}</td>
            <td className='td'>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.number}</td>
            <td>
                <div className="oll">
                    <button className="btn btn-primary" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                    <button className="btn btn-dangert" onClick={() => setModal(true)}>Add user</button>
                </div>
            </td>
        </tr>
    ));

    return (
        <>
            <Header1 />
            <div className='hammasi_list'>
                <div className="hammasi_row">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>№</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th style={{ width: '100px', textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {links}
                        </tbody>
                    </table>
                    {modal && (
                        <Modul btn1={setModal}>
                            <div className="modal">
                                <div className="modal-content">
                                    <form onSubmit={handleAddOrEdit}>
                                        <div className="form-group">
                                            <label>Name</label> <br />
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder='name'
                                                value={newUser.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label> <br />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder='email'
                                                value={newUser.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Number</label> <br />
                                            <PatternFormat
                                                format="+998 (##) ### ## ##"
                                                allowEmptyFormatting mask="_"
                                                name="number"
                                                placeholder='number'
                                                value={newUser.number}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn-primaryy">{isEdit ? "Update" : "Add"}</button>
                                    </form>
                                </div>
                            </div>
                        </Modul>
                    )}
                </div>
            </div>
            <div className="back-to-top">
                {visible &&
                    <button onClick={scrollToTop} className="back-to-top-button">
                        <VscChevronUp />
                    </button>
                }
            </div>
        </>
    );
}

export default User;
