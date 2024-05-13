import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    console.log(name, email, message);

    const { error } = await resend.emails.send({
      // from: "Acme <onboarding@resend.dev>",
      to: ["mika1shanela@gmail.com"],
      subject: "Hello world",
      react: (
        <div>
          <h2>Message from {name}!</h2>
          <p>email: {email}</p>
          <p>message: {message}</p>
        </div>
      ),
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ name, email, message });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
