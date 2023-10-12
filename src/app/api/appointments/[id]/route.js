import Booking from "@/lib/models/appointment";
import connectToDB from "@/lib/utils/connect";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Booking.findByIdAndDelete(params.id);
    return new NextResponse("Booking Deleted successfull", { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to Delete ", { status: 500 });
  }
};
