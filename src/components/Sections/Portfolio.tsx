const Portfolio = () => {
  return (
    <section id="projects" className="py-20 bg-black text-gold">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-dark-grey p-6 rounded">
            <h3 className="text-2xl mb-4">Project Title</h3>
            <p>
              Project description goes here. Briefly describe the project,
              technologies used, and any notable features.
            </p>
          </div>
          {/* Project 2 */}
          <div className="bg-dark-grey p-6 rounded">
            <h3 className="text-2xl mb-4">Project Title</h3>
            <p>
              Project description goes here. Briefly describe the project,
              technologies used, and any notable features.
            </p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
