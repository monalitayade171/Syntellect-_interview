import { useState } from "react"

export default function AddUserComponent({addData}) {
    const [uname, setUname] = useState();
    const [uemail, setEmail] = useState();
    const [urole, setURole] = useState();

    const handleUNameChange = (e) => {
        setUname(e.target.value);
    }
    const handleUEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleURoleChange = (e) => {
        setURole(e.target.value);
    }

    return(
        <>
            <div className="add_user">
                <h4>Add User</h4>
                <form>
                    <div className="input-row">
                        <label>Name</label>
                        <input type="text" name="uname" onChange={handleUNameChange}/>
                    </div>
                    <div className="input-row">
                        <label>Email</label>
                        <input type="Email" name="uemail" onChange={handleUEmailChange}/>
                    </div>
                    <div className="input-row">
                        <label>Role</label>
                        <input type="text" name="urole" onChange={handleURoleChange}/>
                    </div>
                    <div className="input-row">
                        <button onClick={(e) => addData(e,uname,uemail,urole)}>Add User</button>
                    </div>
                </form>

            </div>
           
        </>
    )
}