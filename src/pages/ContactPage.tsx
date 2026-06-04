import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactPage() {
  const { formData, submitted, sending, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
          <p className="text-gray-400 leading-relaxed">
            Feel free to reach out through the form or via the contact details below.
            I typically respond within 24 hours.
          </p>
          <div className="space-y-4 pt-4">
            {[
              { icon: Mail, label: 'alex@developer.com', href: 'mailto:alex@developer.com' },
              { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
              { icon: MapPin, label: 'San Francisco, CA', href: undefined },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                {item.href ? (
                  <a href={item.href} className="text-gray-300 hover:text-indigo-400 transition-colors text-sm">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-gray-300 text-sm">{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors"
              >
                {sending ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
