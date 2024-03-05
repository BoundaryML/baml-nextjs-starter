export const dynamic = 'force-dynamic'

import b from "@/baml_client"

export async function POST(request: Request) {
    const result = await b.ClassifyMessage({
        message: "Hello from BAML!",
        message_date: "2021-01-01T00:00:00Z",
    });

    return Response.json(result);
}

// export async function POST(request: Request) {
//     const res = await request.json()
//     return Response.json({ res })
// }