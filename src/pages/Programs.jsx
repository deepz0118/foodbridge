import React from 'react';
import { FaHandsHelping, FaLeaf, FaChalkboardTeacher } from 'react-icons/fa';

function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Community Kitchen Initiative',
      description:
        'Our community kitchens provide nutritious meals to underprivileged populations, ensuring food security and fostering community bonds.',
      icon: <FaHandsHelping className="text-4xl text-teal-700 mb-4" />,
      image: 'https://tse4.mm.bing.net/th?id=OIP.X-6KBYv5TC9kVDJ_1ppergHaE8&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      title: 'Educational Workshops',
      description:
        'We conduct workshops on nutrition, hygiene, and sustainable practices to educate and empower community members.',
      icon: <FaChalkboardTeacher className="text-4xl text-teal-700 mb-4" />,
      image: 'https://tse2.mm.bing.net/th?id=OIP.lDVOh9yl7kxR_MOKqwgozgHaFj&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      title: 'Food Rescue Program',
      description:
        'Partnering with local businesses, we rescue surplus food and distribute it to those in need, reducing waste and hunger simultaneously.',
      icon: <FaLeaf className="text-4xl text-teal-700 mb-4" />,
      image: 'https://tse2.mm.bing.net/th?id=OIP.KO0MypsRZk5wpsDMCF07UwHaFx&pid=Api&P=0&h=180',
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative p-10"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-vector/abstract-floral-design-hand-painted-teal-alcohol-ink-background_1048-20381.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-teal-800 text-center mb-10 drop-shadow-lg">
          Our Programs
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          At [Annai Illam], we are dedicated to alleviating hunger and empowering communities. Our programs are designed to create sustainable impact and drive positive change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              {program.icon}
              <h2 className="text-2xl font-bold text-teal-700 mb-2">
                {program.title}
              </h2>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-teal-700 text-center mb-6">
            Success Stories
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic mb-2">
                "Thanks to the Community Kitchen, I no longer worry about my next meal. The support has been life-changing."
              </p>
             
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-700 italic mb-2">
                "The workshops taught me valuable skills that I now use daily to keep my family healthy."
              </p>
             
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            Get Involved
          </h2>
          <p className="text-gray-700 mb-6">
            Join us in making a difference. Whether through volunteering, donating, or partnering, your support drives our mission forward.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> saran@gmail.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> Madurai Tamil Nadu
          </p>
        </div>

        <footer className="mt-10 bg-teal-600 text-white py-6 text-center rounded-lg">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} [Your NGO Name]. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/about" className="hover:text-gray-200">
              About Us
            </a>
            <a href="/programs" className="hover:text-gray-200">
              Programs
            </a>
            <a href="/contact" className="hover:text-gray-200">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Programs;
