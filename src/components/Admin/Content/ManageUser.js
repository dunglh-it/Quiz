import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss"

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title"></div>

            <div className="users-content">
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser
