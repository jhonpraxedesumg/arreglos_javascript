let estudiantes = [
    {
       'id': 001,
       'f_nombre': 'Alex',
       'l_nombre': 'B',
       'genero': 'M',
       'casado': false,
       'edad': 22,
       'pago': 250,  
       'cursos': ['JavaScript', 'React']
    },
    {
       'id': 002,
       'f_nombre': 'Ibrahim',
       'l_nombre': 'M',
       'genero': 'M',
       'casado': true,
       'edad': 32,
       'pago': 150,  
       'cursos': ['JavaScript', 'PWA']
    },
    {
       'id': 003,
       'f_nombre': 'Rubi',
       'l_nombre': 'S',
       'genero': 'F',
       'casado': false,
       'edad': 27,
       'pago': 350,  
       'cursos': ['Blogging', 'React', 'UX']
    },
    {
       'id': 004,
       'f_nombre': 'Zack',
       'l_nombre': 'F',
       'genero': 'M',
       'casado': true,
       'edad': 36,
       'pago': 250,  
       'cursos': ['Git', 'React', 'Branding']
    } 
 ];

 const atLeastTwoCourses = estudiantes.every((elements, index) => {
    return elements.cursos.length >= 2;
  });
  
  console.log(atLeastTwoCourses); 



  //detecta si cada  elemento del arreglo satisface la condición pasada en la 
  //función. Vamos a encontrar si todos los estudiantes que se han suscrito al menos dos cursos.

