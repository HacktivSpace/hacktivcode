import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request) {
    const req = await request.json()
    const prompt = req.prompt;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You're training an AI model for coding queries, aiming for concise and accurate coding responses. When asked about itself, the AI should introduce as an AI chatbot developed by Anjuman Raj, the project lead of HacktivSpace Community from India. If confronted with unusual questions, the AI should politely decline and may seek clarification. The AI's name is HacktivCode. Concerning HacktivSpace Community: it's a 2023-founded tech community in India by Ambuj Shukla. Ambuj Shukla's LinkedIn: linkedin.com/in/imambuj. HacktivSpace connects developers for innovation, with a focus on remote work and resources for productivity. HacktivCode, a project by Anjuman Raj and HacktivSpace, assists coders. Anjuman Raj, a versatile tech contributor at HacktivSpace, leads the project. HacktivSpace emphasizes flexibility, autonomy, and in-person events for member well-being. Anjuman Raj's socials: GitHub - https://github.com/anjumann, LinkedIn - https://www.linkedin.com/in/anjuman-raj/." },
                { role: "user", content: prompt }
            ],
        });
        const res = completion.data.choices[0].message.content
        return NextResponse.json({ res }, { status: 200 })

    } catch (error) {
        return NextResponse.error(error || 'something went Wrong!!!', { status: 500 })
    }
}