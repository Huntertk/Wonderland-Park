import { createSlice } from "@reduxjs/toolkit";
import { setBookingDetailsFromLocalStorage, getBookingDetailsFromLocalStorage } from "../../utils/localStorage";
import { toast } from 'react-toastify';
import { publicHolidays } from "../../data";


const initialState = {
    adultCount:0,
    childCount:0,
    seniorCount:0,
    adultTotal: 0,
    childTotal: 0,
    seniorTotal: 0,
    totalAmount: 0,
    isPaxModal: false,
    loading: false,
    totalAmount: 0,
    bookingDate: "",
    name:"", 
    email:"",
    mobileNumber:"",
    bookingResponse: "",
    responseClientUrl:"",
    type:"",
    totalBookingsCount: 0,
    bookingDay: "",
    bookingId:"",
    bookingTitle:"",
    pricing:{},
    prefrenceOpt:[]
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
        },
        infantCountIncrease : (state, action) => {
            state.infantCount = state.infantCount + 1
        },
        infantCountDecrease : (state, action) => {
            state.infantCount = state.infantCount - 1
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
        },
        adultTotalAmount: (state) => {
            const publicHoliday = publicHolidays.includes(state.bookingDate);

            if(state.type === 'bookTypeOne'){
                if(state.pref === "Malaysian") {
                    if(state.bookingDay === 'Fri' || state.bookingDay == 'Sat' || state.bookingDay === 'Sun'){
                        state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekend.adult
                        return 
                    } else if(publicHoliday){
                        state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekend.adult
                        return 
                    }
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[0].price.weekday.adult
                }  else if(state.pref === 'Non-Malaysian') {
                    if(state.bookingDay === 'Fri' || state.bookingDay == 'Sat' || state.bookingDay === 'Sun'){
                        state.adultTotal = state.adultCount *  state.prefrenceOpt[1].price.weekend.adult
                        return 
                    } else if(publicHoliday){
                        state.adultTotal = state.adultCount *  state.prefrenceOpt[1].price.weekend.adult
                        return 
                    }
                    state.adultTotal = state.adultCount *  state.prefrenceOpt[1].price.weekday.adult
                }
            }
        },
        childTotalAmount: (state) => {
            const publicHoliday = publicHolidays.includes(state.bookingDate);

            if(state.type === 'bookTypeOne'){
                if(state.pref === "Malaysian") {
                    if(state.bookingDay === 'Fri' || state.bookingDay == 'Sat' || state.bookingDay === 'Sun'){
                        state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekend.child
                        return 
                    } else if(publicHoliday){
                        state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekend.child
                        return 
                    }
                    state.childTotal = state.childCount *  state.prefrenceOpt[0].price.weekday.child
                }  else if(state.pref === 'Non-Malaysian') {
                    if(state.bookingDay === 'Fri' || state.bookingDay == 'Sat' || state.bookingDay === 'Sun'){
                        state.childTotal = state.childCount *  state.prefrenceOpt[1].price.weekend.child
                        return 
                    } else if(publicHoliday){
                        state.childTotal = state.childCount *  state.prefrenceOpt[1].price.weekend.child
                        return 
                    }
                    state.childTotal = state.childCount *  state.prefrenceOpt[1].price.weekday.child
                }

            } 
        },
        seniorTotalAmount: (state) => {
            const publicHoliday = publicHolidays.includes(state.bookingDate);

            if(state.type === 'bookTypeOne'){
                if(state.pref === "Malaysian") {
                    if(state.bookingDay === 'Fri' || state.bookingDay == 'Sat' || state.bookingDay === 'Sun'){
                        state.seniorTotal = state.seniorCount *  state.prefrenceOpt[0].price.weekend.senior
                        return 
                    } else if(publicHoliday){
                        state.seniorTotal = state.seniorCount *  state.prefrenceOpt[0].price.weekend.senior
                        return 
                    }
                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt[0].price.weekday.senior
                } else if(state.pref === 'Non-Malaysian') {
                    if(state.bookingDay === 'Fri' || state.bookingDay == 'Sat' || state.bookingDay === 'Sun'){
                        state.seniorTotal = state.seniorCount *  state.prefrenceOpt[0].price.weekend.senior
                        return 
                    } else if(publicHoliday){
                        state.seniorTotal = state.seniorCount *  state.prefrenceOpt[1].price.weekend.senior
                        return 
                    }
                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt[1].price.weekday.senior
                }
            }
        },
        countTotalBookingAmount: (state, action) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.seniorTotal
            state.bookingResponse = ""
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload.selectedBookingDate
            state.bookingResponse = ""
            state.bookingDay = action.payload.selectedDay.split(' ')[0]
        },
        openPaxModel: (state) => {
            state.isPaxModal = true
        },
        closePaxModel: (state) => {
            state.isPaxModal = false
        }, 
        cancelBooking: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            toast.warning("Booking Cancel")
            return state = initialState
        }, 
        bookingStart: (state,action) =>{
            state.loading  = true
            state.bookingResponse = ""
            
        },
        setPreference: (state, action) => {
            state.pref = action.payload.pref
        },
        bookingSucess: (state, action) => {
            state.loading  = false
            state.name = action.payload.name
            state.email = action.payload.email
            state.mobileNumber = action.payload.mobileNumber
            state.bookingResponse = action.payload.bookingResponse
            state.totalBookingsCount = action.payload.totalBookingsCount
            state.responseClientUrl = action.payload.responseClientUrl
            console.log(state);
            setBookingDetailsFromLocalStorage(state)
        },
        bookingFailed: (state, action) => {
            state.loading = false
            toast.error("Booking Failed")
        },
        bookingConfirm: (state, action) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
        choosingBooking: (state, action) => {
            state.type = action.payload.type
            state.bookingTitle = action.payload.title,
            state.pricing = action.payload.pricing,
            state.prefrenceOpt = action.payload.preference
        },
        settingBookingResponse: (state, action) => {
            state.bookingResponse = ""
            state.bookingId = action.payload.createBookingId
            setBookingDetailsFromLocalStorage(state)
        },
        initialRender: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
    }
})

export const {
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    infantCountDecrease,
    infantCountIncrease,
    seniorCountDecrease,
    seniorCountIncrease,
    adultTotalAmount,
    childTotalAmount,
    infantTotalAmount,
    seniorTotalAmount,
    countTotalBookingAmount, 
    setBookingDate,
    openPaxModel,
    closePaxModel,
    cancelBooking,
    bookingFailed,
    bookingSucess,
    bookingStart,
    bookingConfirm,
    choosingBooking,
    settingBookingResponse,
    initialRender,
    setPreference,
    generalCountDecrease,
    generalCountIncrease,
    generalTotalAmount
} = bookingSlice.actions

export default bookingSlice.reducer