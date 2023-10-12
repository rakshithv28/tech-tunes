import { NextResponse } from "next/server";
import connectToDB from "@/lib/utils/connect";
import Booking from "@/lib/models/appointment";

export const POST = async (req) => {
  const { date, brand, model, name, city, email, contact, address } =
    await req.json();
  await connectToDB();
  const newAppointment = new Booking({
    date,
    brand,
    model,
    name,
    email,
    city,
    contact,
    address,
  });

  try {
    await newAppointment.save();
    return new NextResponse("Booking successful", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
