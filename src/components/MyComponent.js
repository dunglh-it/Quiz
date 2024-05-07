import React, { useState } from "react"
import AddUserInfo from "./AddUserInfo"
import DisplayInfo from "./DisplayInfo"

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Dung", age: "22" },
//             { id: 2, name: "Hoang Dung", age: "23" },
//             { id: 3, name: "Dung La", age: "15" },
//         ],
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers],
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers
//         listUsersClone = listUsersClone.filter((item) => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone,
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//                 <br /> <br />
//                 <DisplayInfo listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
//             </div>
//         )
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Dung", age: "22" },
        { id: 2, name: "Hoang Dung", age: "23" },
        { id: 3, name: "Dung La", age: "15" },
    ])

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers
        listUsersClone = listUsersClone.filter((item) => item.id !== userId)
        setListUsers(listUsersClone)
    }

    return (
        <div>
            <AddUserInfo handleAddNewUser={handleAddNewUser} />
            <br /> <br />
            <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
        </div>
    )
}

export default MyComponent
