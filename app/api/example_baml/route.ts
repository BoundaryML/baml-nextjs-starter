export const dynamic = 'force-dynamic'

import { plus100 } from "@boundaryml/baml-core-napi"

export async function POST(request: Request) {
    // const result = await b.ClassifyMessage({
    //     message: "Hello from BAML!",
    //     message_date: "2021-01-01T00:00:00Z",
    // });

    return Response.json({
        result: plus100(100)
    });
}

// export async function POST(request: Request) {
//     const res = await request.json()
//     return Response.json({ res })
// }