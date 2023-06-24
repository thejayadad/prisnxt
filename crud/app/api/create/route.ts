import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Note } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";


export const POST = async (request: Request) =>{
    const body: Note = await request.json();
    const product = await prisma.note.create({
        data:{
            title: body.title,
            content: body.content,
        }
    });
	console.log(data)
    return NextResponse.json(product, {status: 201});
}