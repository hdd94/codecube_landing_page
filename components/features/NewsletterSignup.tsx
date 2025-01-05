import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulierte API-Anfrage
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setEmail('');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full p-3 border rounded-md"
                />
                <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </Button>
                {status === 'success' && (
                    <p className="text-green-600">Thanks for subscribing!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-600">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    );
}