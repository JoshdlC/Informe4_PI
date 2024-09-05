import {z} from 'zod';

export const registerSchema = z.object({
    registro_academico: z.string({
        required_error: 'El registro académico es requerido'
    }),
    nombres:z.string({
        required_error: 'El nombre es requerido'
    }),
    apellidos: z.string({
        required_error: 'El apellido es requerido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres'
    }),
    correo: z.string({
        required_error: 'El correo es requerido'
    }).email({
        message: 'El correo no es válido'
    }),
})

export const loginSchema = z.object({
    registro_academico: z.string({
        required_error: 'El registro académico es requerido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres'
    }),
})