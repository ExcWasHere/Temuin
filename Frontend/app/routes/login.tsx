// Frontend/app/routes/login.tsx
import React, { useState } from 'react';
import type { Route } from "./+types/login"; 

export function meta({}: Route.MetaArgs) {
return [
    { title: "TemuIn | Login" },
    { name: "Login Page", content: "Halaman masuk ke akun TemuIn." },
];
}

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (username === "user@test.com" && password === "password123") {
        alert("Login Berhasil! Selamat datang.");        
    } else {
        setError("Email atau kata sandi salah. Silakan coba lagi.");
    }
    };

    return (
    <div className="flex h-screen w-full">
      {/* Kolom Kiri - Background Dekoratif */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-12 relative overflow-hidden bg-linear-to-br from-blue-500 to-sky-400">
        <h1 className="text-6xl font-bold text-white z-10">TemuIn</h1>
        {/* elemen dekoratif sesuai selera */}
        {/*  */}
        </div>

      {/* Kolom Kanan - Form Login */}
        <div className="flex flex-1 items-center justify-center p-8 sm:p-12 lg:p-16 bg-white">
        <div className="w-full max-w-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Login</h2>
        <p className="text-gray-500 mb-8">Welcome back! Please login to your account.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input User Name */}
            <div>
            <label className="block text-sm font-medium text-gray-700">User Name</label>
            <input
                type="email"
                placeholder="username@gmail.com"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>

            {/* Input Password */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                placeholder="*********"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            
            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
                <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-gray-900">
                Remember me
                </label>
            </div>
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot Password?
            </a>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Login Button */}
            <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
            Login
            </button>
            
            {/* Signup Link */}
            <div className="text-center text-sm mt-4">
                New User? <a href="/register" className="font-semibold text-blue-600 hover:text-blue-500">Signup</a>
            </div>
        </form>
        </div>
    </div>
    </div>
    );
}