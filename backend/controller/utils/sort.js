import Trek from '../models/Trek.js';

export const getTreks = async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const sortByRating = req.query.sortByRating === 'desc' ? -1 : 1;

    try {
        let treks = await Trek.find({})
            .skip(page * 8)
            .limit(8)
            .sort({ rating: { $exists: true, $ne: null }, rating: sortByRating });

        // Handle unrated treks
        const unratedTreks = await Trek.find({ rating: { $exists: false } });
        treks = treks.concat(unratedTreks);

        res.status(200).json({
            success: true,
            count: treks.length,
            message: 'Successful',
            data: treks,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch treks',
            error: err.message,
        });
    }
};
