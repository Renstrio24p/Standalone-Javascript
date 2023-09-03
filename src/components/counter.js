export function setupCounter(BTNElement) {
    let counter = 0
    const setCounter = (count) => {
      counter = count
      BTNElement.innerHTML = `count is ${counter}`
    }
    BTNElement.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }