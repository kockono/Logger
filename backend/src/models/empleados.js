const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}

let empleadoSchema = mongoose.model('Empleados',{
    nombre: {
        type : String,
        required: [true, 'El nombre es necesario'],
    },
    posicion: {
        type: String,
    },
    office: {
        type:String,
    },
    salario: {
        type: String
    },
    direccion: {
        type:String
    }
}
);



module.exports = empleadoSchema;
// module.exports = mongoose.model('Empleados', empleadoSchema);