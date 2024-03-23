

import Trek from '../models/Trek.js'


//create new trek

export const createTrek = async (req,res)=>{

    const newTrek = new Trek(req.body)

    try{
        const savedTrek = await newTrek.save()

        res.status(200)
        .json ({
            success:true,
            message:'Successfully created', 
            data:savedTrek,
        })

    } catch (err){

         res.status(500)
        .json ({
            success:false,
            message:'Failed to create. Try again'
        })

    }
}

//update trek

export const updateTrek = async(req,res) => {

    const id = req.params.id
    try{

        const updatedTrek = await Trek.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200)
        .json ({
            success:true,
            message:'Successfully updated', 
            data: updatedTrek
        })

        

    } catch (err) {

        res.status(500)
        .json ({
            success:false,
            message:'Failed to update.',
        })

    }
}


//delete trek

export const deleteTrek = async(req,res) => {
    const id = req.params.id
    try{

        await Trek.findByIdAndDelete(id)

        res.status(200)
        .json ({
            success:true,
            message:'Successfully deleted',
        })

        

    } catch (err) {

        res.status(500)
        .json ({
            success:false,
            message:'Failed to delete.',
        })

    }
}


//getSingle trek

export const getSingleTrek = async(req,res) => {
    const id = req.params.id;

    try{
        const trek = await Trek.findById(id).populate('reviews')

        res.status(200)
        .json ({
            success:true,
            message:'Successful',
            data: trek,
        })

        

    } catch (err) {

        res.status(404)
        .json ({
            success:false,
            message:'Not found.',
        })

    }
}

//get all treks by rating and price


// Function to calculate average rating
const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
        return 0;
    }
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
};  

export const getAllTrek = async (req, res) => {
    try {
        let query = Trek.find({}).populate('reviews');

        // Pagination
        const page = parseInt(req.query.page) || 0;
        const pageSize = 8;
        query = query.skip(page * pageSize).limit(pageSize);

        // Sorting by price
        const sortByPrice = req.query.sortByPrice === 'true';
        const priceSortDirection = req.query.priceSortDirection === 'desc' ? -1 : 1;
        if (sortByPrice) {
            query = query.sort({ price: priceSortDirection });
        }

        // Sorting by rating
        const sortByRating = req.query.sortByRating === 'true';
        if (sortByRating) {
            const treks = await Trek.find({}).populate('reviews');
            // Calculate average rating for each trek
            const treksWithRating = treks.map((trek) => {
                const avgRating = calculateAverageRating(trek.reviews);
                return { ...trek._doc, avgRating };
            });
            // Sort treks by average rating in descending order
            const sortedTreks = treksWithRating.sort((a, b) => b.avgRating - a.avgRating);
            return res.status(200).json({
                success: true,
                count: sortedTreks.length,
                message: 'Successfully fetched sorted treks by rating',
                data: sortedTreks,
            });
        }

        const treks = await query.exec();

        res.status(200).json({
            success: true,
            count: treks.length,
            message: 'Successful',
            data: treks,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};





//get treks by search

export const getTrekBySearch = async(req,res) => {

    //here i means case sensitive
    
    const district = new RegExp(req.query.district,'i') 

    try {

        //here gte means greater than equals

        const treks = await Trek.find({ district}) .populate('reviews')

        res.status(200)
        .json ({
            success:true,
            message:'Successful',
            data: treks,
        })

        
    } catch (err) {

        res.status(404)
        .json ({
            success:false,
            message:'Not found.',
        })
        
    }
}



//get Featured trek

export const getFeaturedTrek = async(req,res) => {

    try{

        const treks = await Trek.find({featured:true}).limit(8)

            res.status(200).json({
            success:true, 
            message:'Successful',
            data: treks,
            })
        

    } catch (err) {

        res.status(404)
        .json ({
            success:false,
            message:'Not found.',

    })
}
}


//get treks count

export const getTrekCount = async (req,res)=>{
    try {

        const trekCount = await Trek.estimatedDocumentCount()

        res.status(200).json ({success:true, data:trekCount})
        
    } catch (err) {

        res.status(500).json ({success:true, message:'failed to fetch...'})
        
    }
}
