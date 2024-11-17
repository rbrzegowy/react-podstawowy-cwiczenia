export type Guitar = { name: string, shopLink: string, image: string, description: string }
export type GuitarManufacturer = {
  name: string,
  models: Guitar[]
}
export const guitars: GuitarManufacturer[] = [
  {
    "name": "Fender",
    "models": [
      {
        "name": "Stratocaster",
        "shopLink": "https://www.fender.com/en-US/electric-guitars/stratocaster/",
        "image": "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10059/0140800590_fen_ins_frt_1_rr.jpg",
        "description": "Wszechstronna i ikoniczna gitara, znana z jasnych, szklanych brzmień oraz wygodnego, podwójnego wycięcia korpusu."
      },
      {
        "name": "Telecaster",
        "shopLink": "https://www.fender.com/en-US/electric-guitars/telecaster/",
        "image": "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10043/0140552550_fen_ins_frt_1_rr.jpg",
        "description": "Legendarna gitara o pojedynczym wycięciu, rozpoznawalna dzięki twangowemu, dynamicznemu brzmieniu i ponadczasowemu designowi."
      },
      {
        "name": "Jazzmaster",
        "shopLink": "https://www.fender.com/en-US/electric-guitars/jazzmaster/",
        "image": "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10013/0110340854_fen_ins_frt_1_rr.jpg",
        "description": "Ulubiona gitara muzyków alternatywnych i surf rockowych, oferująca charakterystyczny offsetowy korpus i łagodne brzmienia."
      },
      {
        "name": "Jaguar",
        "shopLink": "https://www.fender.com/en-US/electric-guitars/jaguar/",
        "image": "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10010/0149122306_fen_ins_frt_1_rr.jpg",
        "description": "Znana z krótkiej skali i unikalnego systemu przełączania, oferuje dynamiczne i jangle'owe brzmienie."
      },
      {
        "name": "Mustang",
        "shopLink": "https://www.fender.com/en-US/electric-guitars/mustang/",
        "image": "https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10016/0149130320_fen_ins_frt_1_rr.jpg",
        "description": "Kompaktowa i wygodna gitara z jasnym, dynamicznym brzmieniem, popularna wśród muzyków indie i punk."
      }
    ]
  },
  {
    "name": "Gibson",
    "models": [
      {
        "name": "Les Paul",
        "shopLink": "https://www.gibson.com/Guitar/USAVM8564/Les-Paul-Standard-50s",
        "image": "https://images.ctfassets.net/m8onsx4mm13s/3UHU8eiv55HtdaBLpVQVNj/6341ef6fa91dd1bc027382e22aadd012/LPS6M24VENH3_front_copy.png?fit=fill&w=250&h=500",
        "description": "Legendarna gitara, ceniona za ciepłe, bogate brzmienie i doskonałe podtrzymanie dźwięku, często używana w rocku i bluesie."
      },
      {
        "name": "SG",
        "shopLink": "https://www.gibson.com/Guitar/USAKD8559/SG-Standard",
        "image": "https://images.ctfassets.net/m8onsx4mm13s/6gvk4KQaom5UaYFBfYPuFr/29637e35f360f014240b57eb7856a970/SGS007WCH3_front_copy.png?fit=fill&w=250&h=500",
        "description": "Lekka, agresywna gitara, znana z ostrego wyglądu i zadziornego brzmienia, idealna do hard rocka."
      },
      {
        "name": "ES-335",
        "shopLink": "https://www.gibson.com/Guitar/USAI20794/ES-335",
        "image": "https://images.ctfassets.net/m8onsx4mm13s/3xTssS9n9v8kIMVDG6LMZx/3b5e6eaf66a6cb1e71f6c8d0c3338156/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_front-500x500.png?fit=fill",
        "description": "Pół-hollow body gitara, która łączy ciepłe, rezonujące brzmienie z wyjątkową wszechstronnością tonalną."
      },
      {
        "name": "Flying V",
        "shopLink": "https://www.gibson.com/Guitar/USA4FJ880/Flying-V",
        "image": "https://images.ctfassets.net/m8onsx4mm13s/61rZZRBpBw3tY0eTfMpzrV/e85a7682629caf997ddaf4f2630bce17/DSVS007WCH3_front_copy.png?fit=fill&w=250&h=500",
        "description": "Ikoniczna gitara o odważnym, futurystycznym kształcie, oferująca potężne brzmienie dla muzyków rockowych i metalowych."
      },
      {
        "name": "Explorer",
        "shopLink": "https://www.gibson.com/Guitar/USAEBV855/Explorer",
        "image": "https://images.ctfassets.net/m8onsx4mm13s/5oTmBZqCgoKSANzcuftC37/5cb78d705112580c34b9747c617ed4c6/DSXE00EBCH1_front_500x500.png?fit=fill&w=250&h=500",
        "description": "Odważny, asymetryczny design i mocne brzmienie sprawiają, że jest idealna do muzyki rockowej i metalowej."
      }
    ]
  },
  {
    "name": "Ibanez",
    "models": [
      {
        "name": "RG Series",
        "shopLink": "https://www.ibanez.com/usa/products/model/rg/",
        "image": "https://www.ibanez.com/common/product_artist_file/file/ps_main_eg_rg_axedesignlab_en.png",
        "description": "Świetnie brzmiąca gitara, idealna do rocka i metalu, znana z szybkiego gryfu i potężnych przetworników."
      },
      {
        "name": "S Series",
        "shopLink": "https://www.ibanez.com/usa/products/model/s/",
        "image": "https://www.ibanez.com/common/product_artist_file/file/ps_main_eg_s_axedesignlab_en.png",
        "description": "Smukła i lekka gitara, która oferuje szybki gryf i wszechstronne brzmienie, popularna wśród muzyków metalowych."
      },
      {
        "name": "AZ Series",
        "shopLink": "https://www.ibanez.com/usa/products/model/az/",
        "image": "https://www.ibanez.com/common/product_artist_file/file/ps_main_eg_az_prestige_en.png",
        "description": "Uniwersalna seria gitar, charakteryzująca się wygodnym gryfem i wszechstronnymi przetwornikami, odpowiednia dla różnych stylów muzycznych."
      },
      {
        "name": "RGA Series",
        "shopLink": "https://www.ibanez.com/usa/products/model/rga/",
        "image": "https://www.ibanez.com/common/product_artist_file/file/ps_main_eg_rga_axedesignlab_en.png",
        "description": "Gitary z agresywnym, wyciętym korpusem i aktywnymi przetwornikami, które doskonale sprawdzają się w ciężkich gatunkach muzycznych."
      },
      {
        "name": "JEM Series",
        "shopLink": "https://www.ibanez.com/usa/artists/detail/213.htmlv",
        "image": "https://www.ibanez.com/common/product_artist_file/file/p_region_JEMJR_WH_1P_03.png",
        "description": "Sygnatura Steve'a Vai, charakteryzująca się unikalnym wyglądem i wyjątkowym brzmieniem, idealna do solówek i zaawansowanej techniki gry."
      }
    ]
  },
  {
    "name": "PRS",
    "models": [
      {
        "name": "Custom 24",
        "shopLink": "https://prsguitars.com/electrics/model/custom_24_2021",
        "image": "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXIvc3RhbmRhcmQvcGVyc2lzdGVuY2UvcGNvbHVtbnJrMS1oZWlybG9vbS5qcGciLCJzZC1rZXkiOiI4MDB4ODAweDAwMDAwIiwiZm1tYXRfdHlwZSI6InY2LXNvZnQtbmV1dHJhbCIsImZvcm1hdF90eXBlIjoianBnIiwic3R5bGUiOiJwZXJjZW50In0=fb54e5a7-bf3a-401e-98cb-cd3617bcd8ab",
        "description": "Gitara o doskonałym balansie i bogatym brzmieniu, łącząca tradycyjny design z nowoczesną wszechstronnością tonalną."
      },
      {
        "name": "SE Santana",
        "shopLink": "https://prsguitars.com/electrics/model/se_santana_2021",
        "image": "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXIvc3RhbmRhcmQvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2UtdGFuZy5qcGciLCJzZC1rZXkiOiI4MDB4ODAweDAwMDAwIiwiZm1tYXRfdHlwZSI6InY2LXNvZnQtbmV1dHJhbCIsImZvcm1hdF90eXBlIjoianBnIiwic3R5bGUiOiJwZXJjZW50In0=ff0a9e93-8a58-482c-9b0e-3641156c7f37",
        "description": "Sygnatura Carlosa Santany, znana z charakterystycznego brzmienia i pięknie wyprofilowanego korpusu."
      },
      {
        "name": "McCarty 594",
        "shopLink": "https://prsguitars.com/electrics/model/mccarty_594_2021",
        "image": "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXIvc3RhbmRhcmQvcGVyc2lzdGVuY2UvcG1jY2FydHktb3Blbi5qcGciLCJzZC1rZXkiOiI4MDB4ODAweDAwMDAwIiwiZm1tYXRfdHlwZSI6InY2LXNvZnQtbmV1dHJhbCIsImZvcm1hdF90eXBlIjoianBnIiwic3R5bGUiOiJwZXJjZW50In0=4d45f173-f22f-435e-8890-795cfd5c6d06",
        "description": "Kultowa gitara, która łączy klasyczne brzmienie vintage z nowoczesnym podejściem do strojenia i sustainu."
      },
      {
        "name": "SE Hollowbody II",
        "shopLink": "https://prsguitars.com/electrics/model/se_hollowbody_ii_2021",
        "image": "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXIvc3RhbmRhcmQvcGVyc2lzdGVuY2UvcHNlLWhvbGxvd2JvZHkuaWkuaGVyb2Zyb250LjA3ODAwLnBuZyIsInNkLWtleSI6IjgwMHg4MDB4MDAwMDAiLCJmbW1hdF90eXBlIjoidjYtc29mdC1uZXV0cmFsIiwiZm9ybWF0X3R5cGUiOiJqcGciLCJzdHlsZSI6InBlcmNlbnQifQ=0f01e378-26cb-4a4f-b9e7-44aa8e8e0dd3",
        "description": "Pół-hollow gitara, która oferuje bogate, rezonujące brzmienie, świetne zarówno do jazzu, jak i rocka."
      },
      {
        "name": "Silver Sky",
        "shopLink": "https://prsguitars.com/electrics/model/silver_sky_2021",
        "image": "https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJndWl0YXIvc3RhbmRhcmQvcGVyc2lzdGVuY2UvcHNpbHZlcnNreS5qaWZqLmVnZi5qcGciLCJzZC1rZXkiOiI4MDB4ODAweDAwMDAwIiwiZm1tYXRfdHlwZSI6InY2LXNvZnQtbmV1dHJhbCIsImZvcm1hdF90eXBlIjoianBnIiwic3R5bGUiOiJwZXJjZW50In0=b534cc0c-c541-471e-9c78-2d67dbf80bdf",
        "description": "Sygnatura Johna Mayera, która oferuje vintage'owe brzmienie w nowoczesnej odsłonie, charakteryzująca się płynnym, krystalicznie czystym dźwiękiem."
      }
    ]
  }
]