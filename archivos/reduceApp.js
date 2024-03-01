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

const total = estudiantes.reduce(
    (accumulator, estudiantes, currentIndex, array) => {
       accumulator = accumulator + estudiantes.pago;
       return (accumulator);
    }, 
 0);
 
 console.log(total); 