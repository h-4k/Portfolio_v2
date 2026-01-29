import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        // Validation
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address' },
                { status: 400 }
            );
        }

        // TODO: Integrate with email service (SendGrid, Resend, etc.)
        // For now, just log the contact form data
        console.log('Contact form submission:', {
            name: body.name,
            email: body.email,
            message: body.message,
            personality: body.personality || 'unknown',
            timestamp: new Date().toISOString(),
        });

        // Simulate email sending delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return NextResponse.json({
            success: true,
            message: 'Thank you for reaching out! I\'ll get back to you soon.',
        });
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { success: false, message: 'Server error. Please try again later.' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Use POST method to submit contact form' },
        { status: 405 }
    );
}
