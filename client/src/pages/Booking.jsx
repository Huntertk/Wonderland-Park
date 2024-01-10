import React, { useState } from 'react'
import image from '../assets/images/homeMain.avif'
import axios from 'axios'
import { BiEditAlt } from 'react-icons/bi'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bookingFailed,  bookingStart, bookingSucess } from '../features/booking/bookingSlice'
import { v4 as uuidv4 } from 'uuid';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../styles/booking.scss'

const Booking = () => {
    const navigate = useNavigate()
    const {
        bookingDate,
        adultCount,
        adultTotal,
        childCount,
        childTotal,
        seniorCount,
        seniorTotal,
        totalAmount,
        loading,
        type,
        bookingTitle,
        pref
    } = useSelector(store => store.booking)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const dispatch = useDispatch()
    const responseClientUrl = uuidv4()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(bookingStart())
            const res = await axios.post('/api/v1/booking', {
                name,
                email,
                mobileNumber,
                bookingDate,
                adultCount,
                childCount,
                seniorCount,
                totalAmount,
                bookingTitle,
                bookingType: type,
                responseClientUrl
            })
            const response = res.data;
            const {data} = await axios.get('/api/v1/booking/totalbooking')
            dispatch(bookingSucess({name, email, mobileNumber, bookingResponse: response.url, totalBookingsCount: data.totalCount, responseClientUrl}))

            window.location.href = response.url;
        } catch (error) {
            dispatch(bookingFailed())
            console.log(error);
        }

    }


    if (totalAmount === 0) {
        return <Navigate to="/" />
    }
    return (
        <section className='bookingMainContainer'>
            <div className="bookingWrapper">
                <img className='banner' src={"https://i.postimg.cc/jqQsNtmk/golden-2.jpg"} alt="" />
                <h1>Confirm and Pay</h1>
                <div className="detailsWrapper">
                    <p className='bookingType'>{bookingTitle}</p>
                    {pref && <p className='bookingType'>{pref}</p>}
                    <div className="topContainer">
                        <p>{bookingDate}</p>
                        <Link to="/date-confirm"><BiEditAlt /></Link>
                    </div>

                    <div className="guestQuantity">
                        {
                            adultCount === 0 ? "" :
                                <div className="guest">
                                    <p> Adult <span> X {adultCount}</span>
                                    </p>
                                    <span>MYR {adultTotal}</span>
                                </div>
                        }
                        {
                            childCount === 0 ? "" : <div className="guest">
                                <p> Child <span> X {childCount}</span></p>
                                <span>MYR {childTotal}</span>
                            </div>
                        }

                        {
                            seniorCount === 0 ? "" : <div className="guest">
                                <p> Senior <span> X {seniorCount}</span></p>
                                <span>MYR {seniorTotal}</span>
                            </div>
                        }


                        <div className="guest">
                            <p className='totalPayable'>Total Payable</p>
                            <span className='totalPayable'>MYR {totalAmount}</span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id='name'
                            autoComplete="off"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <label htmlFor="phone">Phone</label>
                        <PhoneInput
                        id="phone"
                            defaultCountry="MY"
                            placeholder="Enter phone number"
                            value={mobileNumber}
                            onChange={setMobileNumber}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            autoComplete="off"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label htmlFor="email">Confirm Email</label>
                        <input
                            type="email"
                            id='cemail'
                            autoComplete="off"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <button type='submit' disabled={loading}>{loading ? "Loading...." : "Pay Now"}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Booking