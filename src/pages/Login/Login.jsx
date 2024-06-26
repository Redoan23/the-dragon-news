import { Link, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

export default function Login() {

    const { loginUser } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                location?.state ? navigate(location.state) : navigate('/')
            })
            .catch(err => {
                console.error(err)
            })

        e.currentTarget.reset()
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className=" min-h-screen bg-base-200">
                <div><h3 className=" text-center py-14 text-3xl font-semibold">please login here</h3></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className=" text-center pb-4">Don't have an account? <Link className=" text-red-600" to={'/register'}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}