import { useState } from "react"
import { Link } from "react-router-dom"
import {register} from "../../services/api.js"
import toast from "react-hot-toast"

const Register = () => {
    
    const notify = (message) => toast(
        message,
        {
            icon: '✅',
            style: {
                borderRadius: '10px',
                background: '#008000',
                color: '#fff',
                fontWeight: 'bold',
            },
        }
    )

    const [dataUser, setDataUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleChange = (e) => {
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(dataUser)
        const response =await register({
            username: dataUser.username,
            email: dataUser.email,
            password: dataUser.password,
        })
        if(response.username){
            notify('Usuario creado correctamente')
        }
        console.log(response)
    }

    return (
        <section className="w-full md:w-[50%] p-10">
            <div>
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-black py-2">Registro</h1>
                    <p>¿Ya tienes una cuenta?<Link to="/login" className="text-white font-bold">  Login</Link></p>
                </div>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 font-semibold" 
                            placeholder="name@company.com" required=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 font-semibold" 
                            placeholder="name@company.com" 
                            required=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="••••••••" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 font-semibold" 
                            required=""
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comfirma tu contraseña</label>
                        <input 
                            type="password" 
                            name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 font-semibold" 
                            required=""
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="w-full max-w-[20rem] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear cuenta</button>
                    </div>
                    
                </form>
            </div>
        </section>
    )
}

export default Register