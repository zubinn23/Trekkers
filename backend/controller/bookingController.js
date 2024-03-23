

import Booking from '../models/Booking.js'


//create new booking

export const createBooking = async(req,res) =>{
    const newBooking = new Booking(req.body)
    try {

        const savedBooking = await newBooking.save()
        res.status(200).json({success:true, message:'Your trekking package has been booked successfully..... ',
        data:savedBooking})
        
    } catch (err) {
console.log(err);
        res.status(500).json({success:false,message:'internal server error..... '})
        
    }
}

//get single booking

export const getBooking = async(req,res)=>{
    const id = req.params.id

    try { 
        const book = await Booking.findById(id)

        res.status(200).json({success:true, message:'successfull.. ',
        data:book})
    } catch (err) {
        res.status(404).json({success:false, message:'Not found.. '})
    }
}

//get all booking

export const getAllBooking = async(req,res)=>{
    const id = req.params.id

    try { 
        const books = await Booking.find()

        res.status(200).json({success:true, message:'successfull.. ',
        data:books})
    } catch (err) {
        res.status(500).json({success:false, message:'internal server error.. '})
    }
}