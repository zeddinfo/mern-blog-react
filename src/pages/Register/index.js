import React from 'react';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './register.scss';
// import {Input} from '../../components';

const Register = () => {
    return (
        <div className="main-page">
           <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg"/>
           </div>
           <div className="right">
               <p className="title">Form Register</p>
              {/* <Input /> */}
                <Input label="Full Name" placeholder="Full Name"/>
                <Gap height={10}/>
                <Input label="Email" placeholder="Email"/>
                <Gap height={10}/>
                <Input label="Password" placeholder="Password"/>
                <Gap height={20}/>
                <Button title="Register"/>
                <Gap height={100}/>
                <Link title="Lembali ke Login"/>
           </div>
        </div>
    )
}

export default Register
