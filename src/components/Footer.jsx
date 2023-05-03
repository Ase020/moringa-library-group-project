const Footer = () => {
   let now = new Date();
   const year = now.getFullYear();
   return (
      <div className="footer">
         <h5>Moringa Library ©️ All Rights Reserved</h5>
         <span>
            Made with <b>❤️</b>
         </span>
         <span>{year}</span>
      </div>
   );
};

export default Footer;
