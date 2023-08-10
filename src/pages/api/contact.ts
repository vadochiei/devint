import type { NextApiRequest, NextApiResponse } from 'next'
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { Anybody } from 'next/font/google';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // const API_KEY = 'de4b019fa98b9d17e2ccc24844770a92-28e9457d-c82f1f10';
    // const DOMAIN = 'sandboxf52542f2bd4b4ebd9be5d95f716b2f0e.mailgun.org';
    const API_KEY = process.env.MAILGUN_API_KEY || '';
    const DOMAIN = process.env.MAILGUN_DOMAIN || '';

    console.log('Data', req.body);

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({
        username: 'api', 
        key: API_KEY
    });

    const {name, email, subject, message} = req.body

    const messageData = {
    from: 'ContactForm <contactForm@devintsolutions.ro>',
    to: 'devintsolutions@gmail.com',
    subject: `ContactForm: ${subject}`,
    text: `
    Hello
    
    You have new form entry from ${name} ${email}.

    ${message}
    `
    };

    client.messages.create(DOMAIN, messageData)
    .then((res) => {
    console.log(res);
    })
    .catch((err) => {
    console.error(err);
    });

    res.status(200).json({ submitted: true })

}

