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

function AboutApp() {
  try {
    const values = [
      { icon: 'cross', title: 'Faith', description: 'Rooted in Christian values and spiritual guidance' },
      { icon: 'shield-check', title: 'Integrity', description: 'Transparent and accountable in all we do' },
      { icon: 'heart', title: 'Compassion', description: 'Serving with empathy and unconditional love' },
      { icon: 'leaf', title: 'Sustainability', description: 'Building lasting change in communities' }
    ];

    return (
      <div className="min-h-screen" data-name="about-app" data-file="about-app.js">
        <Header />
        
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
            <p className="text-xl text-[var(--text-light)] text-center mb-12">
              Hopes for Communities is a faith-based community organization dedicated to giving vulnerable children access to education, mentorship, and vocational skills.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-[var(--primary-color)] text-white p-8 rounded-xl">
              <div className="icon-target text-4xl mb-4"></div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">To transform lives through education, mentorship, and spiritual growth.</p>
            </div>
            <div className="bg-[var(--secondary-color)] text-[var(--text-dark)] p-8 rounded-xl">
              <div className="icon-eye text-4xl mb-4"></div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg">A future where every child has access to education and hope.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--secondary-color)] flex items-center justify-center mx-auto mb-4">
                    <div className={`icon-${value.icon} text-2xl text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-[var(--text-light)]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Reach</h2>
            <p className="text-lg text-[var(--text-light)] mb-6 leading-relaxed">
              Hopes for Communities works in partnership with local schools and churches to deliver transformative programs. Our key partnerships include:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <div className="icon-check text-[var(--primary-color)] mr-3 mt-1"></div>
                <span>Wachara Primary School</span>
              </li>
              <li className="flex items-start">
                <div className="icon-check text-[var(--primary-color)] mr-3 mt-1"></div>
                <span>Bar Union Secondary School</span>
              </li>
              <li className="flex items-start">
                <div className="icon-check text-[var(--primary-color)] mr-3 mt-1"></div>
                <span>Winners' Chapel International – Nyahera</span>
              </li>
              <li className="flex items-start">
                <div className="icon-check text-[var(--primary-color)] mr-3 mt-1"></div>
                <span>AIC (Africa Inland Church)</span>
              </li>
            </ul>
            
            <div className="mt-12 bg-[var(--primary-color)] text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Download Our Annual Report</h3>
              <p className="mb-6">Learn more about our impact, programs, and financial transparency.</p>
              <button className="btn-secondary">
                <div className="flex items-center justify-center">
                  <div className="icon-download mr-2"></div>
                  Download Report
                </div>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <AboutApp />
  </ErrorBoundary>
);
