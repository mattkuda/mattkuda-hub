import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const context = `About Matt Kuda:\n` +
  `Name: Matt Kuda\n` +
  `Age: 28\n` +
  `Location: Austin, TX\n` +
  `Title: Senior Software Engineer\n` +
  `\n` +
  `Identity: "The Healthy Developer" blending tech, fitness and content creation.\n` +
  `Mission: Help one million people optimize their health, mindset and performance with technology.\n` +
  `Daily routine: 5:15 AM wake-up, early deep work, consistent workouts and time for reflection.\n` +
  `Interests include HIIT/Tabata training, nutrition, journaling, and building side projects using AI tools.\n` +
  `\n` +
  `Work Experience:\n` +
  `- VistaPrint: Senior Software Engineer leading a team using React, TypeScript, .NET APIs and AWS. Delivered search and design features that improved customer engagement.\n` +
  `- Cape Air: Software Developer building internal charter flight applications with Angular and .NET.\n` +
  `\n` +
  `Projects:\n` +
  `- OptYou: web app for tracking workouts, journaling and AI-powered insights (current).\n` +
  `- TabaFit: Tabata workout social app.\n` +
  `- Betcha: sports betting social media app.\n` +
  `\n` +
  `Skills: C#, TypeScript, SQL, Java, Python, JavaScript, React, Next.js, Angular, Node.js, MongoDB, Express, GraphQL and AWS.`

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant for visitors to Matt Kuda's website. Use the following context to answer any questions about Matt. If you are unsure of an answer, say so.\n${context}`
        },
        { role: 'user', content: message }
      ]
    })

    const response = completion.choices[0].message.content
    return NextResponse.json({ response })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 })
  }
}
