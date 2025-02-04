'use client'; // Required for using hooks in Next.js

import React, { useState } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormspree } from '@formspree/react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

// Define the form schema using Zod
const formSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useReactHookForm({
        resolver: zodResolver(formSchema),
    });

    const { toast } = useToast();
    const [state, handleFormspreeSubmit] = useFormspree('moqolweg');
    const [loading, setLoading] = useState(false);

    const onSubmit = async data => {
        setLoading(true);
        try {
            const result = await fetch(`https://formspree.io/f/moqolweg`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            console.log(result);

            if (result.ok) {
                toast({
                    title: 'Success',
                    description: 'Your message has been sent successfully!',
                });
                reset();
            } else {
                toast({
                    title: 'Error',
                    description: 'Something went wrong. Please try again.',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to send message. Please try again later.',
                variant: 'destructive',
            });
        }
        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto space-y-4 bg-card p-4 rounded-xl border border-border"
        >
            {/* Name Field */}
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register('name')} placeholder="Enter your name" />
                {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
            </div>

            {/* Email Field */}
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" {...register('email')} placeholder="Enter your email" />
                {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
            </div>

            {/* Message Field */}
            <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Enter your message"
                    rows="4"
                />
                {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
            </Button>
        </form>
    );
}
