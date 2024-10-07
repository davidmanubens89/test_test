import React, { useState } from 'react'
import { MessageSquare } from 'lucide-react'

interface QA {
  question: string
  answer: string
}

const qaData: QA[] = [
  {
    question: "What should I consider when buying a washing machine?",
    answer: "When buying a washing machine, consider factors like capacity, energy efficiency, wash cycles, and noise level. Also, think about your budget and available space."
  },
  {
    question: "How do I choose the right luggage?",
    answer: "To choose the right luggage, consider the size (check airline restrictions), weight, durability, and security features. Think about your travel needs and preferences."
  },
  // Add more Q&As here
]

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages([...messages, { text: input, isUser: true }])
    
    // Simple matching algorithm
    const matchedQA = qaData.reduce((closest, qa) => {
      const currentSimilarity = similarity(input.toLowerCase(), qa.question.toLowerCase())
      return currentSimilarity > closest.similarity ? { qa, similarity: currentSimilarity } : closest
    }, { qa: qaData[0], similarity: 0 })

    setTimeout(() => {
      setMessages(msgs => [...msgs, { text: matchedQA.qa.answer, isUser: false }])
    }, 500)

    setInput('')
  }

  // Simple string similarity function
  const similarity = (s1: string, s2: string) => {
    let longer = s1
    let shorter = s2
    if (s1.length < s2.length) {
      longer = s2
      shorter = s1
    }
    const longerLength = longer.length
    if (longerLength === 0) {
      return 1.0
    }
    return (longerLength - editDistance(longer, shorter)) / longerLength
  }

  const editDistance = (s1: string, s2: string) => {
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    const costs = []
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) {
          costs[j] = j
        } else if (j > 0) {
          let newValue = costs[j - 1]
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
          }
          costs[j - 1] = lastValue
          lastValue = newValue
        }
      }
      if (i > 0) {
        costs[s2.length] = lastValue
      }
    }
    return costs[s2.length]
  }

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-80">
          <div className="h-64 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.isUser ? 'bg-indigo-100' : 'bg-gray-200'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="w-full p-2 border rounded-lg"
            />
          </form>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  )
}

export default Chatbot