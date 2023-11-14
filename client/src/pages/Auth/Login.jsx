import { useState } from "react"
import { login } from "../../services/api"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

    const [dataUser, setDataUser] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response =await login(dataUser)
        console.log(response)
        if(response.username){
            navigate('/dashboard')
        }
    }

    return (
        <section className="w-full md:w-[50%] p-10">
            <div>
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-black py-2">Login</h1>
                    
                </div>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
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
                    <div className="flex justify-center">
                        <button type="submit" className="w-full max-w-[20rem] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
                    </div>
                    <p>¿No tienes una cuenta?<Link to="/register" className="text-blue font-bold">  Registro</Link></p>
                </form>
            </div>
        </section>
    )
}

export default Login