import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ name, email, password: hashPassword });

    return NextResponse.json({ message: "User register" }, { status: 201 });
  } catch (error) {
    console.log("error:", error);
    return NextResponse.json({ message: "Error Reigsiter" }, { status: 500 });
  }
}
