import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Popup from "./Popup";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0 }}
              className="w-full lg:w-1/4"
            >
              <a onClick={() => handleImageClick(project)} className="cursor-pointer">
                <img
                  src={project.image}
                  style={{
                    width: '250px',
                    height: '175px',
                    objectFit: 'cover', /* Ensures the image covers the box */
                    borderRadius: '0.5rem', /* Optional: Rounded corners */
                  }}
                  className="mb-2 text-sm rounded-lg"
                  alt={project.title}
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0 }}
              className="w-full lg:w-3/4 max-w-xl ms-2"
            >
              <h6 className="mb-2 font-semibold">
                {project.title} -{" "}
              </h6>
              <p className="text-sm mb-4 text-neutral-400" dangerouslySetInnerHTML={{ __html: project.description }} />
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium rounded bg-neutral-800 px-2 py-1 text-yellow-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Popup project={selectedProject} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Projects;
