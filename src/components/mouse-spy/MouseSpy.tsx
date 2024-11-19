import { useState } from 'react'

export default function MouseSpy() {
  // Wyświetl pozycję kursora myszy poruszającego się wewnątrz div-a w komponencie.
  // Wykorzystaj zdarzenie mousemove i jego właściwości
  // ev.nativeEvent.offsetX, ev.nativeEvent.offsetclientY.
  //
  // Dodaj obsługę przycisku sterujący wł./ wył.śledzenia.

  // Reakcja na ruch kursora myszy - zdarzenie onMouseMove
  // callback na mousemove:
  // const onMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {}

  return (
    <>
      <h2>Śledzik gryzonia</h2>
      <div style={{ margin: 10, display: 'flex', justifyContent: 'center' }}>
        <a
          className="clean"
          href="https://www.youtube.com/watch?v=VEqvqbjzWuU"
          target="_blank"
        >
          <img
            src="/public/Spies-Like-Us-Poster-1985.jpg"
            alt="Spies like us"
          />
        </a>
      </div>
      <button>Włącz/wyłącz śledzenie</button>

      <div style={{ margin: 20 }}>Pozycja kursora myszy: X: , Y:</div>
      <div
        style={{ margin: 10, width: '100%', height: 300, background: '#eee' }}
      ></div>
    </>
  )
}
