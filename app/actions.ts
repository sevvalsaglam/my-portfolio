"use server"

export async function submitContactForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  const mailto = `mailto:sevvallsaglam@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0DEmail: ${email}%0D%0AMessage:%0D%0A${message}`

  return {
    message: "Click below to send your message.",
    mailto,
  }
}
