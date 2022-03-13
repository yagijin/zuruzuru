import React, { useState, useEffect, useRef } from 'react'
import * as styles from '../styles/pages/console.module.scss'
import GoogleFonts from '../components/GoogleFonts'

import {
  onEnter,
  commandSuggestion,
  content,
} from '../../lib/console-page-functions'

export default function Console() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [commands, setCommands] = useState<string[]>([])
  const [stateSL, setStateSL] = useState(0)

  const refStateSL = useRef(stateSL)

  useEffect(() => {
    refStateSL.current = stateSL
  }, [stateSL])

  const consoleClicked = (): void => {
    document.getElementById('inputCommand')?.focus()
  }

  const doSL = () => {
    const intervalId = setInterval(() => {
      setStateSL(refStateSL.current + 1)
      if (refStateSL.current > 120) {
        clearInterval(intervalId)
        setStateSL(0)
      }
    }, 20)
  }

  const keyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const commandsWithArgs = input.split(' ')

    // Arrow up / down： 過去のコマンドを入力
    if (e.key === 'ArrowUp') {
      let index = historyIndex - 1
      if (index < 0) {
        index = history.length - 1
      }
      setHistoryIndex(index)
      setInput(history[index])
    }
    if (e.key === 'ArrowDown') {
      let index = historyIndex + 1
      if (index >= history.length) {
        index = 0
      }
      setHistoryIndex(index)
      setInput(history[index])
    }

    // Enter： コマンド実行
    if (e.key === 'Enter') {
      setHistoryIndex(history.length + 1)
      setHistory([...history, input])
      let shouldRecommend = true
      for (let i = 0; i < content.length; i++) {
        const { executed, message } = onEnter(
          content[i],
          commandsWithArgs,
          doSL
        )
        if (executed) {
          setCommands(message)
          shouldRecommend = false
          break
        }
      }
      if (shouldRecommend) {
        // コマンドが見つからなかった場合、
        // コマンドとの編集距離を求めて，類似度の高いコマンドをサジェストする
        setCommands([
          commandSuggestion(
            commandsWithArgs[0],
            content.map((c) => c.command)
          ),
        ])
      }
      setInput('')
    }

    // Tab：コマンドをサジェストする
    if (e.key === 'Tab') {
      // 何も入力されてない場合何もしない
      if (commandsWithArgs[0] === '') {
        return
      }
      // デフォルトの挙動（フォーカスの移動）を止める
      e.preventDefault()

      for (let i = 0; i < content.length; i++) {
        if (content[i].command.indexOf(input) === 0) {
          setInput(content[i].command)
          break
        }
      }
    }
  }

  return (
    <div className={styles.background}>
      <GoogleFonts />
      <div className={styles.console} onClick={() => consoleClicked()}>
        <header>
          <div onClick={() => window.alert('消さないで...(T T)')}></div>
          <div onClick={() => window.alert('最小化できない...')}></div>
          <div onClick={() => window.alert('全画面にできない...')}></div>
          <div>yagijin -- profile</div>
        </header>
        <p>
          {`Welcome to Yagijin's Profile!! Type "`}
          <span>help</span>
          {`" to show commands.`}
        </p>
        {stateSL > 0 && (
          <img
            src="./sl.png"
            alt="SLのアイコン"
            style={{
              position: 'absolute',
              right: `${stateSL}%`,
              height: '50%',
              zIndex: 2,
            }}
          />
        )}
        <main>
          {history.length !== 0 && (
            <>
              <div>
                <span>$</span>
                {history[history.length - 1]}
              </div>
              <div>
                <ol>
                  {commands.map((command, index) => (
                    <li key={index}>{command}</li>
                  ))}
                </ol>
              </div>
            </>
          )}
          <div>
            <span>$</span>
            <input
              type="text"
              id="inputCommand"
              value={input}
              autoComplete="off"
              autoFocus
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => keyPress(e)}
            />
          </div>
        </main>
      </div>
    </div>
  )
}
