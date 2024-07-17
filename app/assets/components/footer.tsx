// Footer.js
import "../styles/footer.css"; // Si tu veux ajouter du CSS personnalisé

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <p className="title-box-item">Navigation</p>
          <a href="/terms">Home</a>
          <a href="/privacy">Access</a>
          <a href="/contact">Documentation</a>
        </div>
        <div className="footer-links">
          <p className="title-box-item">La Plateforme</p>
          <a href="https://laplateforme.io/">Accueil</a>
          <a href="https://laplateforme.io/qui-sommes-nous/">Qui sommes-nous ?</a>
          <a href="https://laplateforme.io/telechargement-brochure/">Notre brochure</a>
          <a href="https://laplateforme.io/lls-parlent-de-nous/">Il parlent de nous</a>
          <a href="https://students-laplateforme.io/">Annuaire des Plateformeurs</a>
          <a href="https://laplateforme.io/entreprise/taxe-apprentissage/">Taxes d'apprentissage</a>
        </div>
        <div className="footer-links">
          <p className="title-box-item">A propos</p>
          <p className="contact">8 rue d’hozier, 13002 Marseille</p>
          <p className="contact">Tel : 04.84.89.43.69</p>
          <a href="/terms">Conditions d'utilisation</a>
          <a href="/privacy">Politique de confidentialité</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="box-img">
          <img className="img" src="./assets/images/logos/Plateforme.png" alt="logo plateforme" />
          <div className="box-icon">
            <img
              className="icon-social"
              src="../assets/images/logos/instagram.svg"
              alt="logo instragram"
            />
            <img
              className="icon-social"
              src="../assets/images/logos/facebook.svg"
              alt="logo instragram"
            />
            <img
              className="icon-social"
              src="../assets/images/logos/linkedin.svg"
              alt="logo instragram"
            />
            <img
              className="icon-social"
              src="../assets/images/logos/tiktok.svg"
              alt="logo instragram"
            />
            <img
              className="icon-social"
              src="../assets/images/logos/whatsapp.svg"
              alt="logo instragram"
            />
            <img
              className="icon-social"
              src="../assets/images/logos/x-twitter.svg"
              alt="logo instragram"
            />
          </div>
        </div>
      </div>

      <p>&copy; 2024 jpo-connect. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
