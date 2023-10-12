import Booking from "@/lib/models/appointment";
import connectToDB from "@/lib/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();

    const bookings = await Booking.find();

    return new NextResponse(JSON.stringify(bookings), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Failed to fetch all prompts", {
      status: 500,
    });
  }
};
