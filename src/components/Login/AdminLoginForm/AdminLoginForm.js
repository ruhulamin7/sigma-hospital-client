import React from 'react';
import { useForm } from 'react-hook-form';
import {adminLogin} from '../../../features/adminSlice'
import { useDispatch, useSelector } from 'react-redux'
import "./AdminLoginForm.css";
import { useNavigate } from 'react-router-dom';

const AdminLoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
  const dispatch = useDispatch()
  const token = useSelector((state) => state?.admin?.admin?.token);  
 
  const onSubmit = data => {
    reset()
    dispatch(adminLogin(data))  
    }
    if (token) {
        navigate(`/dashboard`)
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">
                            ADMIN PANEL LOGIN
                        </div>
                            <div className="col-lg-12 login-for">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label className="form-control-label">Email Address</label>
                                        <input type="email" className="form-control" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" className="form-control"  {...register("passWord", {required: true})} />
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                        </div>
                                        <div className="col-lg-6">
                                        <button type='submit' className="pure-button fuller-button blue">ACCEPT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>
          );
};
export default AdminLoginForm;