import Trek from "../models/Trek.js";
import Review from "../models/Review.js";

export const createReview = async(req, res) => {
    const trekId = req.params.trekId;
    const userId = req.body.userId;
    const newReview = new Review({
        ...req.body,
        userId: userId
    });

    try {
        const savedReview = await newReview.save();

        // After creating a new review, now update the reviews array of the trek...
        await Trek.findByIdAndUpdate(trekId, {
            $push: { reviews: savedReview._id}
        });

        res.status(200).json({
            success: true,
            message: 'Review submitted',
            data: savedReview
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to submit',
            error: err.message
        });
    }
};
