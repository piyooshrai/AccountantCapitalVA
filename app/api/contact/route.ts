import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, industry, software, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Build email content
    const emailContent = `
New Contact Form Submission from accountantcapitalva.com

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Industry: ${industry || 'Not provided'}
Current Software: ${software || 'Not provided'}

Message:
${message}

---
Submitted: ${new Date().toISOString()}
IP: ${req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown'}
    `;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Accountant Capital VA <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'info@thehuman.capital',
      replyTo: email,
      subject: `New Contact: ${name} - accountantcapitalva.com`,
      html: `<pre>${emailContent}</pre>`,
      text: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        id: data?.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
