const getRandomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const makeRamen = (area: HTMLElement) => {
  const ramen = document.createElement('span')
  ramen.innerHTML = '🍜'
  ramen.style.position = 'absolute'
  ramen.style.fontSize = 'xx-large'
  ramen.style.top = getRandomNum(0, area.clientHeight - 30) + 'px'
  ramen.style.left = getRandomNum(0, area.clientWidth - 30) + 'px'
  area.appendChild(ramen)
  // 消す時のために要素を返す
  return ramen
}

export const removeRamens = (ramens: HTMLSpanElement[]) => {
  ramens.forEach((ramen) => {
    ramen.remove()
  })
}
