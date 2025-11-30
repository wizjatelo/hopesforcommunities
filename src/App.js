import React, { useState } from 'react';
import { Heart, BookOpen, Users, Lightbulb, Menu, X, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Download, CheckCircle, Target, Home as HomeIcon } from 'lucide-react';

const HopesWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const navigation = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'impact', label: 'Impact & Stories' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({});
  };

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Building Hope. One Child at a Time.</h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-50">Education, mentorship and spiritual growth for vulnerable children and youth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
              Donate Now
            </button>
            <button className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-lg font-semibold text-lg transition">
              Sponsor a Child
            </button>
            <button onClick={() => setCurrentPage('about')} className="border-2 border-white hover:bg-white hover:text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg transition">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white shadow-lg -mt-12 mx-4 md:mx-auto max-w-5xl rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">100+</div>
            <div className="text-gray-600">Students Engaged</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">30+</div>
            <div className="text-gray-600">School Fee Sponsorships</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-teal-600 mb-2">70+</div>
            <div className="text-gray-600">Mentorship Participants</div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <BookOpen className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-800">Education Support</h3>
            <p className="text-gray-600">Providing school fees and educational resources to vulnerable children, ensuring they stay in school and continue their studies.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <Users className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-800">Mentorship & Counseling</h3>
            <p className="text-gray-600">Structured mentorship programs offering academic guidance, spiritual growth, and personal development for youth.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <Lightbulb className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold mb-3 text-gray-800">Vocational Training</h3>
            <p className="text-gray-600">Skills training in carpentry, electrical work, tailoring, and agriculture to prepare youth for employment.</p>
          </div>
        </div>
      </div>

      {/* Impact Snapshot */}
      <div className="bg-gradient-to-r from-orange-50 to-teal-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl italic text-gray-700 mb-4">
            "I had given up on education, but thanks to Hopes for Communities, I was able to join secondary school and continue my studies."
          </blockquote>
          <p className="text-gray-600 mb-6">— Student Success Story</p>
          <button onClick={() => setCurrentPage('impact')} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Read Success Stories →
          </button>
        </div>
      </div>
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-teal-50">Transforming lives through faith, education, and community</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To transform lives through education, mentorship, and spiritual growth. We are a faith-based community organization dedicated to giving vulnerable children access to education, mentorship, and vocational skills.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A future where every child has access to education and hope.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Faith</h3>
                <p className="text-gray-600">Grounded in Christian values and spiritual growth</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Integrity</h3>
                <p className="text-gray-600">Transparency and accountability in all we do</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Compassion</h3>
                <p className="text-gray-600">Meeting children where they are with love and care</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-teal-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Sustainability</h3>
                <p className="text-gray-600">Building long-term solutions for lasting impact</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Reach</h2>
          <p className="text-gray-700 mb-6">
            We partner with local schools and churches to identify and support vulnerable children in our community. Our partnerships include Wachara Primary School, Bar Union Secondary School, Winners' Chapel International – Nyahera, and AIC Church.
          </p>
          <button className="flex items-center text-teal-600 hover:text-teal-700 font-semibold">
            <Download className="w-5 h-5 mr-2" />
            Download Annual Report
          </button>
        </div>
      </div>
    </div>
  );

  // Programs Page
  const ProgramsPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-teal-50">Comprehensive support for education, growth, and opportunity</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-6">
        {/* School Fees Sponsorship */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start mb-4">
            <BookOpen className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">School Fees Sponsorship</h2>
              <p className="text-gray-700 mb-4">
                We provide targeted school fee support to families in economic hardship so children can stay in school. Over the last year, we supported 30+ students with school fees, ensuring continued access to formal education and preventing dropouts.
              </p>
              <div className="bg-teal-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-800 mb-2">Who We Serve:</p>
                <p className="text-gray-700">Vulnerable children from families facing economic hardship, at risk of dropping out due to inability to pay fees.</p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                Sponsor a Child
              </button>
            </div>
          </div>
        </div>

        {/* Mentorship & Counseling */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start mb-4">
            <Users className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Mentorship & Counseling</h2>
              <p className="text-gray-700 mb-4">
                Youth engaged in structured mentorship programs receive academic guidance, spiritual growth, and personal development. Over 70 participants have experienced improved confidence and stronger values through our mentorship initiatives.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Age Groups:</p>
                  <p className="text-gray-700">Primary and secondary school students</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Outcomes:</p>
                  <p className="text-gray-700">Improved confidence, stronger values, better academic performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bible Study */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start mb-4">
            <Heart className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Weekend & Holiday Bible Study</h2>
              <p className="text-gray-700 mb-4">
                We organize Bible study sessions during weekends and school holidays, giving children a safe space for spiritual growth, moral guidance, and fellowship. These sessions create community and instill Christian values.
              </p>
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Schedule:</p>
                <p className="text-gray-700">Weekends and school holiday periods</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vocational Training */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-start mb-4">
            <Lightbulb className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Vocational & Skills Training</h2>
              <p className="text-gray-700 mb-4">
                Equipping youth with practical abilities necessary for employment and self-reliance through hands-on training programs.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Training Areas:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Electrical installation & solar technology</li>
                    <li>• Carpentry & masonry</li>
                    <li>• Tailoring</li>
                    <li>• Agricultural practices</li>
                  </ul>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Benefits:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Job readiness</li>
                    <li>• Self-employment opportunities</li>
                    <li>• Reduced unemployment</li>
                    <li>• Sustainable livelihoods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Center Project */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-lg shadow-lg p-8">
          <Target className="w-12 h-12 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Educational Center Project</h2>
          <p className="text-teal-50 mb-6">
            Our vision is to establish a permanent Educational Center that centralizes and sustains our education support programs.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold mb-2">Phase 1</p>
              <p className="text-sm text-teal-50">Secure land for the center</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold mb-2">Phase 2</p>
              <p className="text-sm text-teal-50">Build classrooms & facilities</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
              <p className="font-bold mb-2">Phase 3</p>
              <p className="text-sm text-teal-50">Enroll first cohort of students</p>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-full h-4 mb-2">
            <div className="bg-orange-500 h-4 rounded-full" style={{width: '25%'}}></div>
          </div>
          <p className="text-sm text-teal-50 mb-4">25% funded - Help us reach our goal!</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Support This Project
          </button>
        </div>
      </div>
    </div>
  );

  // Get Involved Page
  const GetInvolvedPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-orange-50">Your support transforms lives and builds hope</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Donate */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Heart className="w-12 h-12 text-orange-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Donate</h2>
            <p className="text-gray-700 mb-6">Your financial support helps us provide school fees, learning materials, and life-changing programs.</p>
            <div className="space-y-3 mb-6">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
                One-Time Donation
              </button>
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition">
                Monthly Giving
              </button>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Payment Options:</strong> Mobile Money (M-Pesa), Bank Transfer, PayPal, or Stripe
              </p>
            </div>
          </div>

          {/* Sponsor a Child */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Users className="w-12 h-12 text-teal-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sponsor a Child</h2>
            <p className="text-gray-700 mb-6">Provide consistent support for a child's education through monthly sponsorship.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name || ''}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email || ''}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
              <select
                name="frequency"
                value={formData.frequency || ''}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              >
                <option value="">Select Frequency</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annual">Annual</option>
              </select>
              <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition">
                Start Sponsorship
              </button>
            </form>
          </div>
        </div>

        {/* Volunteer */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Volunteer</h2>
          <p className="text-gray-700 mb-6">Share your time, skills, and passion to make a direct impact in children's lives.</p>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="volunteer_name"
              placeholder="Full Name"
              value={formData.volunteer_name || ''}
              onChange={handleFormChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
            <input
              type="email"
              name="volunteer_email"
              placeholder="Email"
              value={formData.volunteer_email || ''}
              onChange={handleFormChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
            <input
              type="tel"
              name="volunteer_phone"
              placeholder="Phone Number"
              value={formData.volunteer_phone || ''}
              onChange={handleFormChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
            <select
              name="skills"
              value={formData.skills || ''}
              onChange={handleFormChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            >
              <option value="">Select Your Skills</option>
              <option value="teaching">Teaching/Tutoring</option>
              <option value="mentorship">Mentorship</option>
              <option value="admin">Administration</option>
              <option value="technical">Technical/Vocational</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="availability"
              placeholder="Tell us about your availability and interests..."
              value={formData.availability || ''}
              onChange={handleFormChange}
              className="md:col-span-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent h-24"
              required
            />
            <button type="submit" className="md:col-span-2 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold transition">
              Submit Application
            </button>
          </form>
        </div>

        {/* In-Kind Donations */}
        <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">In-Kind Donations</h2>
          <p className="text-gray-700 mb-4">We urgently need the following items:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">Learning Materials</p>
              <p className="text-sm text-gray-600">Books, notebooks, pens, pencils</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">Furniture</p>
              <p className="text-sm text-gray-600">Desks, chairs, shelves</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">Uniforms & Supplies</p>
              <p className="text-sm text-gray-600">School uniforms, shoes, bags</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Impact Page
  const ImpactPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-xl text-teal-50">Real stories of transformation and hope</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Story */}
        <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-start mb-4">
            <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
              S
            </div>
            <div>
              <blockquote className="text-xl italic text-gray-800 mb-4">
                "I had given up on education, but thanks to Hopes for Communities, I was able to join secondary school and continue my studies. Now I have hope for my future and dreams of becoming a teacher to help other children like me."
              </blockquote>
              <p className="text-gray-600 font-semibold">— Student, Bar Union Secondary School</p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">2024 Impact Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
              <p className="text-gray-700">Children participated in education, mentorship, and faith-based programs</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="text-3xl font-bold text-orange-500 mb-2">30+</div>
              <p className="text-gray-700">Vulnerable children received direct financial assistance for school fees</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4">
              <div className="text-3xl font-bold text-teal-600 mb-2">70+</div>
              <p className="text-gray-700">Youth engaged in structured mentorship and counseling programs</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="text-3xl font-bold text-orange-500 mb-2">0%</div>
              <p className="text-gray-700">Dropout rate among sponsored students</p>
            </div>
          </div>
        </div>

        {/* Impact Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Journey
