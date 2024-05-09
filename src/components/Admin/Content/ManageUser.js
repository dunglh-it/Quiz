import ModalCreateUser from "./ModalCreateUser"
import { FcPlus } from "react-icons/fc"
import "./ManageUser.scss"
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiService"
import ModalUpdateUSer from "./ModalUpdateUser"

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUSer] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        fetchListUsers()
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUSer(true)
        setDataUpdate(user)
    }

    return (
        <div className="manage-user-container">
            <div className="title"></div>

            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setShowModalCreateUser(true)
                        }}
                    >
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />

                <ModalUpdateUSer show={showModalUpdateUser} setShow={setShowModalUpdateUSer} dataUpdate={dataUpdate} />
            </div>
        </div>
    )
}

export default ManageUser
