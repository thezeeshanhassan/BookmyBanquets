import express from "express";
import {
  createBooking,
  getMyBookings,
  cancelBooking,
  getBookingsByHallId,
  approveBooking,
  rejectBooking,
  getAllBookings // Optional (Admin)
} from "../controllers/booking.controller.js";

import {
  authenticateUser,
  authenticateHallManager,
  authenticateAdmin
} from "../middlewares/auth.js";

const router = express.Router();



router.post("/", authenticateUser, createBooking);
router.get("/my", authenticateUser, getMyBookings);
router.delete("/:id", authenticateUser, cancelBooking);

router.get("/hall/:hallId", authenticateHallManager, getBookingsByHallId);
router.patch("/:id/approve", authenticateHallManager, approveBooking);
router.patch("/:id/reject", authenticateHallManager, rejectBooking);

router.get("/all", authenticateAdmin, getAllBookings);


export default router;
