import { useEffect, useState } from 'react'

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

export function ScrambleText({ text = '' }) {
  const [output, setOutput] = useState('')

  // controle de duração da animação
  const maxStart = 40
  const minDuration = 20

  useEffect(() => {
    if (!text) return

    let frame = 0
    let frameId

    const letters = text.split('')

    const randomChar = () =>
      chars[Math.floor(Math.random() * chars.length)]

    // começa já com mesmo tamanho do texto
    let current = letters.map((char) =>
      char === ' ' ? ' ' : randomChar()
    )

    const queue = letters.map((letter) => ({
      final: letter,
      start: Math.floor(Math.random() * maxStart),
      duration: Math.floor(Math.random() * maxStart) + minDuration,
    }))

    const update = () => {
      let completed = 0

      current = current.map((char, i) => {
        const item = queue[i]

        // mantém espaços SEMPRE
        if (item.final === ' ') return ' '

        if (frame >= item.start + item.duration) {
          completed++
          return item.final
        }

        if (frame >= item.start) {
          return randomChar()
        }

        return char // mantém o char inicial
      })

      setOutput(current.join(''))

      if (completed === queue.length) return

      frame++
      frameId = requestAnimationFrame(update)
    }

    // controle de início da animação

    const timeout = setTimeout(update, 50)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frameId)
    }
  }, [text])

  return <span>{output}</span>
}