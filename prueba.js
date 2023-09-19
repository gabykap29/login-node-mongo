let arrayMaterias = []


let nombresHombres = [
    "Juan",
    "Carlos",
    "Luis",
    "Javier",
    "Miguel",
    "José",
    "Francisco",
    "Alejandro",
    "Diego",
    "Antonio",
    "Pedro",
    "Manuel",
    "Eduardo",
    "Raúl",
    "Daniel",
    "Sergio",
    "Guillermo",
    "Roberto",
    "Jorge",
    "Oscar",
    "Ricardo",
    "David",
    "Hugo",
    "Gabriel",
    "Ernesto",
    "Andrés",
    "Ángel",
    "Iván",
    "Felipe",
    "Iván",
    "Enrique",
    "Emilio",
    "Pablo",
    "Juan Carlos",
    "Fernando",
    "Adrián",
    "Mateo",
    "Alberto",
    "Rodrigo",
    "Sebastián",
    "Guillermo",
    "Eduardo",
    "Javier",
    "Mauricio",
    "Julián",
    "Felipe",
    "Germán",
    "Juan Pablo",
    "Rafael"
  ];
  const nombresMujer = [
    "Ana",
    "María",
    "Laura",
    "Sofía",
    "Carmen",
    "Julia",
    "Isabel",
    "Paula",
    "Marta",
    "Elena",
    "Andrea",
    "Lucía",
    "Clara",
    "Raquel",
    "Patricia",
    "Carolina",
    "Diana",
    "Beatriz",
    "Gloria",
    "Esther",
    "Irene",
    "Silvia",
    "Alicia",
    "Valeria",
    "Lourdes",
    "Rosa",
    "Natalia",
    "Paloma",
    "Lidia",
    "Emma",
    "Teresa",
    "Susana",
    "Vanessa",
    "Alejandra",
    "Adriana",
    "Miriam",
    "Victoria",
    "Rocío",
    "Olga",
    "Inés",
    "Marina",
    "Patricia",
    "Aurora",
    "Sandra",
    "Concha",
    "Lola",
    "Maribel",
    "Elena",
    "Gloria",
    "Martina"
  ];
  let apellidos = [
    "González",
    "Rodríguez",
    "Martínez",
    "López",
    "Sánchez",
    "Ramírez",
    "Torres",
    "García",
    "Fernández",
    "Díaz",
    "Castro",
    "Herrera",
    "Jiménez",
    "Ortiz",
    "Silva",
    "Vargas",
    "Flores",
    "Mendoza",
    "Ríos",
    "Pérez",
    "Morales",
    "Gómez",
    "Romero",
    "Cruz",
    "Ruiz",
    "Paredes",
    "Torres",
    "Vega",
    "Suárez",
    "Cabrera",
    "Alvarez",
    "Mendoza",
    "Rivera",
    "Lara",
    "Rojas",
    "Salazar",
    "Molina",
    "Vargas",
    "Fuentes",
    "Guerrero",
    "Palacios",
    "Luna",
    "Valencia",
    "Soto",
    "Contreras",
    "Olivares",
    "Navarro",
    "Araya",
    "Cortés"
  ];
  const materiasPrimaria = [
    "Lengua y literatura",
    "Matemáticas",
    "Ciencias Sociales",
    "Ciencias Naturales",
    "Educación Artística",
    "Educación Física",
    "Educación Tecnológica",
    "Formación Ética y Ciudadana"
  ]
  
