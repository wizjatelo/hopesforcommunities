function ProgramDetail({ icon, title, description, details, impact, cta }) {
  try {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-name="program-detail" data-file="components/ProgramDetail.js">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-14 h-14 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center flex-shrink-0">
                <div className={`icon-${icon} text-2xl text-[var(--primary-color)]`}></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-[var(--text-light)]">{description}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className={`icon-chevron-${isExpanded ? 'up' : 'down'} text-xl text-[var(--text-light)]`}></div>
            </button>
          </div>

          {isExpanded && (
            <div className="mt-6 pt-6 border-t space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Program Details</h4>
                <p className="text-[var(--text-light)]">{details}</p>
              </div>
              {impact && (
                <div>
                  <h4 className="font-semibold text-lg mb-2">Impact</h4>
                  <p className="text-[var(--text-light)]">{impact}</p>
                </div>
              )}
              <div className="pt-4">
                <a href={cta.link} className="btn-primary">{cta.text}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProgramDetail component error:', error);
    return null;
  }
}
