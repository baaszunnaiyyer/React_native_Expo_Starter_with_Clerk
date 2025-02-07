import { data } from '@/constants';
import { neon } from '@neondatabase/serverless';


export async function Post(request:Request) {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const {name, email, clerkId} = await request.json();

    if(!name || !email || !clerkId){
        return Response.json({
            data: {error :"Missing Required Fields"},
            init: {status: 400 }
        })
    }

    const response = await sql`
        INSERT INTO users(
            name,
            email,
            clerk_id,
        )
        VALUES(
            ${name},
            ${email},
            ${clerkId}
        )
    `

    try {
        
    } catch (err) {
        
    }
}
