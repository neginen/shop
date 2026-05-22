import React from 'react';
import { Link } from "react-router-dom";
import Header from '../header/Header';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignIn() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('لظفا یک نشانی ایمیل معتبر وارد کنید')
                .required('این فیلد الزامی است.'),

            password: Yup.string()
                .min(6, 'رمز عبور شما باید بیش از 6 کاراکتر طول داشته باشد.')
                .required('این فیلد الزامی  است.'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Header />
            <div className='flex items-start justify-center min-h-screen '>
                <div className="w-full max-w-md  p-4 m-4 bg-stone-200/50 ">
                    <div className="flex justify-center mb-8 text-[#A05263] ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=' size-32'>
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="space-y-6 ">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className={`w-full p-2 text-md  my-2 outline-none shadow-md rounded-full ${formik.touched.email && formik.errors.email ? 'shadow-rose-800' : 'shadow-stone-400'}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="text-rose-800 text-sm mt-1">{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="رمز عبور خود را وارد کنید"
                                className={`w-full p-2 text-md  my-2 outline-none shadow-md rounded-full ${formik.touched.password && formik.errors.password ? 'shadow-rose-800' : 'shadow-stone-400'}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <p className="text-rose-800 text-sm mt-1">{formik.errors.password}</p>
                            ) : null}
                        </div>                      
                        <div className='text-center '>
                            <button
                            type="submit"
                            className="w-40 rounded-full my-6 hover:bg-[#B76E79]   py-2 text-lg  text-stone-50 bg-[#A05263] "
                        >
                            ثبت
                        </button>
                        </div>                        
                        <div className=" text-end ">
                            <Link className="underline  text-sm text-rose-800">فراموشی رمز</Link>
                        </div>
                        <div className=" text-center ">
                           ثبت نام نکرده اید؟ <Link to="signup" className="underline text-rose-800">ثبت نام</Link>
                        </div>
                    </form>
                </div>
            </div>ّ
        </>
    );
}