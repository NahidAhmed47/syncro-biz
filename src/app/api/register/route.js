import { NextResponse } from "next/server";
import User from "../../../../models/user";
import { connectDB } from "../../../../database/mongodb";

export async function POST(req){
    try {
        const {data} = await req.json();

        await connectDB();
        await User.create(data);

        return NextResponse.json({message: "user registered successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}