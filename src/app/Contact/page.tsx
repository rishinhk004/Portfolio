"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xandlzga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    } catch (err) {
      toast.error("Network error. Please try later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-xl md:text-3xl font-bold font-serif mb-6">Contact ~</h1>
      <p className="text-gray-400 mb-8">
        Got a project, a question, or just wanna vibe? I&apos;m always down to chat. 
        Hit me up through the form or connect on any platform below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What's on your mind?"
            rows={5}
            required
            className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white font-medium px-6 py-4 rounded-lg shadow hover:bg-gray-200 transition disabled:opacity-50 hover:text-black cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
