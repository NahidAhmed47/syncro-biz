import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {data} = await req.json();
        console.log(data)
        return NextResponse.json({message: "user registered successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}