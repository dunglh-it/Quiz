import React, { useState } from "react"
import "./DisplayInfo.scss"

// class DisplayInfo extends React.Component {
//     render() {
//         const { listUsers } = this.props
//         return (
//             <>
//                 {true && (
//                     <div className="display-info-container">
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div>My name is {user.name} </div>
//                                         <div>I'm age {user.age} </div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 )}
//             </>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props
    const [isShowHideListUser, setShowHideListUser] = useState(true)

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    return (
        <>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list user: " : "Show list user: "}
                </span>
            </div>
            {isShowHideListUser && (
                <div className="display-info-container">
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name is {user.name} </div>
                                    <div>I'm age {user.age} </div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default DisplayInfo
