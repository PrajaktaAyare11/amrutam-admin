'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

// 1. Define the type for the form data state
interface FormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  
  // 2. Type the useState hook for form data
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  
  // 3. Type the other simple states
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // 4. Type the handleSubmit function (takes a FormEvent from React)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate login (replace with actual API call)
    setTimeout(() => {
      if (formData.email === 'admin@amrutam.com' && formData.password === 'admin123') {
        // Define the user object structure clearly
        const user = {
          name: 'Liam Michael',
          email: formData.email,
          role: 'Admin',
          avatar: '/avatar.png'
        };
        
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(user));
        
        router.push('/dashboard/affiliate');
      } else {
        setError('Invalid email or password');
        setLoading(false);
      }
    }, 1000);
  };

  // 5. Type the handleChange function (takes a ChangeEvent from React)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TypeScript knows e.target is an HTMLInputElement and has name/value properties
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center ">
            <Image
                src='/amrutam_logo.png'   
                alt='Amrutam Logo'
                width={150}
                height={150}
                className="object-contain"
            /> 
          </div>
          <CardTitle className="text-3xl font-bold text-lime-800 ">Amrutam Admin</CardTitle>
          <CardDescription className="text-lime-800">
            Sign in to access your admin dashboard
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@amrutam.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="h-11"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-emerald-800 hover:bg-green-700 text-white font-medium"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>

            <div className="text-center text-sm text-gray-500 mt-4">
              <p>Demo Credentials:</p>
              <p className="font-mono text-xs mt-1">admin@amrutam.com / admin123</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
