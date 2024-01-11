import '../styles/preferenceTour.scss'
import { preferenceData, publicHolidays } from '../data'
import {useDispatch, useSelector} from 'react-redux'
import { countTotalBookingAmount, setPreference } from '../features/booking/bookingSlice'
import { format } from 'date-fns'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CardData = ({cardData, day, selectedDate}) => {
    const {pref, pricing}  = useSelector(state => state.booking)
    const dispatch = useDispatch()
    let price;
    const formatDateToFull = selectedDate && format(selectedDate, 'PPP')
    const publicHoliday = publicHolidays.includes(formatDateToFull)
    
    if(day === 'Fri' || day === 'Sat' || day === 'Sun') {
        price = cardData.price.weekend.adult
    } else if(publicHoliday) {
        price = cardData.price.weekend.adult
    } else{
        price = cardData.price.weekday.adult
    }
    return (
        <div className="prefrenceTabCard">
        <h1>{cardData.title}</h1>
        <div className="content">
             <p>MYR {price}</p>
            
            <button onClick={() => {
                dispatch(setPreference({pref: cardData.title}))
            }}>{pref === cardData.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                cardData.details.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}

const PreferenceTour = ({data, selectedDate}) => {
    const day = selectedDate?.toString()?.split(' ')[0]
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer">
            {
                data.map((d, index) => (
                    <CardData key={index} cardData={d} selectedDate={selectedDate} day={day}  />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour