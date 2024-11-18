import { guitars } from '../../data/guitars'
import s from './Guitars.module.scss'

export default function Guitars() {
  // Stwórz komponent List.tsx którego zadaniem będzie render listy.
  // Props: data: string[], type: 'unordered' | 'ordered' | 'definition'
  // Dodaj obsługę zdarzenia kliknięcia w element listy. Wypisz w konsoli treść wybranego elementu.
  // Dodaj obsługę zdarzenia najechania myszą na element. Wypisz w konsoli numer wybranego elementu.

  // Lista 'unordered': <ul class="list"><li>...</li></ul>
  // Lista 'ordered': <ol class="list"><li>...</li></ol>
  // Lista 'definition': <dl class="list"><dt>...</dt><dd>...</dd></dl>
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl

  // dane pobiermay z tablicy guitars - trzeba je przetworzyć (chcemy wszystkie gitary)
  // const data: string[] = guitars

  return (
    <>
      <h2>
        Muzyka łagodzi obyczaje!<sup>*</sup>
      </h2>
      <p className="do-you-know">
        Pierwsza na świecie gitara elektryczna, tzw. “Frying Pan” (Patelnia),
        została skonstruowana w 1931 roku przez George’a Beauchampa i Adolpha
        Rickenbackera. Miała okrągłe, metalowe korpusy i była przeznaczona do
        grania w stylu hawajskim.
      </p>
      <div>Lista gitar:</div>
      {/* <List data={data} type="" /> */}
      <div className={s.footer}>
        <sup>*</sup>chyba że jesteście braćmi Gallagher...
      </div>
    </>
  )
}
