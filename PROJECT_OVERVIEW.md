Project Documentation: Fitness Programs Sales Site
Project Overview
Project Name
Fitness Programs Sales Site

Description
An e-commerce site dedicated to selling fitness programs. The site allows users to browse programs, view details, purchase programs securely through Stripe, and receive program PDFs via email with Mailgun integration.

Objectives
Simplify the user journey from browsing programs to purchase.
Ensure secure and seamless transactions using Stripe Checkout.
Automate email delivery of purchased PDFs to reduce manual intervention.
Create a scalable structure to add more programs and additional features if required.
Core Project Documents
1. Project Requirements Document (PRD)
Audience: Fitness enthusiasts looking to purchase and follow structured programs.

Functional Requirements:

Program Listings: Display all available programs with essential details.
Program Details: Provide users with an in-depth look at each program.
Checkout Flow: Integrate Stripe for secure and easy payments.
Email Delivery: Use Mailgun to send PDF attachments post-purchase.
Non-Functional Requirements:

Scalability: Built to add new programs and expand functionality with ease.
Security: Ensure user data protection through secure API integrations.
Performance: Provide fast loading times and minimal friction in the user journey.
2. Page Layout and Structure Documentation
Homepage (/)
Hero Section: Display eye-catching image and tagline.
Popular Programs: Grid layout of featured programs with:
Program title, description, price, difficulty, and rating.
CTA button to learn more about each program.
Program Listing Page (/programs)
Header with Filtering Options (if applicable): Allows users to filter by difficulty or goal.
Program Cards: Displayed in a grid with basic program details.
Learn More CTA: Links each program card to its respective details page.
Program Detail Page (/programs/[id])
Program Title & Details: Key information including difficulty, duration, and benefits.
Image Carousel (optional): High-quality images of the program.
Buy Now CTA: Prominent button that leads to Stripe Checkout.
Success Page (/success)
Confirmation Message: Thank users for their purchase.
Instructions: Let users know an email with the program PDF will be sent to their inbox.
Additional CTA: Buttons for returning to the homepage or browsing other programs.
3. App Flow Documentation
1. User Browses Programs

User lands on homepage.
Navigates to programs listing or specific program detail pages.
2. Program Detail and Purchase Decision

User views the details of a chosen program.
Clicks "Buy Now" to initiate the purchase.
3. Stripe Checkout Flow

Redirected to Stripe Checkout.
Enters email and payment information.
Completes payment and is redirected to the Success Page.
4. Post-Purchase Confirmation

Success Page confirms the purchase.
Automated email sent to the user with program PDF as an attachment.
5. User Engagement Options

Users encouraged to explore more programs or share on social media.
4. App Functionality Documentation
Payment Processing with Stripe
Checkout Session:
Initiates on “Buy Now” button click.
Uses Stripe Checkout with the checkout.session.completed event.
Environment Variables:
STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_WEBHOOK_SECRET
Webhook and Email Delivery
Webhook (/api/webhooks/stripe):

Listens for checkout.session.completed.
Retrieves the customer’s email and triggers the email sending process.
Email Delivery via Mailgun:

Mailgun setup to send transactional emails.
Sends a thank-you message and attaches the PDF.
Environment Variables:
MAILGUN_API_KEY
MAILGUN_DOMAIN
PDF Storage in Google Cloud Storage
File Storage:
Programs are stored in GCS as PDFs.
Downloads PDF upon successful payment and attaches it to email.
Environment Variables:
GCLOUD_PROJECT_ID
GCLOUD_KEYFILE_PATH
GCLOUD_STORAGE_BUCKET
Additional Technical Specifications
Environment Setup
Use a .env.local file with the following keys:
STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, STRIPE_WEBHOOK_SECRET
MAILGUN_API_KEY, MAILGUN_DOMAIN
GCLOUD_PROJECT_ID, GCLOUD_KEYFILE_PATH, GCLOUD_STORAGE_BUCKET
API Routes Overview
/api/checkout: Creates Stripe checkout session for purchases.
/api/webhooks/stripe: Handles Stripe webhook events for purchase completion.
Database Schema (Future Considerations)
In the future, storing additional program data in a database might be valuable. A potential schema:

Program
id: string (unique program identifier)
title: string
description: string
price: integer (in cents)
difficulty: string
rating: float
image: string (URL)
pdfFileName: string (reference to stored PDF)
Development Workflow
Running Locally
Install Dependencies:

bash
Copy code
npm install
Start Development Server:

bash
Copy code
npm run dev
Testing Webhooks with Stripe CLI:

Use stripe listen with a local endpoint and update .env.local with the CLI-provided webhook secret.
Deployment Checklist
Environment Variables:
Ensure all sensitive information is set as environment variables on your hosting platform.
Secure Data Transmission:
Confirm HTTPS is enforced to secure user and payment data.
Monitor Webhook Responses:
Enable error logging and notifications to monitor any failed webhook events or email issues.
Future Enhancements
User Accounts and Purchase History:

Consider implementing user accounts to allow users to view their purchase history or re-download programs.
Upselling and Cross-Promotion:

Use the success page and emails to suggest other programs or fitness products.
Automated Testing:

Write tests for critical functionality like payment processing, webhook handling, and email delivery.
Additional Documentation
Security Considerations
Environment Variables:
Ensure sensitive keys are managed securely and not committed to the repository.
Data Privacy:
Never store sensitive user data such as credit card information directly; use Stripe’s secure payment handling.
Testing and Debugging
Stripe Test Cards:
Use Stripe-provided test cards to simulate different payment outcomes.
Mailgun Sandbox:
Use sandbox mode initially for testing email delivery. Switch to a verified domain for production.
Error Handling
Payment Failure:
Implement a fallback or redirect users to retry if payment fails.
Email Delivery Failure:
Log email delivery errors and notify the team if critical failures occur.