function Footer() {
  try {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for subscribing! You will receive updates from Hopes for Communities.');
      setEmail('');
    };

    return (
      <footer className="bg-gray-900 text-white py-12 px-4" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Hopes for Communities</h3>
              <p className="text-gray-400 text-sm">
                Transforming lives through education, mentorship, and spiritual growth.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="about.html" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="programs.html" className="text-gray-400 hover:text-white">Programs</a></li>
                <li><a href="impact.html" className="text-gray-400 hover:text-white">Impact</a></li>
                <li><a href="contact.html" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Get Involved</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="get-involved.html" className="text-gray-400 hover:text-white">Donate</a></li>
                <li><a href="get-involved.html#sponsor" className="text-gray-400 hover:text-white">Sponsor a Child</a></li>
                <li><a href="get-involved.html#volunteer" className="text-gray-400 hover:text-white">Volunteer</a></li>
                <li><a href="partners.html" className="text-gray-400 hover:text-white">Partner With Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <form onSubmit={handleSubmit} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-3 py-2 rounded bg-gray-800 text-white text-sm"
                />
                <button type="submit" className="w-full btn-secondary text-sm">Subscribe</button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Hopes for Communities. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="legal.html" className="hover:text-white">Privacy Policy</a>
              <a href="legal.html#terms" className="hover:text-white">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
