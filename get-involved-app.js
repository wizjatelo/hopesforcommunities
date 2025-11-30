class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function GetInvolvedApp() {
  try {
    const [activeTab, setActiveTab] = React.useState('donate');
    const [donationForm, setDonationForm] = React.useState({
      amount: '',
      frequency: 'one-time',
      name: '',
      email: '',
      phone: '',
      paymentMethod: 'stripe'
    });

    const [sponsorForm, setSponsorForm] = React.useState({
      name: '',
      email: '',
      phone: '',
      frequency: 'monthly',
      childAge: 'any'
    });

    const [volunteerForm, setVolunteerForm] = React.useState({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: ''
    });

    const handleDonationSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your donation! You will receive a confirmation email shortly.');
    };

    const handleSponsorSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for choosing to sponsor a child! We will contact you with child profile details.');
    };

    const handleVolunteerSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your interest in volunteering! We will review your application and contact you soon.');
    };

    React.useEffect(() => {
      const hash = window.location.hash.substring(1);
      if (hash === 'sponsor' || hash === 'volunteer') {
        setActiveTab(hash);
      }
    }, []);

    return (
      <div className="min-h-screen" data-name="get-involved-app" data-file="get-involved-app.js">
        <Header />
        
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-[var(--text-light)]">
              Your support transforms lives. Choose how you'd like to make a difference.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-8 border-b">
              <button
                onClick={() => setActiveTab('donate')}
                className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'donate' ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--text-light)]'}`}
              >
                Donate
              </button>
              <button
                onClick={() => setActiveTab('sponsor')}
                className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'sponsor' ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--text-light)]'}`}
                id="sponsor"
              >
                Sponsor a Child
              </button>
              <button
                onClick={() => setActiveTab('volunteer')}
                className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'volunteer' ? 'text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]' : 'text-[var(--text-light)]'}`}
                id="volunteer"
              >
                Volunteer
              </button>
            </div>

            {activeTab === 'donate' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Make a Donation</h2>
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Donation Amount</label>
                    <input
                      type="number"
                      value={donationForm.amount}
                      onChange={(e) => setDonationForm({...donationForm, amount: e.target.value})}
                      placeholder="Enter amount"
                      required
                      className="w-full px-4 py-3 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Frequency</label>
                    <select
                      value={donationForm.frequency}
                      onChange={(e) => setDonationForm({...donationForm, frequency: e.target.value})}
                      className="w-full px-4 py-3 border rounded-lg"
                    >
                      <option value="one-time">One-time</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={donationForm.name}
                      onChange={(e) => setDonationForm({...donationForm, name: e.target.value})}
                      placeholder="Full Name"
                      required
                      className="px-4 py-3 border rounded-lg"
                    />
                    <input
                      type="email"
                      value={donationForm.email}
                      onChange={(e) => setDonationForm({...donationForm, email: e.target.value})}
                      placeholder="Email"
                      required
                      className="px-4 py-3 border rounded-lg"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary text-lg">Complete Donation</button>
                </form>
              </div>
            )}

            {activeTab === 'sponsor' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Sponsor a Child</h2>
                <p className="text-[var(--text-light)] mb-6">
                  Provide consistent support for a child's education and well-being through monthly sponsorship.
                </p>
                <form onSubmit={handleSponsorSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={sponsorForm.name}
                      onChange={(e) => setSponsorForm({...sponsorForm, name: e.target.value})}
                      placeholder="Full Name"
                      required
                      className="px-4 py-3 border rounded-lg"
                    />
                    <input
                      type="email"
                      value={sponsorForm.email}
                      onChange={(e) => setSponsorForm({...sponsorForm, email: e.target.value})}
                      placeholder="Email"
                      required
                      className="px-4 py-3 border rounded-lg"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary text-lg">Start Sponsorship</button>
                </form>
              </div>
            )}

            {activeTab === 'volunteer' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Volunteer With Us</h2>
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                      placeholder="Full Name"
                      required
                      className="px-4 py-3 border rounded-lg"
                    />
                    <input
                      type="email"
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                      placeholder="Email"
                      required
                      className="px-4 py-3 border rounded-lg"
                    />
                  </div>
                  <textarea
                    value={volunteerForm.skills}
                    onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                    placeholder="Your skills and experience"
                    rows="4"
                    className="w-full px-4 py-3 border rounded-lg"
                  ></textarea>
                  <button type="submit" className="w-full btn-primary text-lg">Submit Application</button>
                </form>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('GetInvolvedApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <GetInvolvedApp />
  </ErrorBoundary>
);
