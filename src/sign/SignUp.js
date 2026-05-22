import React from 'react';
import Header from '../header/Header';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
    const formik = useFormik({
        initialValues: {
            email: '',
            number: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('لطفاً یک نشانی ایمیل معتبر وارد کنید.')
                .required('این فیلد الزامی است.'),
            password: Yup.string()
                .min(6, '.رمز عبور شما باید بیش از 6 کاراکتر طول داشته باشد ')
                .required('این فیلد الزامی است.'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'عبارت وارد شده با رمز عبور مطابقت ندارد.')
                .required('این فیلد الزامی است.'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Header />
            <div className='flex items-start justify-center min-h-screen '>
                <div className="w-full max-w-md  p-4 m-4  bg-stone-200/50  ">
                    <div className="flex mb-6 justify-center text-[#A05263]  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-32">
                            <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                        </svg>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className={`w-full p-2 text-md text-stone-600 outline-none my-2 shadow-md rounded-full ${formik.touched.email && formik.errors.email ? 'shadow-rose-800' : 'shadow-stone-400'}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-rose-800 text-sm mt-1">{formik.errors.email}</p>
                            )}
                        </div>

                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="رمز عبور خود را وارد کنید"
                                className={`w-full p-2 text-md  my-2 shadow-md outline-none rounded-full ${formik.touched.password && formik.errors.password ? 'shadow-rose-800' : 'shadow-stone-400'}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-rose-800 text-sm mt-1">{formik.errors.password}</p>
                            )}
                        </div>
                        <div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="تکرار رمز عبور"
                                className={`w-full p-2 text-md  my-2 shadow-md  outline-none rounded-full ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'shadow-rose-800' : 'shadow-stone-400'}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <p className="text-rose-800 text-sm mt-1">{formik.errors.confirmPassword}</p>
                            )}
                        </div>
                        <div className=' text-center'>
                            <button
                                type="submit"
                                className="w-40 rounded-full hover:bg-[#B76E79]  bg-[#A05263] py-2 text-lg my-6 text-stone-50 "
                            >
                                 ثبت
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}