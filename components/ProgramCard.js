function ProgramCard({ icon, title, description }) {
  try {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow" data-name="program-card" data-file="components/ProgramCard.js">
        <div className="w-16 h-16 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center mb-4">
          <div className={`icon-${icon} text-3xl text-[var(--primary-color)]`}></div>
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-[var(--text-light)] leading-relaxed">{description}</p>
      </div>
    );
  } catch (error) {
    console.error('ProgramCard component error:', error);
    return null;
  }
}
