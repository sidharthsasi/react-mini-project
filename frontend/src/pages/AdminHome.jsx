import axios from "axios";
import { useEffect, useState, useRef } from "react";
import {  useNavigate } from "react-router-dom";
import AddUserComp from "../components/AddUserComp";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { data } from "autoprefixer";
import EditUser from "../components/EditUser";

const AdminHome = () => {
  const [datas, setData] = useState([])
const navigate = useNavigate()
const [state, setState] = useState(false)
const [newData, setNewData] = useState([])

  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/all').then((response)=>setData(response.data))
  },[state])



  const onSubmit = (id)=>{
    confirmAlert({
        title: 'Confirm to Delete',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>  axios.post(`http://127.0.0.1:8000/delete/${id}`)
            .then(() => {
             
                const newData = datas.filter(value => {
                    return value.id !== id
                });
                setData(newData);
              
                
            }).catch(() => {
                alert("Something went wrong");
            })
          },
          {
            label: 'No',
            
          }
        ]
      })
    
  }
  const onEdit=()=>{

  }


  return (

    <div className="flex">
      
  <div className="h-screen top-0 bg-sky-400 sticky p-4">

   <button>
    <AddUserComp/>
   </button>
  
  </div>
  
  <div className="flex-grow p-4 bg-gray-300">
  <div>

   
<div className="flex flex-col">
  <div className="overflow-x-auto">
    <div className="p-1.5 w-full inline-block align-middle">
      <div className="overflow-hidden border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
              >
                Firstname
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
              >
                Lastname
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                Edit
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {datas.map((data, id)=>(


            <tr key={id}>
              <td className="px-6 py-4 text-sm font-medium text-left text-gray-800 whitespace-nowrap">
                {id+1}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {data.first_name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {data.last_name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {data.username}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {data.email}
              </td>
              {/* <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
             
                <button onClick={()=>{navigate(`/userupdate`, {state: {id: data.id}})}}
                  className="text-green-500 hover:text-green-700"
                
                >
                  Edit
                </button>
               
              </td> */}
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
             

                <button  onClick={()=>navigate(`/userupdate/${data.id}`)}
                  className="text-green-500 hover:text-green-700"
                
                >
                  Edit
                </button>
               
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <button onClick={()=>onSubmit(data.id)} className="text-red-500 hover:text-red-700">
                  Delete
                </button>
              </td>
            </tr>


            )) }

            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</div>
  </div>
  
</div>
  );
};

export default AdminHome;