function primariaMaterias(){
  let arrayMaterias = []
  let materiaExistente = [];
  for(let i = 0; i < 5;i++){
    if(arrayMaterias.length > 5){
      arrayMaterias.splice(0);
    }
  let numMateria = Math.floor(Math.random()*8);
  if(materiaExistente.includes(materiasPrimaria[numMateria])){
    i--
  }else{
    materiaExistente.push(materiasPrimaria[numMateria]);
    arrayMaterias.push(materiasPrimaria[numMateria]);
    let primer = (Math.floor(Math.random() * 10) + 1);
    let segundo = (Math.floor(Math.random() * 10) + 1);
    let final = (Math.floor(Math.random() * 10) + 1);
    let promedio = parseInt((primer + segundo + final) / 3);
    arrayMaterias.push(primer,segundo,final,promedio)
    alumno.materia.push(arrayMaterias)
  }
  }
}


  const materiasSecundaria = [
  "Lengua",
  "Matemática",
  "Lengua Extranjera",
  "Educación Física",
  "Lenguaje musical",
  "Lenguaje artístico combinado",
  "Biología I",
  "Biología II",
  "Biología III",
  "Ciencias Físico-Química I",
  "Ciencias Físico-Química II",
  "Ciencias Físico-Química III",
  "Historia I", 
  "Historia II",
  "Historia III",
  "Geografía I",
  "Geografía II",
  "Geografía III",
  "Tecnología",
  "Formación ética y ciudadana"
  ]
  const superior = [
    null,
    "Desarrollo de Software",
    "Telecomunicaciones",
    "Ingenieria Industrial",
    "Locutor Integral Productor y Director para Radio y Televisión",
    "Operador Técnico de Radio y Televisión"
];
  
  const Desarrollo = [
    "Base de Datos I",
    "Taller de Lenguajes de Programación",
    "Mineria de Datos",
    "Ingenieria de Software",
    "Matematicas"
  ];
  const Telecomunicaciones = [
    "Matematicas",
    "Fisica",
    "Algoritmos",
    "Base de Datos",
    "Redes y Telecomunicaciones"
  ]
  const IngenieriaIndustrial = [
    "Gestión de Operaciones",
    "Investigación de Operaciones",
    "Gestión de Calidad",
    "Diseño de Instalaciones y Logística",
    "Ergonomía y Diseño del Trabajo"
  ]
  
  const materiasLocutorIntegral = [
    "Oratoria y Técnicas de Comunicación",
    "Producción de Contenido Radial",
    "Edición de Audio y Montaje",
    "Locución Profesional",
    "Producción de Programas de Televisión"
  ];
  
  
  const materiasOperadorTecnico = [
    "Operación de Equipos de Radio",
    "Operación de Equipos de Televisión",
    "Producción de Audiovisual",
    "Edición de Video y Sonido",
    "Técnicas de Transmisión y Recepción"
  ];
  
  
  function superiorMaterias(){
    let especialidadElegida = Math.ceil(Math.random()*5);
    switch(especialidadElegida){
      case 1 :{
        //especialidad Desarrollo
        for(let i = 0; i < 5;i++){
          let materiaExistente = [];
          if(arrayMaterias.length !== 5){
            arrayMaterias.splice(0);
          }
          arrayMaterias.push(superior[especialidadElegida]);
          let numMateria = Math.floor(Math.random()*5);
          if(materiaExistente.includes(Desarrollo[numMateria])){
            i--
          }else{
            materiaExistente.push(Desarrollo[numMateria]);
            arrayMaterias.push(Desarrollo[numMateria]);
            let primer = (Math.floor(Math.random() * 10) + 1);
            let segundo = (Math.floor(Math.random() * 10) + 1);
            let final = (Math.floor(Math.random() * 10) + 1);
            let promedio = parseInt((primer + segundo + final) / 3);
            arrayMaterias.push(primer,segundo,final,promedio)
            alumno.materia.push(arrayMaterias)
          }
          }
          console.log('Se ejecutó esto 1');
          break
      }
      case 2:{
       //especialidad Telecomunicaciones 
        for(let i = 0; i < 5;i++){
          let materiaExistente = [];
          if(arrayMaterias.length > 5){
            arrayMaterias.splice(0);
          }
          arrayMaterias.push(superior[especialidadElegida]);
          let numMateria = Math.floor(Math.random()*5);
          if(materiaExistente.includes(Telecomunicaciones[numMateria])){
            i--
          }else{
            materiaExistente.push(Telecomunicaciones[numMateria]);
            arrayMaterias.push(Telecomunicaciones[numMateria]);
            let primer = (Math.floor(Math.random() * 10) + 1);
            let segundo = (Math.floor(Math.random() * 10) + 1);
            let final = (Math.floor(Math.random() * 10) + 1);
            let promedio = parseInt((primer + segundo + final) / 3);
            arrayMaterias.push(primer,segundo,final,promedio)
            alumno.materia.push(arrayMaterias)
          }
          }
          console.log('Se ejecutó esto 2');
          break;
      } 
      case 3:{
        //especialidad Ingenieria Industrial
        for(let i = 0; i < 5;i++){

          let materiaExistente = [];
          if(arrayMaterias.length > 5){
            arrayMaterias.splice(0);
          }
          arrayMaterias.push(superior[especialidadElegida]);
          let numMateria = Math.floor(Math.random()*5);
          if(materiaExistente.includes(IngenieriaIndustrial[numMateria])){
            i--
          }else{
            materiaExistente.push(IngenieriaIndustrial[numMateria]);
            arrayMaterias.push(IngenieriaIndustrial[numMateria]);
            let primer = (Math.floor(Math.random() * 10) + 1);
            let segundo = (Math.floor(Math.random() * 10) + 1);
            let final = (Math.floor(Math.random() * 10) + 1);
            let promedio = parseInt((primer + segundo + final) / 3);
            arrayMaterias.push(primer,segundo,final,promedio)
            alumno.materia.push(arrayMaterias)
          }
          }
          console.log('Se ejecutó esto 3');
          break;
      }
      case 4:{
        //Especialidad Comercio Internacional
        for(let i = 0; i < 5;i++){
          let materiaExistente = [];
          if(arrayMaterias.length > 5){
            arrayMaterias.splice(0);
          }
          arrayMaterias.push(superior[especialidadElegida]);
          let numMateria = Math.floor(Math.random()*5);
          if(materiaExistente.includes(materiasLocutorIntegral[numMateria])){
            i--
          }else{
            materiaExistente.push(materiasLocutorIntegral[numMateria]);
            arrayMaterias.push(materiasLocutorIntegral[numMateria]);
            let primer = (Math.floor(Math.random() * 10) + 1);
            let segundo = (Math.floor(Math.random() * 10) + 1);
            let final = (Math.floor(Math.random() * 10) + 1);
            let promedio = parseInt((primer + segundo + final) / 3);
            arrayMaterias.push(primer,segundo,final,promedio)
            alumno.materia.push(arrayMaterias)
          }
          }
          console.log('Se ejecutó esto 3');
          break;
      }
      case 5:{
        //Materias Contabilidad
        for(let i = 0; i < 5;i++){
          let materiaExistente = [];
          if(arrayMaterias.length > 5){
            arrayMaterias.splice(0);
          }
          arrayMaterias.push(superior[especialidadElegida]);
          let numMateria = Math.floor(Math.random()*5);
          if(materiaExistente.includes(materiasOperadorTecnico[numMateria])){
            i--
          }else{
            materiaExistente.push(materiasOperadorTecnico[numMateria]);
            arrayMaterias.push(materiasOperadorTecnico[numMateria]);
            let primer = (Math.floor(Math.random() * 10) + 1);
            let segundo = (Math.floor(Math.random() * 10) + 1);
            let final = (Math.floor(Math.random() * 10) + 1);
            let promedio = parseInt((primer + segundo + final) / 3);
            arrayMaterias.push(primer,segundo,final,promedio)
            alumno.materia.push(arrayMaterias)
          }
          }
          console.log('Se ejecutó esto 3');
          break;
      }
    }
  }
  
  let nacionalidad = ['Argentino','Paraguayo'];
  
  const edadDni = {
    27: [38800000, 39800000],
    26: [39800000, 40800000],
    25: [40800000, 41800000],
    24: [41800000, 42800000],
    23: [42800000, 43800000],
    22: [43800000, 44800000],
    21: [44800000, 45800000],
    20: [45800000, 46800000],
    19: [46800000, 47800000],
    18: [47800000, 48800000],
    17: [48800000, 49800000],
    16: [49800000, 50800000],
    15: [50800000, 51800000],
    14: [51800000, 52800000],
    13: [52800000, 53800000],
    12: [53800000, 54800000],
    11: [54800000, 55800000],
    10: [55800000, 56800000],
    9: [55800000, 56800000],
    8: [55800000, 56800000],
    7: [55800000, 56800000],
    6: [55800000, 56800000],
    5: [56000000, 56999999],
    4: [56000000, 56555555],
  };



