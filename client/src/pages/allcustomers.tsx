import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {background} from '../assets'

type Customer = {
  _id: string;
  username: string;
  email_id: string;
  phone_no: string;
};

const img=background

const Allcustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/users/user');
        setCustomers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h1 >All Customers</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%',backgroundImage:'background' }}>
        <thead>
          <tr>
            <th style={{ border: '2px solid black', padding: '10px',backgroundColor:'#475BE8',WebkitTextFillColor:'whitesmoke' }}>USERNAME</th>
            <th style={{ border: '2px solid black', padding: '10px',backgroundColor:'#475BE8',WebkitTextFillColor:'whitesmoke' }}>PHONE-NUMBER</th>
            <th style={{ border: '2px solid black', padding: '10px' ,backgroundColor:'#475BE8',WebkitTextFillColor:'whitesmoke'}}>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td style={{ border: '2px solid black', padding: '10px' ,WebkitTextFillColor:'#585858'}}>{customer.username}</td>
              <td style={{ border: '2px solid black', padding: '10px',WebkitTextFillColor:'#585858' }}>{customer.phone_no}</td>
              <td style={{ border: '2px solid black', padding: '10px',WebkitTextFillColor:'#585858' }}>{customer.email_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allcustomers;
