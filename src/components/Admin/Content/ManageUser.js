import ModalCreateUser from "./ModalCreateUser"
import { FcPlus } from "react-icons/fc"
import "./ManageUser.scss"
import TableUser from "./TableUser"
import { useEffect, useState } from "react"
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService"
import ModalUpdateUSer from "./ModalUpdateUser"
import ModalViewUSer from "./ModalViewUser"
import ModalDeleteUSer from "./ModalDeleteUser"
import TableUserPaginate from "./TableUserPaginate"

const ManageUser = (props) => {
    const LIMIT_USER = 1
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUSer] = useState(false)
    const [showModalViewUser, setShowModalViewUSer] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUSer] = useState(false)

    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})
    const [dataDelete, setDataDelete] = useState({})

    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        // fetchListUsers()
        fetchListUsersWithPaginate(1)
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER)
        if (res.EC === 0) {
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
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

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUSer(true)
        setDataDelete(user)
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}

                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalUpdateUSer
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUSer}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalViewUSer
                    show={showModalViewUser}
                    setShow={setShowModalViewUSer}
                    dataView={dataView}
                    fetchListUsers={fetchListUsers}
                    resetViewData={resetViewData}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalDeleteUSer
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUSer}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default ManageUser
