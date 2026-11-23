import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "../Components/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    let isSent = false;
    let failureDetail = "";

    // 1. Send via local/serverless /api/contact (Gmail SMTP to kalpanabhandari383@gmail.com)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json().catch(() => ({}));
      if (response.ok && resData.success) {
        isSent = true;
      } else {
        failureDetail = resData.message || "Failed to send message.";
      }
    } catch (err) {
      failureDetail = err.message;
    }

    // 2. Direct fallback relay to kalpanabhandari383@gmail.com if /api/contact is unavailable
    if (!isSent) {
      try {
        const response = await fetch("https://formsubmit.co/ajax/kalpanabhandari383@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Message from ${formData.name}`,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _captcha: "false",
          }),
        });

        const resData = await response.json().catch(() => ({}));
        if (response.ok && (resData.success === "true" || resData.success === true || response.status === 200)) {
          isSent = true;
        }
      } catch (err) {
        console.error("Fallback error:", err);
      }
    }

    if (isSent) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
      setErrorMessage(
        failureDetail || "Unable to send message right now. Please try again or email directly."
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0f1418] text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-[#20b2a6]">Me</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            I'm currently looking for frontend development opportunities, internships, and freelance projects.
            Feel free to reach out. Thank you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#20b2a6]/10 shrink-0">
                <Mail className="text-[#20b2a6]" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-400">
                  <a
                    href="mailto:kalpanabhandari383@gmail.com"
                    className="hover:text-[#20b2a6] transition-colors"
                  >
                    kalpanabhandari383@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#20b2a6]/10 shrink-0">
                <Phone className="text-[#20b2a6]" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-400">
                  <a href="tel:+9779847714152" className="hover:text-[#20b2a6] transition-colors">
                    +977-9847714152
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#20b2a6]/10 shrink-0">
                <MapPin className="text-[#20b2a6]" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-400">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#151b21] rounded-2xl p-6 sm:p-8 border border-gray-800">
            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-[#20b2a6]/15 border border-[#20b2a6]/40 text-white flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#20b2a6] shrink-0" />
                <p className="font-semibold text-sm text-[#20b2a6]">
                  Thank you for your message!
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-white flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <p className="font-medium text-sm text-rose-300">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block mb-2 text-sm font-medium text-gray-300">
                  Full Name <span className="text-[#20b2a6]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-[#0f1418] border border-gray-700 focus:border-[#20b2a6] focus:ring-1 focus:ring-[#20b2a6] outline-none text-white transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block mb-2 text-sm font-medium text-gray-300">
                  Email Address <span className="text-[#20b2a6]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-[#0f1418] border border-gray-700 focus:border-[#20b2a6] focus:ring-1 focus:ring-[#20b2a6] outline-none text-white transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block mb-2 text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Opportunity"
                  className="w-full p-3 rounded-lg bg-[#0f1418] border border-gray-700 focus:border-[#20b2a6] focus:ring-1 focus:ring-[#20b2a6] outline-none text-white transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block mb-2 text-sm font-medium text-gray-300">
                  Message <span className="text-[#20b2a6]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full p-3 rounded-lg bg-[#0f1418] border border-gray-700 focus:border-[#20b2a6] focus:ring-1 focus:ring-[#20b2a6] outline-none text-white resize-none transition-all text-sm"
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full bg-[#20b2a6] hover:bg-[#1a9389] text-white flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
