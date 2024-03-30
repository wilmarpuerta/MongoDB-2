// creacion de collection

db.createCollection("users");

// Ingreso de usuarios

db.users.insertMany([

    {
        nombre: "Fernando",
        apellido: "Gómez",
        edad: 23,
        genero: 'M',
        correo: "fjgt2000@gmail.com",
        pais: "España",
        salario: 5000,
        altura: 170,
        peso: 145
    },
    {
        nombre: "Sofia",
        apellido: "Silva",
        edad: 27,
        genero: 'F',
        correo: "sofia.silva@example.com",
        pais: "Argentina",
        salario: 5500,
        altura: 165,
        peso: 58
    },
    {
        nombre: "Diego",
        apellido: "González",
        edad: 32,
        genero: 'M',
        correo: "diego.gonzalez@example.com",
        pais: "España",
        salario: 6000,
        altura: 180,
        peso: 80
    },
    {
        nombre: "Isabella",
        apellido: "Fernandez",
        edad: 24,
        genero: 'F',
        correo: "isabella.fernandez@example.com",
        pais: "México",
        salario: 5200,
        altura: 160,
        peso: 55
    },
    {
        nombre: "Liam",
        apellido: "Smith",
        edad: 29,
        genero: 'M',
        correo: "liam.smith@example.com",
        pais: "Estados Unidos",
        salario: 6200,
        altura: 175,
        peso: 70
    },
    {
        nombre: "Elena",
        apellido: "Moreno",
        edad: 26,
        genero: 'F',
        correo: "elena.moreno@example.com",
        pais: "Chile",
        salario: 5300,
        altura: 170,
        peso: 63
    },
    {
        nombre: "Lucas",
        apellido: "Martinez",
        edad: 31,
        genero: 'M',
        pais: "Brasil",
        salario: 5800,
        altura: 175,
        peso: 75
    },
    {
        nombre: "Emma",
        apellido: "Rodriguez",
        edad: 28,
        genero: 'F',
        correo: "emma.rodriguez@example.com",
        pais: "Australia",
        salario: 5700,
        altura: 165,
        peso: 60
    },
    {
        nombre: "Mateo",
        apellido: "Perez",
        edad: 30,
        genero: 'M',
        correo: "mateo.perez@example.com",
        pais: "Colombia",
        salario: 5400,
        altura: 170,
        peso: 70
    },
    {
        nombre: "Valentina",
        apellido: "López",
        edad: 25,
        genero: 'F',
        correo: "valentina.lopez@example.com",
        pais: "Uruguay",
        salario: 5100,
        altura: 160,
        peso: 55
    },
    {
        nombre: "Alexander",
        apellido: "Ramirez",
        edad: 33,
        genero: 'M',
        correo: "alexander.ramirez@example.com",
        pais: "Perú",
        salario: 6100,
        altura: 180,
        peso: 78
    },
    {
        nombre: "Mia",
        apellido: "Gomez",
        edad: 29,
        genero: 'F',
        correo: "mia.gomez@example.com",
        pais: "Italia",
        salario: 5900,
        altura: 170,
        peso: 65
    },
    {
        nombre: "Daniel",
        apellido: "Hernandez",
        edad: 26,
        genero: 'M',
        pais: "Francia",
        salario: 5600,
        altura: 175,
        peso: 72
    },
    {
        nombre: "Ava",
        apellido: "Diaz",
        edad: 28,
        genero: 'F',
        correo: "ava.diaz@example.com",
        pais: "Canadá",
        salario: 5800,
        altura: 165,
        peso: 62
    },
    {
        nombre: "Lucía",
        apellido: "Torres",
        edad: 27,
        genero: 'F',
        correo: "lucia.torres@example.com",
        pais: "Alemania",
        salario: 5500,
        altura: 170,
        peso: 64
    },
    {
        nombre: "David",
        apellido: "Vargas",
        edad: 31,
        genero: 'M',
        correo: "david.vargas@example.com",
        pais: "Inglaterra",
        salario: 6000,
        altura: 178,
        peso: 77
    },
    {
        nombre: "Sara",
        apellido: "Suarez",
        edad: 29,
        genero: 'F',
        pais: "Portugal",
        salario: 5700,
        altura: 165,
        peso: 59
    },
    {
        nombre: "Juan",
        apellido: "Fernandez",
        edad: 30,
        genero: 'M',
        correo: "juan.fernandez@example.com",
        pais: "China",
        salario: 5900,
        altura: 172,
        peso: 68
    },
    {
        nombre: "Valeria",
        apellido: "Martínez",
        edad: 26,
        genero: 'F',
        correo: "valeria.martinez@example.com",
        pais: "Japón",
        salario: 5600,
        altura: 168,
        peso: 63
    },
    {
        nombre: "Samuel",
        apellido: "López",
        edad: 28,
        genero: 'M',
        correo: "samuel.lopez@example.com",
        pais: "Corea del Sur",
        salario: 5800,
        altura: 176,
        peso: 71
    },
    {
        nombre: "Camila",
        apellido: "García",
        edad: 29,
        genero: 'F',
        correo: "camila.garcia@example.com",
        pais: "Rusia",
        salario: 6000,
        altura: 170,
        peso: 67
    },
    {
        nombre: "José",
        apellido: "Sánchez",
        edad: 27,
        genero: 'M',
        correo: "jose.sanchez@example.com",
        pais: "India",
        salario: 5500,
        altura: 175,
        peso: 72
    }
]);

