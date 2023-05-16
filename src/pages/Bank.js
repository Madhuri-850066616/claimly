import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bank.css';
import { useLocation } from "react-router-dom";
import Dropdown from './dropdown.js';

const Bank = () => {
  
  const location = useLocation();
  const user = location.state.user;
  const [selectedBank, setSelectedBank] = useState('');
  const navigate = useNavigate();
  console.log(user._id,"user id ")

  const onHeaderClick = () => {
    navigate('/');
  };

  const onIconPersonClick = () => {
    navigate('/user-page', {state: {user}});
  };

  const onImgClick = () => {
    navigate('/insurance', { state: { bankName: selectedBank, user} });
  };

  const onMicrosoftTeamsImage12Click = () => {
    navigate('/');
  };

  const handleBankClick = async (e) => {
    const bankName = e.target.name;
    const user_id = user
    console.log("check",bankName)
    
    console.log(selectedBank);

    const res = await fetch('https://random-jl1z.onrender.com/claims/claim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bank_name: bankName, user_id
      }),
    });
    onImgClick()
    const data = await res.json();
    console.log(data._id,"from databse")
    localStorage.setItem('claim_id', data._id);
    navigate('/insurance',{state: {user}} );
  };

  return (
    <div className='bank'>
      <button className='header3' onClick={onHeaderClick}>
        <img className='logo-icon4' alt='' src='/logo2@3x.png' />
      </button>
     
      <Dropdown/>
      <div className='photo' method='POST'>
        <button className='img' name="ICICI"  onClick={handleBankClick} />
        <button className='img1' name='Kotak Mahindra' onClick={handleBankClick} />
        <button className='img2' name='HDFC' onClick={handleBankClick} />
        <button className='img3' name='Indian-Overseas' onClick={handleBankClick} />
        <button className='img4' name='CANARA' onClick={handleBankClick} />
        <button className='img5' name='SBI' onClick={handleBankClick} />
        <button className='img6' name='Bank-of-Baroda' onClick={handleBankClick} />
        <button className='img7' name='SIB' onClick={handleBankClick} />
        <div className='icici'>{`ICICI `}</div>
        <div className='sbi'>{`SBI `}</div>
        <div className='hdfc'>{`HDFC `}</div>
        <div className='bank-of-baroda'>{`Bank of Baroda `}</div>
        <div className='kotak-mahindra'>{`Kotak Mahindra `}</div>
        <div className='canara'>{`Canara `}</div>
        <div className='indian-overseas'>{`Indian Overseas `}</div>
        <div className='sib'>{`SIB `}</div>
      </div>
      <div className='step-1-choose-container'>
        <span>{`Step 1- Choose Your `}</span>
        <span className='respective-bank'>Respective Bank</span>
      </div>
      <div className='img-group'>
        <img className='img-icon6' alt='' src='/img.svg' onClick={onImgClick} />
        <button className='microsoftteams-image-1-26'

          onClick={onMicrosoftTeamsImage12Click}
        />
        <div className="contact-us-parent3">
          <div className="contact-us6">Contact US</div>
          <div className="email-claimlygmailcom6">Email: claimly@gmail.com</div>
          <div className="ph-no-916">Ph No: +91 876543210</div>
        </div>
        <img className="group-child16" alt="" src="/frame-3423.svg" />
      </div>
    </div>
  );
};

export default Bank;