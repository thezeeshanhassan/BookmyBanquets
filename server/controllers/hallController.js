// const { PrismaClient } = require('@prisma/client');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createHall = async (req, res) => {
    try {
        const { name, description, capacity, price, imageURLs, status, addressId, amenities } = req.body;

        const hall = await prisma.hall.create({
            data: {
                name,
                description,
                capacity,
                price,
                imageURLs: imageURLs.join(','),
                status,
                userId: req.user.id,
                addressId,
                amenities: {
                    create: amenities.map(id => ({ amenityId: id }))
                }
            }
        });
        res.status(201).json(hall);
    } catch (err) {
        res.status(500).json({ error: 'Error creating hall', details: err.message });
    }
};

export const updateHall = async (req, res) => {
    try {
        const updated = await prisma.hall.update({
            where: { hallId: req.params.id },
            data: req.body
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Hall update failed', details: err.message });
    }
};

export const deleteHall = async (req, res) => {
    try {
        await prisma.hall.delete({ where: { hallId: req.params.id } });
        res.json({ message: 'Hall deleted successfully' });
    } catch (err) {
        res.status(404).json({ error: 'Hall not found', details: err.message });
    }
};

export const getAllHalls = async (req, res) => {
    console.log("Hello")
    try {
        const halls = await prisma.hall.findMany({
            include: {
                address: true,
                amenities: { include: { amenity: true } },
                reviews: true
            }
        });
        res.json(halls);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch halls' });
    }
};

export const getSingleHall = async (req, res) => {
    try {
        const hall = await prisma.hall.findUnique({
            where: { hallId: req.params.id },
            include: {
                address: true,
                amenities: { include: { amenity: true } },
                reviews: true
            }
        });
        if (!hall) return res.status(404).json({ message: 'Hall not found' });
        res.json(hall);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch hall' });
    }
};

export const getHallAmenities = async (req, res) => {
    try {
        const amenities = await prisma.amenitiesHall.findMany({
            where: { hallId: req.params.id },
            include: { amenity: true }
        });
        res.json(amenities);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch amenities' });
    }
};

export const getHallBookings = async (req, res) => {
    try {
        const bookings = await prisma.booking.findMany({ where: { hallId: req.params.id } });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
};

export const searchHalls = async (req, res) => {
    try {
        const { city, minPrice, maxPrice } = req.query;
        const halls = await prisma.hall.findMany({
            where: {
                price: {
                    gte: Number(minPrice) || 0,
                    lte: Number(maxPrice) || 100000
                },
                address: {
                    city: { contains: city, mode: 'insensitive' }
                }
            },
            include: { address: true, amenities: true }
        });
        res.json(halls);
    } catch (err) {
        res.status(500).json({ error: 'Search failed', details: err.message });
    }
};

export const checkAvailability = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        const overlapping = await prisma.booking.findMany({
            where: {
                hallId: req.params.id,
                OR: [
                    { startDate: { lte: new Date(endDate) }, endDate: { gte: new Date(startDate) } }
                ]
            }
        });
        res.json({ available: overlapping.length === 0 });
    } catch (err) {
        res.status(500).json({ error: 'Availability check failed', details: err.message });
    }
};

export const getHallReviews = async (req, res) => {
    try {
        const reviews = await prisma.review.findMany({ where: { hallId: req.params.id } });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get reviews' });
    }
};

export const postReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const review = await prisma.review.create({
            data: {
                rating,
                comment,
                userId: req.user.id,
                hallId: req.params.id
            }
        });
        res.status(201).json({ review, message: "Review submitted successfully" });
    } catch (err) {
        res.status(500).json({ error: 'Failed to submit review', details: err.message });
    }
};

export const getTopRatedHalls = async (req, res) => {
    try {
        const halls = await prisma.hall.findMany({
            include: {
                reviews: true
            }
        });
        const rated = halls.map(h => ({
            ...h,
            avgRating: h.reviews.reduce((sum, r) => sum + r.rating, 0) / (h.reviews.length || 1)
        })).sort((a, b) => b.avgRating - a.avgRating);

        res.json(rated);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch top halls' });
    }
};

export const getOwnedHalls = async (req, res) => {
    try {
        const halls = await prisma.hall.findMany({
            where: { userId: req.user.id },
            include: { reviews: true, amenities: { include: { amenity: true } } }
        });
        res.json(halls);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch your halls' });
    }
};