// Listar usuarios

db.users.find()

// Incrementar el salario de todos los usuarios en un 10%.

db.users.updateMany({}, { $mul: { salario: 1.1 } })

// Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".

db.users.updateMany({cuidad : "New York"}, { $set : {cuidad : "Los Ángeles"}})

// Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".

db.users.updateOne({$and: [{nombre : "Juan"}, {apellido : "Perez"}]}, {$set : {correo : "nuevo@riwi.com"}});

// Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.

db.ussers.updateOne({correo: "ejemplo@riwi.es"}, {$set: {edad: 35}});

// Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

db.users.updateMany({pais: "Mexico"}, {$set: {pais: "Canada"}});

// Aumentar la altura de todos los usuarios en 5 centímetros.

db.users.updateMany({}, {$inc: {altura: 5}});

// Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".

db.users.updateOne({correo: "otro@riwi.net"}, {$set: {apellido: "González"}});

// Actualizar el peso del usuario con nombre "Maria" a 140 libras.

db.users.updateOne({nombre: "Maria"}, {$set: {peso: 140}});

// Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

db.users.updateMany({pais: "Estados Unidos"}, {$mul: {salario: 1.15}});

// Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

db.users.updateOne({nombre: "Pedro"}, {$set: {correo: "nuevo_correo@riwi.co"}});

// Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

db.users.updateMany({edad:{$lt:30}},{$set:{edad:30}});

// Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.

db.users.updateMany(
    {salario:{$lt:3000}},
    {$set:{$mul:{salario: 1.2}}}
)

// Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".

db.users.updateMany({cuidad: "Bogotá"}, {$set: {cuidad: "Medellín"}});

// Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

db.users.updateMany({salario:{$gt:5000}}, {$set:{pais:"Australia"}})

// Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

db.users.updateMany({edad:{$gt:50}},{$set:{edad:-5}});

// Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

db.users.updateMany({peso:{$gt:200}},{$set:{peso:180}});

// Incrementar el salario de los usuarios que viven en "London" en un 25%.

db.users.updateMany({cuidad: "London"}, {$set:{salario:{$inc:25}}})

// Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

db.users.updateMany({salario:{$gt:4000}}, {$set:{apellido:"Smith"}})

// Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

db.users.updateMany({nombre:{$regex:/^A/}},{$set:{correo:"nuevo@riwi.es"}});

// Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".

db.users.updateMany({altura: {$lt: 160}}, {$set:{pais: "paris"}});


// Eliminar usuarios que tienen una edad menor que 25 años.
    
db.users.deleteMany({edad: {$lte: 25}});
    
// Eliminar todos los usuarios que  tienen el nombre "John" y el apellido "Doe".
db.users.deleteMany({$and: [{nombre: "Sophia"}, {apellido: "Taylor"}]});

//Eliminar usuarios que viven en "Tokyo".

db.users.deleteMany({ciudad: { $regex: /Tokyo/i } });

// Borrar todos los usuarios que son menores de 18 años.

db.users.deleteMany({ edad: { $lt: 18}});

//creando un nuevo usurario para el siguiente ejercicio

db.users.deleteMany({salario:{$eq: 0}});// Eliminar usuarios que tienen un salario igual a 0.

// Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

db.users.deleteMany({$and:[{city:{$eq:"New York"}},{salario:{$gt:5000}}]})

// Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

db.users.deleteMany({correo:/spam/});

// Borrar usuarios que viven en "Bello" y tienen más de 50 años.

db.users.deleteMany({$and:[{ciudad:"Bello"},{edad:{$gt:50}}]});

// Eliminar todos los usuarios que tienen el apellido "González".

db.users.deleteMany({apellido : "González"})

// Borrar usuarios que tienen una edad superior a 70 años.

db.users.deleteMany({edad: {$gt: 70}});

// Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.+

db.users.deleteMany({
    $and:[
        {residencia: {$eq: "Canada"}},
        {salario: {$lt: 4000}}
    ]
});

// Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

db.users.deleteOne({
    $and:[
        {salario: {
            $gt: 1000
        }},
        {salario: {
            $lt: 2000
        }}
    ]
})

// Eliminar usuarios que tienen una edad igual a 30 años.

db.users.deleteMany({ edad : { $eq: 30 } });

// Borrar usuarios que tienen una altura superior a 190 centímetros.

db.users.deleteMany({altura:{$gt:190}});
