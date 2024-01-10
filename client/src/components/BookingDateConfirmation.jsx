import React, { useState, useEffect, useRef } from 'react'
import '../styles/bookingDateConfirmation.scss'
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { format,differenceInCalendarDays } from 'date-fns';
// import PaxModal from './PaxModal';
import { DayPicker, Row } from 'react-day-picker';
import { useDispatch, useSelector } from 'react-redux';
import { openPaxModel, setBookingDate, setPreference } from '../features/booking/bookingSlice';
import {Navigate, useNavigate} from 'react-router-dom'
import PaxModal from './PaxModal';
import axios from 'axios'
import moment from 'moment';
import PreferenceTour from './PreferenceTour';
import LoadingSpinner from './LoadingSpinner';


function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

const DateBtn = ({setSelectedDate, setCalenderOpen,selectedDate, calenderOpen, disabledDates}) => {
    const btnRef = useRef(null)

    const disabledBtnToDate = (btnDate) => {
        const settingHourToZero = disabledDates?.map(d => d.setHours(0,0,0,0))
        const findingDate = settingHourToZero?.find(d => d === new Date(Date.now() + btnDate).setHours(0,0,0,0))
        return findingDate
    }

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    function getDayName(date) {
        return new Date(date).toLocaleDateString('en-US', {weekday: 'short'});
    }
    const day = new Date().getDay()
    const date = new Date(Date.now()).getDate()

    const focusBtn = () => {
        btnRef.current.focus()
    }
    useEffect(() => {
        focusBtn()
    },[])
    return (
        <div className="dateBtnContainer">
           <button className={selectedDate?.toString() == new Date(Date.now() + 1000 *60 *60 *24)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000 *60 *60 *24 ))}
           disabled={disabledBtnToDate(1000 *60 *60 *24)}
           >
            <span>
                {new Date(Date.now() + 1000 *60 *60 *24).getDate()}
            </span>
            <span>
                {getDayName(new Date(Date.now() + 1000 *60 *60 *24))}
            </span>
           </button>
           <button 
           className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24*2)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24*2))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*2)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *2 ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 *24 * 2))}
            </span>
            </button>
           <button  
            className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24 * 3)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 3))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*3)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *3  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 3))}
            </span>
            </button>
           <button 
            className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24 *4)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 4))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*4)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *4  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 4))}
            </span>
            </button>
           <button ref={btnRef} className={calenderOpen ? "moreDates active" : "moreDates"} onClick={() => setCalenderOpen(prev => !prev)}>More Dates</button>
        </div>
    )
}

const BookingDateConfirmation = () => {
    const dispatch = useDispatch()
    const {isPaxModal, bookingDate, type,bookingTitle, pref, prefrenceOpt} = useSelector(store => store.booking)
        const [selectedDate, setSelectedDate] = useState("")
        const [calenderOpen, setCalenderOpen] = useState(false)
        const [blockedDates, setBlockedDates] = useState([])
        const disabledDates = blockedDates?.map((dates) => new Date(dates.blockDates))
        const [isLoading, setIsLoading] = useState(false)

        const disabledDays = [
            ...disabledDates
          ];

          const getBookTypeOneBlockDates = async () => {
            try {
                setIsLoading(true)
                const {data} = await axios.get('/api/v1/booktype-one-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
                setIsLoading(false)
              } catch (error) {
                  console.log(error);
              }
          }
        useEffect(() => {
            if(type === 'bookTypeOne'){
                getBookTypeOneBlockDates()
                
            }
          },[])

          
          if(!type){
              return <Navigate to="/" />
            }
            const defaultMonth = new Date(Date.now());
            
            const navigate = useNavigate()
            if(isLoading){
              return <LoadingSpinner />
            }
  return (
    <section className='bookingDateConfirmationMainContainer'>
        <div className="bookingDateWrapper">
            <h1>select date</h1>
            <DateBtn 
            setSelectedDate={setSelectedDate} 
            setCalenderOpen={setCalenderOpen} 
            selectedDate={selectedDate}
            calenderOpen={calenderOpen}
            disabledDates={disabledDates}
            />
            <div className="moreDatesContainer">
                <DayPicker
            style={calenderOpen === false && {display:'none'}}
            mode="single"
            selected={selectedDate} 
            fromDate={new Date()}
            components={{ Row: OnlyFutureRow }}
            hidden={isPastDate}
            onSelect={setSelectedDate}
            fromMonth={defaultMonth}
            toDate={new Date(Date.now() + 1000 * 60 *60 *24 *30)}
            disabled={disabledDates}
            />
            </div>
            {
                selectedDate && type === 'bookTypeOne' && <PreferenceTour selectedDate={selectedDate} data={prefrenceOpt}  /> 
            }
            {/* <PreferenceTour /> */}
            <div className="selectedDate">
                {
                    selectedDate ? <>
                    <div className='prefrenceAndDateContainer'>
                        <p>{
                            type === 'bookTypeOne' && pref ?  pref  : type === 'bookTypeTwo' ? "Quack Express Only" : 
                            type === 'bookTypeThree' ? "Night Park Admission Ticket" : 
                            type === 'bookTypeFour'  && pref && pref
                        }</p>
                    <p>You selected {format(selectedDate, 'PPP')}.</p>
                    </div>
                    {
                        type === 'bookTypeOne' && pref ? <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button> : <></>
                    }
                    </> : <p>Select One Date</p>
                }
            </div>
        </div>
        
       { isPaxModal && <PaxModal  selectedDate={selectedDate} />}
        
        
    </section>
  )
}

export default BookingDateConfirmation