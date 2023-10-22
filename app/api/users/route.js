import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

export async function POST(request) {
  const {email, password} = await request.json();
  await connectMongoDB();
  await User.create({email,password})
  return NextResponse.json({message: "User Created"}, {status: 201})
}