'use server';

const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY ?? 'd5624671-36a5-4df2-b594-8506a2287d04';

export type ContactSubmitData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  subject: string;
  message: string;
};

export async function submitContact(data: ContactSubmitData): Promise<{ success: boolean }> {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: data.subject,
      from_name: `${data.firstName} ${data.lastName}`.trim(),
      email: data.email,
      phone: data.phone,
      topic: data.topic,
      message: data.message,
      botcheck: '',
    }),
  });

  const result = await response.json();
  return { success: Boolean(result.success) };
}

