import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDB from "@/lib/utils/connect";
import User from "@/lib/models/user";

export const POST = async (req) => {
  //req=>body
  //create
  const { name, email, password } = await req.json(); //
  const hashedPassword = await bcrypt.hash(password, 5);
  await connectToDB(); //mongoo.coo...
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    isAdmin: false,
  });

  try {
    await newUser.save(); //upload   and insert
    return new NextResponse("User has been created.", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};

//POST->create ----PATCH->update ---- DELETE    ----GET->fetching
