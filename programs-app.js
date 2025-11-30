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

function ProgramsApp() {
  try {
    const programs = [
      {
        icon: 'graduation-cap',
        title: 'School Fees Sponsorship',
        description: 'Providing targeted school fee support to families in economic hardship so children can stay in school.',
        details: 'We provide full or partial school fee sponsorships for primary and secondary students from vulnerable families. Support covers tuition, uniforms, books, and essential supplies. Students are selected based on need assessment and maintained through regular academic progress monitoring.',
        impact: 'Over the last year we supported 30+ students with school fees, helping them stay in school and continue their education.',
        cta: { text: 'Sponsor a Child', link: 'get-involved.html#sponsor' }
      },
      {
        icon: 'heart-handshake',
        title: 'Mentorship & Counseling',
        description: 'One-on-one guidance and group counseling to support emotional and spiritual growth.',
        details: 'Our mentorship program pairs vulnerable children with trained mentors who provide emotional support, life skills guidance, and spiritual counseling. Programs include weekly one-on-one sessions, group workshops, and family counseling services.',
        impact: '70+ participants engaged in regular mentorship activities, showing improved confidence and decision-making skills.',
        cta: { text: 'Learn More', link: 'get-involved.html#volunteer' }
      },
      {
        icon: 'book-open',
        title: 'Weekend & Holiday Bible Study',
        description: 'Spiritual education and character development through structured Bible study programs.',
        details: 'Regular weekend Bible study sessions and holiday programs that provide spiritual grounding, character development, and moral education. Programs are age-appropriate and include interactive learning, music, and community activities.',
        impact: 'Regular participation from 50+ children across different age groups, building strong faith foundations.',
        cta: { text: 'Get Involved', link: 'get-involved.html' }
      },
      {
        icon: 'wrench',
        title: 'Vocational & Skills Training',
        description: 'Skills training in carpentry, electrical work, tailoring, and agriculture for youth empowerment.',
        details: 'Practical vocational training programs designed to equip youth with marketable skills. Planned modules include electrical/solar installation, carpentry and woodworking, tailoring and fashion, and modern agriculture techniques. Training combines theoretical learning with hands-on practice.',
        impact: 'Program in development — targeting 50+ youth participants in the first year with job placement support.',
        cta: { text: 'Support This Program', link: 'get-involved.html' }
      },
      {
        icon: 'building-2',
        title: 'Educational Center Project',
        description: 'Building a dedicated educational center with classrooms, library, and vocational training facilities.',
        details: 'Our ambitious project to establish a comprehensive educational center that will provide centralized learning spaces, a well-stocked library, computer lab, and vocational training workshops. The center will serve as the hub for all our programs and expand our capacity to serve more children.',
        impact: 'Goals: Secure land, build 4 classrooms, establish library and computer lab, enroll first cohort of 100+ students.',
        cta: { text: 'Donate to This Project', link: 'get-involved.html' }
      }
    ];

    return (
      <div className="min-h-screen" data-name="programs-app" data-file="programs-app.js">
        <Header />
        
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-[var(--text-light)]">
              Comprehensive programs designed to transform lives through education, mentorship, and skills development.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {programs.map((program, index) => (
              <ProgramDetail key={index} {...program} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ProgramsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ProgramsApp />
  </ErrorBoundary>
);
