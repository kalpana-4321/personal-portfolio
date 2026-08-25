import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../Components/Button";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-[#0f1418] text-white"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-[#20b2a6]">Me</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for frontend development opportunities,
            internships, and freelance projects. Feel free to reach out..
            Thank you!!!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#20b2a6]/10">
                <Mail className="text-[#20b2a6]" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-400">
                  kalpanabhandari3838@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#20b2a6]/10">
                <Phone className="text-[#20b2a6]" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-400">
                  +977-9847714152
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#20b2a6]/10">
                <MapPin className="text-[#20b2a6]" />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-400">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-[#151b21] rounded-2xl p-6 border border-gray-800">

            <form className="space-y-6">

              <div>
                <label className="block mb-2 text-sm">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-[#0f1418] border border-gray-700 focus:border-[#20b2a6] outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-[#0f1418] border border-gray-700 focus:border-[#20b2a6] outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg bg-[#0f1418] border border-gray-700 focus:border-[#20b2a6] outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Message
                </label>

                <textarea
                  rows="3"
                  placeholder="Write your message..."
                  className="w-full h-28 p-3 rounded-lg bg-[#0f1418] border border-gray-700 focus:border-[#20b2a6] outline-none resize-none"
                ></textarea>
              </div>

              <Button
                size="lg"
                className="w-full bg-[#20b2a6] hover:bg-[#1a9389] text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};