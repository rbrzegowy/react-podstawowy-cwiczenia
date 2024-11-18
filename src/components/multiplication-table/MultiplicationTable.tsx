export default function MultiplicationTable() {
  // Utwórz tabelkę 10 wierszy
  // W każdym wierszu utwórz 10 kolumn.
  // BONUS: Uzupełnij tabelkę wynikami mnożenia od 1 do 10.
  // BONUS2: Dodaj nagłówki wierszy i kolumn
  // (w komórkach nagłówka dodaj klasę css: table-header-cell)

  return (
    <>
      <h2>Tabelka, tabliczka</h2>
      <div className="do-you-know">
        <p>
          Mnożenie sieci (znane również jako kwadraty weneckie, mnożenie sitowe,
          mnożenie gelosia lub siatka hinduska) było używane w wielu różnych
          kulturach na przestrzeni dziejów. Ta metoda mnożenia wykorzystuje
          siatkę do pomnożenia dwóch liczb wielocyfrowych. Chociaż długie
          mnożenie stało się bardziej popularne niż metoda kratowa, niektórzy
          matematycy uważają tę drugą za łatwiejszą w użyciu.
        </p>
        <p>
          źródło:{' '}
          <a
            href="https://www.matplaneta.pl/dzien-tabliczki-mnozenia-1-x/"
            target="_blank"
          >
            matplaneta.pl
          </a>
        </p>
      </div>
      <div className="multiplication-table">
        {/* 
          <div class="table-row">
            <div class="table-cell table-header-cell"> X </div>
            <div class="table-cell"> X </div>
          </div
         */}
      </div>
    </>
  )
}
