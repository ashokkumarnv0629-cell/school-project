import "../App.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Chaitanya Gurukula School — All rights reserved.</p>
        <p>Address: Santebennur, Karnataka</p>
      </div>
    </footer>
  );
};

export default Footer;
