import ModalCreateUser from "./ModalCreateUser"
import { FcPlus } from "react-icons/fc"
import "./ManageUser.scss"
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/apiService"
import ModalUpdateUSer from "./ModalUpdateUser"
import ModalViewUSer from "./ModalViewUser"

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUSer] = useState(false)
    const [showModalViewUser, setShowModalViewUSer] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})

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

    const handleClickBtnView = (user) => {
        setShowModalViewUSer(true)
        setDataView(user)
    }

    const resetUpdateData = () => {
        setDataUpdate({})
    }

    const resetViewData = () => {
        setDataView({})
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
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />

                <ModalUpdateUSer
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUSer}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />

                <ModalViewUSer
                    show={showModalViewUser}
                    setShow={setShowModalViewUSer}
                    dataView={dataView}
                    fetchListUsers={fetchListUsers}
                    resetViewData={resetViewData}
                />
            </div>
        </div>
    )
}

export default ManageUser
