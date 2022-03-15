import * as React from 'react'
import * as styles from './Ramen.module.scss'

const Ramen = () => {
  function getRandomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function makeRamen(area: HTMLElement) {
    const ramen = document.createElement('span')
    ramen.innerHTML = '🍜'
    ramen.style.position = 'absolute'
    ramen.style.fontSize = 'xx-large'
    ramen.style.top = getRandomNum(0, area.clientHeight - 30) + 'px'
    ramen.style.left = getRandomNum(0, area.clientWidth - 30) + 'px'
    area.appendChild(ramen)
  }

  const handleOnClick = () => {
    const area = document.getElementsByTagName('body')[0]
    for (let i = 0; i < 3; i++) {
      makeRamen(area)
    }
  }

  return (
    <div className={styles.container}>
      <span onClick={handleOnClick}>🍜</span>
      <span>&lt; ズルズル </span>
    </div>
  )
}

export default Ramen
