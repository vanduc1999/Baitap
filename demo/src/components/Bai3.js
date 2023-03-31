import React from "react";
import { useState } from "react";

const DEFAULT_USER = { name: '', email: '', phone: '' }
const TableuserList = () => {
    const [userList, setUserList] = useState([])
    const [formData, setformData] = useState([DEFAULT_USER])

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setformData({
            ...formData,
            [name]: value
        })
    }

    const onClick = () => {
        if (formData.id) {
            const newUserList = userList.map((item) => {
                if (item.id === formData.id) {
                    return formData
                }
                return item
            })
            setUserList(newUserList)
        }
        else {
            setUserList([
                ...userList,
                {
                    id: Math.random(),
                    ...formData,
                }
            ])
        }

        setformData(DEFAULT_USER)
    }

    const onEdit = (item) => {
        setformData(item)
    }
    return (
        <div>
            <div>
                <input name='name' placeholder="Name" value={formData.name} onChange={onChange} />                
                <input name='email' placeholder="Email" value={formData.email} onChange={onChange} />
                <input name='phone' placeholder="Phone" value={formData.phone} onChange={onChange} />
                
                <button onClick={onClick}>{formData.id ? 'Edit' : 'Add'}</button>
            </div>
            {userList.map((item) => {
                return (
                    <table>
                        <tr>
                            <td>Name: {item.name} </td>
                        </tr>
                        <tr>
                            <td>Email: {item.email} </td>
                        </tr>
                        <tr>
                            <td>Phone: {item.phone} </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={(e) => { onEdit(item) }}>Edit</button>
                            </td>
                        </tr>
                    </table>
                )
            })}
        </div >
    )
}

export default TableuserList