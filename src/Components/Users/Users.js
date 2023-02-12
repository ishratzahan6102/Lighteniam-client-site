import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './User.css'
const Users = () => {
    const {data : users = [], refetch, isLoading} = useQuery({
        queryKey : ['users'],
        queryFn: async () => {
            const res = await fetch(`https://lighteniam-server.vercel.app/users`)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='max-w-[867px] mx-auto user-list'>
            <h1 className='text-4xl'>User List</h1>
            <div className="overflow-x-auto">
            <table className="table w-full ">
                <thead>
                    <tr>
                        <th className='bg-white'>First name</th>
                        <th className='bg-white'>Last name</th>
                        <th className='bg-white'>Email</th>
                        <th className='bg-white'>Password</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        users?.map((user, i) => 
                        <tr key={user._id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
        </div>

    );
};

export default Users;