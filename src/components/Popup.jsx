import { useEffect } from "react";
import { motion } from "framer-motion";
const Popup = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';    
    const style = document.createElement('style');
    style.innerHTML = `
        .popup-content::-webkit-scrollbar {
            display: none;
        }
        .popup-content {
            scrollbar-width: none; /* For Firefox */
        }
        .popup-content {
            -ms-overflow-style: none; /* For Internet Explorer and Edge */
        }
    `;
    document.head.appendChild(style);
        return () => {
      document.body.style.overflow = 'auto';
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85}}
      transition={{ duration: 0.4 }}
      className="relative bg-slate-900 p-4 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] m-3 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white p-2 font-semibold z-10"
        >
          X
        </button>
        <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
        <div className="flex-1 overflow-y-auto popup-content">
          {project.images.map((image, index) => (
            <div key={index} className="w-full bg-gray-800 rounded-lg shadow-lg mb-2">
              <img
                src={image}
                alt={`Project screenshot ${index + 1}`}
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Popup;
