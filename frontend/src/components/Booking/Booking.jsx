

import React, {useState, useContext}from 'react'
import './booking.css'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'

import { useNavigate } from 'react-router-dom'
import { authContext } from '../context/authContext'

import { BASE_URL } from '../../utils/config'

const Booking = ({ trek , avgRating }) => {
    const {price,reviews,title} = trek

    const navigate = useNavigate()

    const {user} = useContext(authContext)

    const [booking, setBooking] = useState({
        userId: user && user.id,
        userEmail: user && user.email,
        trekName: title,
        fullName: '',
        phone: '',
        guestSize:'1',
        bookAt:''
    })


    const handleChange = e => {
        
        setBooking (prev=> ({...prev, [e.target.id]:e.target.value}))
    }
    const ServiceCharge = 15
    
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(ServiceCharge)
        //send data to the server
    const handleClick = async e =>{
        e.preventDefault()

        console.log(booking)

        

        try {

            if(!user || user ===undefined || user=== null){
                return alert ('Please sign in')
            }

            // Validation for phone number
            const isValidPhoneNumber = /^\d{10}$/;
            if (!isValidPhoneNumber.test(booking.phone)) {
                return alert('Invalid phone number');
            }

            // Validation for date
            const selectedDate = new Date(booking.bookAt);
            const currentDate = new Date();

            if (selectedDate < currentDate) {
                return alert('Invalid date');
            }


            const res = await fetch(`${BASE_URL}/booking`,{
                method:'post',
                headers:{
                    'content-type': 'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking),
            })
            const result =await res.json()
            if(!res.ok){
                return alert(result.message)
            }

            navigate('/thankyou'); 
            
        } catch (err) {
            alert(err.message)
            
        }


    }

  return (
    <div className="booking">
    <div className="booking__top d-flex align-items-center 
    justify-context-between">
        <h3>${price} <span>/per person</span></h3>
        <span className="trek__rating d-flex align-items-center ">
                <i class="ri-star-fill"></i>
                {avgRating=== 0 ? null : avgRating}  ({reviews?.length})
                </span>
    </div>


        <div className="booking__form">
            <h5> YOUR'S INFORMATION</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" 
                    placeholder='Full Name' 
                    id ='fullName' 
                    required 
                    onChange ={handleChange} />
                </FormGroup>

                <FormGroup>
                     <input
                     type="tel"
                    placeholder='Phone Number (+977)'
                    id='phone'
                     pattern="\+977[0-9]{8,10}"
                        required
                         onChange={handleChange}
                    />
                <small > Format: 9XXXXXXXXX (10 digits)</small>
                </FormGroup>

                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id ='bookAt' 
                    required onChange ={handleChange} />
                    <input type="number" placeholder='Total Guest' id ='guestSize' 
                    required onChange ={handleChange} />
                </FormGroup>
            </Form>
        </div>


        <div className="booking__end">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className=' d-flex align-items-center gap-1'>
                        ${price} <i class="ri-close-fill"></i> 1 person</h5>
                    <span>${price}</span>
                </ListGroupItem>

                <ListGroupItem className='border-0 px-0'>
                    <h5>  Service Charge </h5>
                    <span> ${ServiceCharge}  </span>
                </ListGroupItem>


                <ListGroupItem className='border-0 px-0 total'>
                    <h5>  Total </h5>
                    <span> ${totalAmount}  </span>
                </ListGroupItem>
            </ListGroup>

            <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>
                Book Now </Button>
        </div>

    </div>
  )
}

export default Booking
