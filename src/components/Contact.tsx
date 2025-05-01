import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Let's Connect & Explore Opportunities
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Ready to discuss how Deepalytics can help your organization leverage data for success in the energy and utilities sector? We offer multiple ways to get in touch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {/* Chatbase Integration Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Instant Chat</h3>
            <p className="text-gray-600 mb-4">
              Have a quick question? Use our AI-powered chat assistant (powered by Chatbase) available 24/7 to get instant answers about our services and expertise.
            </p>
            <div className="bg-gray-200 h-40 flex items-center justify-center rounded text-gray-500">
              [Chatbase Widget Embed Area]
            </div>
          </div>

          {/* Calendly Integration Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Schedule a Consultation</h3>
            <p className="text-gray-600 mb-4">
              Book a free, no-obligation consultation call directly into our calendar using the Calendly scheduler below. Choose a time that works best for you to discuss your specific needs and challenges in detail.
            </p>
            <div className="bg-gray-200 h-40 flex items-center justify-center rounded text-gray-500">
              [Calendly Embed Area]
            </div>
          </div>
        </div>

        {/* Optional Direct Contact Info */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-3">Direct Contact</h3>
          <p className="text-gray-600">
            Email: <a href="mailto:contact@deepalytics.co.uk" className="text-blue-600 hover:underline">contact@deepalytics.co.uk</a> (Placeholder)<br />
            Phone: +44 [Your Phone Number] (Placeholder)<br />
            Location: London, UK (Or relevant location)
          </p>
        </div>

        <p className="text-lg text-gray-700">
          We look forward to hearing from you and exploring how data-driven insights can empower your business.
        </p>
      </div>
    </section>
  );
};

export default Contact;

