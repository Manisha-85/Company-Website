import { motion } from 'framer-motion';

const logos = [
    "./logos/lodha.jpeg",
    "./logos/insignia.webp",
    "./logos/logo 10.jpeg",
    "./logos/logo 12.png",
    "./logos/logo5.jpeg",
    "./logos/vts.jpeg",
    "./logos/vtp.jpeg",
    "./logos/vigo.png",
    "./logos/viara.webp",
    "./logos/saraha.png",
    "./logos/pair services.png",
    "./logos/manasis.jpeg",
  

   
];

const ClientsSection = () => {
  return (
    <div className="clients-section">
      <h2>Clients</h2>
      <p>
        We are proud to collaborate with leading organizations in the industry,
        driving innovation and excellence in every project.
      </p>

      <motion.div
        className="moving-logos"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <div className="logos-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt={`client-logo-${index}`} className="logo-img" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ClientsSection;