const comunicacionArteYdiseño = [
    "Introducción al Diseño Gráfico",
    "Teoría de la Comunicación",
    "Fundamentos del Arte y la Estética",
    "Diseño de Comunicación Visual",
    "Fotografía y Comunicación Visual",
    "Medios Digitales y Diseño Interactivo",
    "Ilustración y Técnicas de Dibujo",
    "Diseño de Medios Impresos",
    "Diseño de Identidad Corporativa",
    "Diseño de Packaging y Envases"
]


const maestroMayorDeObras = [
    "Construcción y Tecnología de Materiales",
    "Planificación y Programación de Obras",
    "Normativas y Regulaciones en la Construcción",
    "Gestión de Proyectos de Construcción",
    "Interpretación de Planos y Diseños Arquitectónicos",
    "Topografía y Nivelación",
    "Control de Costos y Presupuestos de Obras",
    "Seguridad en la Construcción",
    "Dirección de Equipos y Trabajadores de Obra",
    "Sistemas de Instalaciones en la Construcción (Electricidad, Plomería)"
]

const tecnicoEnInformaticaProfesionalYpersonal = [
    "Fundamentos de la Informática",
    "Programación y Desarrollo de Software",
    "Redes de Computadoras",
    "Sistemas Operativos",
    "Administración de Bases de Datos",
    "Seguridad Informática",
    "Diseño y Desarrollo Web",
    "Soporte Técnico y Mantenimiento de Hardware",
    "Introducción a la Inteligencia Artificial",
    "Ética y Legislación en Tecnología de la Información"
]
  
  let codNivelEducativo = [{inicial:101},{primaria:102},{secundaria:110},{superior:115}];
  
  let barriosFormosa = [
    "San Juan",
    "Santa Rosa",
    "Los Pájaros",
    "Villa Esperanza",
    "La Candelaria",
    "San Martín",
    "San Antonio",
    "Nueva Formosa",
    "La Primavera",
    "Villa del Sol",
    "Bella Vista",
    "San Isidro",
    "La Victoria",
    "Villa Hermosa",
    "Las Acacias",
    "El Bosque",
    "La Rosada",
    "Los Alamos",
    "El Paraíso",
    "San Francisco"
  ];
  
  
  const alumno = {
    escuela:"",
    codNivelEducativo:"",
    nombre:"",
    apellido:"",
    edad:"",
    dni: "",
    fechaNac:"",
    domicilio:{
      Barrio: "", Mz: "", Casa: ""
    },
    nacionalidad:"",
    fechaIngreso:"",
    materia:[],
    tutor:"",
    cicloLectivo:""
  }
  let numeroAleatorio = Math.floor(Math.random() * 49);
  
  
  function generarDNI(edad) {
    if ( edad in edadDni) {
      const [min, max] = edadDni[edad];
      
      const numeroDNI = Math.floor(Math.random() * (max - min + 1)) + min;
  
      const dniFormateado = numeroDNI.toString().padStart(8, '0');
      return dniFormateado;
    } else {
      return "Edad no válida";
    }
  };
  
  function fechaAleatoriaJardin() {
    const inicio = new Date('2018-01-01').getTime();
    const fin = new Date('2019-12-31').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria;
  }
  
  function fechaAleatoriaPrimaria() {
    const inicio = new Date('2012-01-01').getTime();
    const fin = new Date('2017-12-31').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria;
  }
  function fechaAleatoriaSecundaria() {
    const inicio = new Date('2005-01-01').getTime();
    const fin = new Date('2011-12-31').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria;
  }
  function fechaAleatoriaSuperior() {
    const inicio = new Date('1995-01-01').getTime();
    const fin = new Date('2005-12-31').getTime();
    const fechaAleatoria = new Date(inicio + Math.random() * (fin - inicio));
    return fechaAleatoria;
  }
  
  let especialidad = [null,"comunicacionArteYdiseño",
    "maestroMayorDeObras",
    "tecnicoEnInformaticaProfesionalYpersonal"]
  

 
  function secundariaMaterias(){
    let especialidadElegida = Math.floor(Math.random()*3)+1;
    switch(especialidadElegida){
      case 1 :{
        //especialidad comunicacionArteYdiseño
        for(let i = 0; i < 5;i++){
          let arrayMaterias = []
          let materiaExistente = [];
          if(arrayMaterias.length > 5){
            arrayMaterias.splice(0)
          }
          arrayMaterias.push(especialidad[especialidadElegida]);
          let numMateria = Math.floor(Math.random()*8);
          if(materiaExistente.includes(comunicacionArteYdiseño[numMateria])){
            i--
          }else{
            materiaExistente.push(comunicacionArteYdiseño[numMateria]);
            arrayMaterias.push(comunicacionArteYdiseño[numMateria]);
            let primer = (Math.floor(Math.random() * 10) + 1);
            let segundo = (Math.floor(Math.random() * 10) + 1);
            let final = (Math.floor(Math.random() * 10) + 1);
            let promedio = parseInt((primer + segundo + final) / 3);
            arrayMaterias.push(primer,segundo,final,promedio)
            alumno.materia.push(arrayMaterias)
          }
          }
          console.log('Se ejecutó esto 1');
          break
      }
      case 2:{
       //especialidad maestroMayorDeObras 
        for(let i = 0; i < 5;i++){
          let arrayMaterias = []
          let materiaExistente = [];
          if(arrayMaterias.length > 5){
            arrayMaterias.splice(0)
          }
          arrayMaterias.push(especialidad[especialidadElegida]);
          let numMateria = Math.floor(Math.random()*8);
          if(materiaExistente.includes(maestroMayorDeObras[numMateria])){
            i--
          }else{
            materiaExistente.push(maestroMayorDeObras[numMateria]);
            arrayMaterias.push(maestroMayorDeObras[numMateria]);
            let primer = (Math.floor(Math.random() * 10) + 1);
            let segundo = (Math.floor(Math.random() * 10) + 1);
            let final = (Math.floor(Math.random() * 10) + 1);
            let promedio = parseInt((primer + segundo + final) / 3);
            arrayMaterias.push(primer,segundo,final,promedio)
            alumno.materia.push(arrayMaterias)
          }
          }
          console.log('Se ejecutó esto 2');
          break;
      } 
      case 3:{
        //especialidad tecnicoEnInformaticaProfesionalYpersonal
        for(let i = 0; i < 5;i++){
          let arrayMaterias = []
          let materiaExistente = [];
          if(arrayMaterias.length > 5){
            arrayMaterias.splice(0)
          }
          arrayMaterias.push(especialidad[especialidadElegida]);
          let numMateria = Math.floor(Math.random()*8);
          if(materiaExistente.includes(tecnicoEnInformaticaProfesionalYpersonal[numMateria])){
            i--
          }else{
            materiaExistente.push(tecnicoEnInformaticaProfesionalYpersonal[numMateria]);
            arrayMaterias.push(tecnicoEnInformaticaProfesionalYpersonal[numMateria]);
            let primer = (Math.floor(Math.random() * 10) + 1);
            let segundo = (Math.floor(Math.random() * 10) + 1);
            let final = (Math.floor(Math.random() * 10) + 1);
            let promedio = parseInt((primer + segundo + final) / 3);
            arrayMaterias.push(primer,segundo,final,promedio)
            alumno.materia.push(arrayMaterias)
          }
          }
          console.log('Se ejecutó esto 3');
          break;
      }
    }
  }

  const institucionesJardin = [
      'JARDIN DE INFANTES SAN  MIGUEL ANEXO 1',
      'EJI Nº 11 OSITO CARIÑOSO',
]


