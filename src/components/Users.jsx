import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userDelete } from '../store/reducers/UserReducers';

function Users() {

    const { users } = useSelector((state) => state.UserReducers);
    const dispatch = useDispatch();
    const DeleteHandler = (index) => {
        dispatch(userDelete(index));
    }

    return (
        <div className='bg-red-200 container m-auto'>
            <h1 className='p-5 font-semibold text-xl'>User List</h1>
            {users.map((user, index) => {
                return <div className='m-5' key={user.id}>
                    <h1>Name : {user.name}  <span onClick={() => DeleteHandler(index)} className='font-black text-red-800'>X</span></h1>
                </div>;
            })}
        </div>
    )
}

export default Users;