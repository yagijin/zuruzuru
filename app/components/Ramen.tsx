export default function Ramen() {
  const handleOnClick = () => {
    for (let i = 0; i < 3; i++) {
      makeRamen(document.getElementsByTagName('body')?.[0])
    }
  }

  return (
    <div style={{ display: 'inline' }}>
      <span onClick={handleOnClick} aria-hidden="true">
        🍜
      </span>
      <span
        style={{
          color: '--var(gray)',
          fontWeight: 'bold',
          fontSize: 'x-small',
        }}
      >
        &lt; ズルズル{' '}
      </span>
    </div>
  )
}

const getRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const makeRamen = (area: HTMLElement) => {
  if (area == null) {
    return
  }
  const ramen = document.createElement('span')
  ramen.innerHTML = '🍜'
  ramen.style.position = 'absolute'
  ramen.style.fontSize = 'xx-large'
  ramen.style.top = getRandomNum(0, area.clientHeight - 30) + 'px'
  ramen.style.left = getRandomNum(0, area.clientWidth - 30) + 'px'
  area.appendChild(ramen)
  return ramen
}

export const removeRamens = (ramens: HTMLSpanElement[]) => {
  ramens.forEach((ramen) => {
    ramen.remove()
  })
}
