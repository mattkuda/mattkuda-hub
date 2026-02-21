'use client'
import { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface ChatMessage {
  role: 'user' | 'bot'
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = { role: 'user' as const, content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content })
      })
      const data = await res.json()
      if (data.response) {
        setMessages(prev => [...prev, { role: 'bot', content: data.response }])
      } else {
        setMessages(prev => [...prev, { role: 'bot', content: 'Something went wrong.' }])
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', content: 'Error fetching response.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <main className="container mx-auto max-w-2xl min-h-screen flex flex-col py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Chat with Matt</h1>
      <div className="flex-1 space-y-4 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>{msg.content}</div>
          </div>
        ))}
        {loading && <div className="text-center text-sm text-muted-foreground">Thinking...</div>}
        <div ref={bottomRef} />
      </div>
      <div className="flex gap-2 pb-4">
        <Input
          placeholder="Ask me anything..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button onClick={sendMessage} disabled={loading}>Send</Button>
      </div>
    </main>
  )
}
