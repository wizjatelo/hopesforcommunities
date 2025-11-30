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
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    const programs = [
      { icon: 'graduation-cap', title: 'Education', description: 'School fee sponsorships helping vulnerable children stay in school and build their future.' },
      { icon: 'heart-handshake', title: 'Mentorship & Counseling', description: 'One-on-one guidance and group counseling to support emotional and spiritual growth.' },
      { icon: 'wrench', title: 'Vocational Training', description: 'Skills training in carpentry, electrical work, tailoring, and agriculture for youth empowerment.' }
    ];

    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <StatsBar />
        
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-[var(--text-light)] max-w-2xl mx-auto">
                We transform lives through targeted programs that address education, personal development, and economic empowerment.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <ProgramCard key={index} {...program} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-[var(--primary-color)] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="icon-quote text-5xl mb-6 opacity-50"></div>
            <p className="text-2xl mb-6 italic">
              "Thanks to Hopes for Communities, I can now go to school and dream of becoming a teacher to help others like me."
            </p>
            <p className="text-lg opacity-90">— Grace, Student Beneficiary</p>
            <a href="impact.html" className="inline-block mt-8 btn-secondary">
              Read Success Stories
            </a>
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
