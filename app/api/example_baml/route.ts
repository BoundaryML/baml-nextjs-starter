export const dynamic = 'force-dynamic'

import b from '../../../baml_client'

export async function POST(request: Request) {
    const result = await b.ClassifyMessage({
        message: "I would like to cancel my order!",
        message_date: "2021-01-01T00:00:00Z",
    });
    // sleep 2 secs
    await new Promise(resolve => setTimeout(resolve, 2000));

    return Response.json(result);
}
