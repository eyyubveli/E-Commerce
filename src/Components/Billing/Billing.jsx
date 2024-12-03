import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import RazorPay from "../../img/razorpay.png";
import './Billing.scss';
import { countries } from '../../items/items';
import { useSelector } from 'react-redux';

const Billing = () => {
    const products = useSelector(state => state.products.product);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            pincode: '',
            country: '',
            payment: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            phone: Yup.string()
                .matches(/^\+?\d{10,15}$/, 'Phone number is not valid')
                .required('Phone is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            address1: Yup.string().required('Street Address is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            pincode: Yup.string()
                .matches(/^\d{6}$/, 'Pincode must be 6 digits')
                .required('Pincode is required'),
            country: Yup.string().required('Country is required'),
            payment: Yup.boolean().oneOf([true], 'You must agree to the payment terms'),
        }),
        onSubmit: (values) => {
            console.log('Form Data:', values);
        },
    });

    return (
        products.length > 0 && (<section className="billing">
            <div className="billing-wrapper">
                <div className="billing-left">
                    <h4>Billing Details</h4>
                    <form onSubmit={formik.handleSubmit} className='form'>
                        <div className="form-wrapper">
                            <div className="form-left">
                                <div className="form-item">
                                    <div>
                                        <label htmlFor="firstName">First Name*</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            {...formik.getFieldProps('firstName')}
                                        />
                                        {formik.touched.firstName && formik.errors.firstName ? (
                                            <div className="error">{formik.errors.firstName}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName">Last Name*</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            {...formik.getFieldProps('lastName')}
                                        />
                                        {formik.touched.lastName && formik.errors.lastName ? (
                                            <div className="error">{formik.errors.lastName}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="form-item">
                                    <div>
                                        <label htmlFor="phone">Phone*</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            {...formik.getFieldProps('phone')}
                                        />
                                        {formik.touched.phone && formik.errors.phone ? (
                                            <div className="error">{formik.errors.phone}</div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email Address*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            {...formik.getFieldProps('email')}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="error">{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="form-item">
                                    <div>
                                        <label htmlFor="address1">Street Address*</label>
                                        <input
                                            type="text"
                                            id="address1"
                                            placeholder="House No./ Apartment No./ Plot No."
                                            {...formik.getFieldProps('address1')}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="address2"
                                            placeholder="Street Name/ Locality"
                                            {...formik.getFieldProps('address2')}
                                        />
                                        {formik.touched.address1 && formik.errors.address1 ? (
                                            <div className="error">{formik.errors.address1}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="form-item">
                                    <div>
                                        <label htmlFor="city">City*</label>
                                        <input
                                            type="text"
                                            id="city"
                                            {...formik.getFieldProps('city')}
                                        />
                                        {formik.touched.city && formik.errors.city ? (
                                            <div className="error">{formik.errors.city}</div>
                                        ) : null}
                                    </div>


                                    <div>
                                        <label htmlFor="state">State*</label>
                                        <input
                                            type="text"
                                            id="state"
                                            {...formik.getFieldProps('state')}
                                        />
                                        {formik.touched.state && formik.errors.state ? (
                                            <div className="error">{formik.errors.state}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="form-item">
                                    <div>
                                        <label htmlFor="pincode">Pincode*</label>
                                        <input
                                            type="text"
                                            id="pincode"
                                            {...formik.getFieldProps('pincode')}
                                        />
                                        {formik.touched.pincode && formik.errors.pincode ? (
                                            <div className="error">{formik.errors.pincode}</div>
                                        ) : null}
                                    </div>

                                    <div>
                                        <label htmlFor="country">Country*</label>
                                        <div>
                                            <select
                                                id="country"
                                                name="country"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.country}
                                                className={formik.touched.country && formik.errors.country ? 'error-input' : ''}
                                            >
                                                <option value="">Select your country</option>
                                                {countries.map((country, index) => (
                                                    <option key={index} value={country}>
                                                        {country}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        {formik.touched.country && formik.errors.country ? (
                                            <div className="error">{formik.errors.country}</div>
                                        ) : null}
                                    </div>
                                </div>


                                <div>
                                    <h4>Billing Details</h4>

                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            id="payment"
                                            {...formik.getFieldProps('payment')}
                                        />
                                        <div>
                                            <label htmlFor="payment">
                                                Pay by <img src={RazorPay} alt="RazorPay" title="RazorPay" /> Cards, NetBanking, Wallet & UPI
                                            </label>

                                            <p>
                                                Your personal data will be used to process your order, support
                                                your experience throughout this website, and for other purposes
                                                described in our Privacy Policy.
                                            </p>

                                            {formik.touched.payment && formik.errors.payment ? (
                                                <div className="error">{formik.errors.payment}</div>
                                            ) : null}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="form-right">

                                <div className='form-item'>
                                    <input type="checkbox" id='diff' />
                                    <label htmlFor="diff">Ship to a Different Address</label>
                                </div>
                                <div className="form-item">
                                    <label htmlFor="notes">Order notes (optional)</label>
                                    <input type="text" id='notes' placeholder='Order notes (optional)
' />
                                </div>

                                <button type='submit'>Place Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>)

    );
};

export default Billing;