const institucionesPrimaria = [

  'EPEP Nº481',
  'EPEP Nº 1 GRAL.JOSE DE SAN MARTIN',
  'ESCUELA PRIVADA SAN JOSE OBRERO',
  'ESCUELA NORMAL SUPERIOR REPÚBLICA DEL PARAGUAY',
  'ESC.PRIVADA CATOLICA MARIA AUXILIADORA PAREDES',
  'EPEP Nº 55 DR. MARIANO BOEDO',
  'EPEP Nº 303 ANEXO 2 (EX EPEP Nº 370)',
  'EPEP Nº 303',
  'ESCUELA PRIVADA SAN JOSE OBRERO',
]

const institucionesSecundaria = [
  'ESC.EVANGELICA PRIVADA JUAN DRING',
  'INSTITUTO SANTA ISABEL',
  'INSTITUTO PRIVADO SAN MARTIN',
  'ESC.PRIVADA ADVENTISTA DE FORMOSA',
  'EPES Nº 10 DOCTOR CARLOS PELLEGRINI',
  'COLEGIO PRIVADO ALAS',
  'EPES AGRARIA Nº2-EPEP Nº 303',
  'EPES Nº 74',
  'EPET Nº 2 ILDA VALENTINO DE GIACHERO',
]

const institucionesSuperior = [
    'INSTITUTO POLITECNICO FORMOSA',
    'INSTITUTO SUPERIOR DEL PROFESORADO DE ARTE DE FORMOSA (ISPAF)',
  ]





  export function crearAlumno(){
      let num = Math.floor(Math.random()*4);
      alumno.codNivelEducativo = codNivelEducativo[num];
      alumno.nombre = nombresHombres[Math.floor(Math.random()*49)];
      alumno.apellido = apellidos[Math.floor(Math.random()*49)];
      switch(num){
        case 0:{
          let edad = Math.floor(Math.random()*2 ) + 4;
          alumno.escuela = institucionesJardin[Math.floor(Math.random()*2)]
          alumno.edad = edad;
          alumno.dni = generarDNI(edad);
          alumno.fechaNac = fechaAleatoriaJardin();
          alumno.domicilio.Barrio = barriosFormosa[Math.floor(Math.random()*20)];
          alumno.domicilio.Mz = Math.floor(Math.random()*300)
          alumno.domicilio.Casa = Math.floor(Math.random()*200)
          alumno.nacionalidad = nacionalidad[Math.floor(Math.random()*2)];
          alumno.fechaIngreso = new Date('2023-03-03');
          alumno.materia = [];
          alumno.tutor = [{
            nombre: nombresHombres[Math.floor(Math.random()*49)],
            apellido: alumno.apellido,
          }];
          alumno.cicloLectivo = '2023'
          break;
        }
          case 1:{
            let edad = Math.floor(Math.random() * 7) + 6;
          alumno.escuela = institucionesPrimaria[Math.floor(Math.random()*9)]
          alumno.edad = edad;
          alumno.dni = generarDNI(edad);
          alumno.fechaNac = fechaAleatoriaPrimaria();
          alumno.domicilio.Barrio = barriosFormosa[Math.floor(Math.random()*20)];
          alumno.domicilio.Mz = Math.floor(Math.random()*300)
          alumno.domicilio.Casa = Math.floor(Math.random()*200)
          alumno.nacionalidad = nacionalidad[Math.floor(Math.random()*2)];
          alumno.fechaIngreso = new Date('2023-03-03');
          alumno.materia.push(primariaMaterias());
          alumno.materia.pop()
          alumno.tutor = [{
            nombre: nombresHombres[Math.floor(Math.random()*49)],
            apellido: alumno.apellido,
          }];
          alumno.cicloLectivo = '2023'
          break;
          }
          case 2:{
            let edad = Math.floor(Math.random() * 7) + 12;
          alumno.escuela = institucionesSecundaria[Math.floor(Math.random()*9)];
          alumno.edad = edad;
          alumno.dni = generarDNI(edad);
          alumno.fechaNac = fechaAleatoriaSecundaria();
          alumno.domicilio.Barrio = barriosFormosa[Math.floor(Math.random()*20)];
          alumno.domicilio.Mz = Math.floor(Math.random()*300)
          alumno.domicilio.Casa = Math.floor(Math.random()*200)
          alumno.nacionalidad = nacionalidad[Math.floor(Math.random()*2)];
          alumno.fechaIngreso = new Date('2023-03-03');
          alumno.materia.push(secundariaMaterias());
          alumno.materia.pop()
          alumno.tutor = [{
            nombre: nombresHombres[Math.floor(Math.random()*49)],
            apellido: alumno.apellido,
          }];
          alumno.cicloLectivo = '2023'
          break;
          }
          case 3:{
            let edad = Math.floor(Math.random() * 9) + 19;
            alumno.edad = edad;
            alumno.dni = generarDNI(edad);
            alumno.fechaNac = fechaAleatoriaSuperior();
            alumno.domicilio.Barrio = barriosFormosa[Math.floor(Math.random()*20)];
            alumno.domicilio.Mz = Math.floor(Math.random()*300)
            alumno.domicilio.Casa = Math.floor(Math.random()*200)
            alumno.nacionalidad = nacionalidad[Math.floor(Math.random()*2)];
            alumno.fechaIngreso = new Date('2023-03-03');
            alumno.materia.push(superiorMaterias());
            alumno.materia.pop()
            if(alumno.materia.includes('Desarrollo de Software' || 'Telecomunicaciones' || "Ingenieria Industrial")){
              alumno.escuela = institucionesSuperior[0];
            }else{
              alumno.escuela = institucionesSuperior[1];
            }
            alumno.tutor = [{
              nombre: nombresHombres[Math.floor(Math.random()*49)],
              apellido: alumno.apellido,
            }];
            alumno.cicloLectivo = '2023'
            break;
          }
      }
      return alumno;
  } 

console.log(alumno);
