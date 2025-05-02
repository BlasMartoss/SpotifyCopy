const ArtistData = [
  {
    id: 1,
    name: "The Weeknd",
    monthlyListeners: "75 millones",
    description:
      "The Weeknd es un cantante, compositor y productor canadiense conocido por su estilo único que fusiona pop, R&B y electrónica. Es conocido por éxitos como 'Blinding Lights' y 'Starboy'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746196784/thewekeend_tisgc4.jpg",
  },
  {
    id: 2,
    name: "Dua Lipa",
    monthlyListeners: "60 millones",
    description:
      "Dua Lipa es una cantante y compositora británica que se ha destacado en el pop moderno con hits como 'New Rules' y 'Don't Start Now'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746199599/dua-lipa_lgs2js.jpg",
  },
  {
    id: 3,
    name: "Post Malone",
    monthlyListeners: "70 millones",
    description:
      "Post Malone es un cantante y rapero estadounidense que combina elementos de rap, rock y pop. Conocido por éxitos como 'Rockstar' y 'Circles'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746199652/postmalone_a546mp.png",
  },
  {
    id: 4,
    name: "Daddy Yankee",
    monthlyListeners: "35 millones",
    description:
      "Daddy Yankee es un reguetonero puertorriqueño, conocido por su éxito mundial 'Gasolina'. Ha sido uno de los principales impulsores del reguetón a nivel global.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746199861/daddyyankee-portada_vdf1zu.jpg",
  },
  {
    id: 5,
    name: "J Balvin",
    monthlyListeners: "45 millones",
    description:
      "J Balvin es un cantante colombiano que se ha destacado en el reguetón y la música urbana. Ha colaborado con artistas como Beyoncé y Cardi B.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746199899/628fc875-a228-44a8-92b1-9fdefddfde5e_source-aspect-ratio_default_0_cqwwc7.jpg",
  },
  {
    id: 6,
    name: "Karol G",
    monthlyListeners: "40 millones",
    description:
      "Karol G es una cantante colombiana de reguetón y música urbana. Su éxito 'Tusa' la ha consolidado como una de las grandes estrellas del género.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746199928/cnne-1468203-karol-g_f45c5v.jpg",
  },
  {
    id: 7,
    name: "Ed Sheeran",
    monthlyListeners: "60 millones",
    description:
      "Ed Sheeran es un cantante y compositor británico conocido por sus baladas pop y acústicas. 'Shape of You' es uno de sus mayores éxitos.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746199952/maxresdefault_bqc7ai.jpg",
  },
  {
    id: 8,
    name: "John Mayer",
    monthlyListeners: "15 millones",
    description:
      "John Mayer es un cantante y guitarrista estadounidense con una carrera que abarca desde el blues hasta el pop. 'Gravity' es uno de sus temas más populares.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746199981/2ef82ed-john-mayer-para-dedicar-1024x576_xljzet.avif",
  },
  {
    id: 9,
    name: "Sam Smith",
    monthlyListeners: "30 millones",
    description:
      "Sam Smith es un cantante británico conocido por su poderosa voz y baladas emotivas como 'Stay With Me' y 'Too Good at Goodbyes'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200009/sam-smith-master-fm-scaled_dwvgy9.jpg",
  },
  {
    id: 10,
    name: "Foo Fighters",
    monthlyListeners: "20 millones",
    description:
      "Foo Fighters es una banda de rock estadounidense fundada por Dave Grohl después de la disolución de Nirvana. Son conocidos por canciones como 'Everlong'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200034/e46418d6-7b42-4d72-8e18-1388833336ac.png",
  },
  {
    id: 11,
    name: "Queen",
    monthlyListeners: "40 millones",
    description:
      "Queen es una de las bandas de rock más icónicas de todos los tiempos, conocida por su impresionante música y la voz única de Freddie Mercury. 'Bohemian Rhapsody' es su tema más famoso.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200059/62365a6d-280a-426d-a183-2bb8b960c241.png",
  },
  {
    id: 12,
    name: "Nirvana",
    monthlyListeners: "50 millones",
    description:
      "Nirvana fue una banda de grunge liderada por Kurt Cobain. Su tema 'Smells Like Teen Spirit' marcó una era en la música de los años 90.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200091/a3bb1c6c-2c99-4941-97d4-cfe33db5a051.png",
  },
  {
    id: 13,
    name: "Jack Johnson",
    monthlyListeners: "10 millones",
    description:
      "Jack Johnson es un cantante y compositor estadounidense conocido por su estilo tranquilo y relajante, especialmente en temas como 'Banana Pancakes'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200110/5b6e5640-2631-4438-b427-afb86bf66adf.png",
  },
  {
    id: 14,
    name: "Norah Jones",
    monthlyListeners: "20 millones",
    description:
      "Norah Jones es una cantante, pianista y compositora estadounidense, famosa por su estilo de jazz suave. Su tema 'Don't Know Why' es un clásico.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200130/c19268d1-dac8-43eb-b039-243d5d60aa6d.png",
  },
  {
    id: 15,
    name: "Jason Mraz",
    monthlyListeners: "25 millones",
    description:
      "Jason Mraz es un cantante y compositor estadounidense conocido por su estilo de pop suave y letras optimistas, con éxitos como 'I'm Yours'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200147/ff904768-e0c3-413b-9cb1-eb6c3a98d77c.png",
  },
  {
    id: 16,
    name: "Imagine Dragons",
    monthlyListeners: "50 millones",
    description:
      "Imagine Dragons es una banda de rock estadounidense conocida por su sonido enérgico y temas como 'Believer' y 'Demons'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200181/6ec734f1-1e1d-49f1-b429-6b68294d4d74.png",
  },
  {
    id: 17,
    name: "OneRepublic",
    monthlyListeners: "30 millones",
    description:
      "OneRepublic es una banda estadounidense de pop rock, conocida por sus himnos como 'Counting Stars' y 'Apologize'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200200/7287d3ae-75da-4339-9bd4-3fb9c74f5d1f.png",
  },
  {
    id: 18,
    name: "The Lumineers",
    monthlyListeners: "15 millones",
    description:
      "The Lumineers es una banda de folk rock estadounidense conocida por su estilo acústico y canciones como 'Ho Hey' y 'Ophelia'.",
    image:
      "https://res.cloudinary.com/dc2byiwif/image/upload/v1746200684/3092ce7b-4802-47c4-bce6-88b1e69848dd.png",
  },
];

export default ArtistData;
