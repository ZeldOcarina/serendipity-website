import axios from "axios";
import isEmail from "validator/lib/isEmail";

export async function handleSubscriptionFormSubmit(e, formData, setSuccess, recaptchaRef) {
  e.preventDefault();

  if (!formData.privacy)
    return setSuccess({ success: false, message: "Please accept our privacy policy", hidden: false });
  if (!formData.name) {
    return setSuccess({ success: false, message: "Please enter your name", hidden: false });
  }
  if (!isEmail(formData.email))
    return setSuccess({ success: false, message: "Please enter a valid email", hidden: false });

  try {
    const token = await recaptchaRef.current.executeAsync();
    await axios.post("/api/recaptcha-check", { token });
  } catch (err) {
    if (err.response.status === 403) return setSuccess({ success: false, message: "Invalid Recaptcha", hidden: false });
    setSuccess({ success: false, message: "Unknown error", hidden: false });
  }

  const response = await fetch("https://sj-api.com/externalapp/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.GATSBY_SALESJET_KEY,
    },
    body: JSON.stringify({
      event_name: "newsletter-subscriber",
      contact: { email: formData.email, first_name: formData.name },
    }),
  });

  if (response.status !== 200)
    setSuccess({ success: false, message: "Unknown error. Please try again later.", hidden: false });

  setSuccess({ success: true, message: "Form correctly sent. Thank you!", hidden: false });
}

export async function handleContactFormSubmit(e, formData, setSuccess, recaptchaRef, setSubmitting) {
  e.preventDefault();

  if (!formData.privacy_accepted)
    return setSuccess({ success: false, message: "Please accept our privacy policy", hidden: false });
  if (!formData.first_name) {
    return setSuccess({ success: false, message: "Please enter your name", hidden: false });
  }
  if (!isEmail(formData.email))
    return setSuccess({ success: false, message: "Please enter a valid email", hidden: false });

  setSubmitting(true);

  try {
    const token = await recaptchaRef.current.executeAsync();
    await axios.post("/api/recaptcha-check", { token });
  } catch (err) {
    if (err.response.status === 403) {
      setSubmitting(false);
      return setSuccess({ success: false, message: "Invalid Recaptcha", hidden: false });
    }
    setSuccess({ success: false, message: "Unknown error", hidden: false });
    setSubmitting(false);
  }

  const response = await fetch("https://sj-api.com/externalapp/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.GATSBY_SALESJET_KEY,
    },
    body: JSON.stringify({
      event_name: "contact_form",
      contact: {
        email: formData.email,
        first_name: formData.first_name,
        custom_attributes: { "5ab0bd61-e1d5-e911-a9a7-bbb017f663b2": formData.message },
      },
    }),
  });

  if (response.status !== 200)
    setSuccess({ success: false, message: "Unknown error. Please try again later.", hidden: false });

  setSuccess({ success: true, message: "Form correctly sent. Thank you!", hidden: false });
  setSubmitting(false);
}
