import React from "react";

const Footer = () =>
{
    let year = new Date().getFullYear();
    return(
        <footer className="Footer">
            <h4>Copyright &copy; {year} </h4>
        </footer>

    )    

}

export default Footer;
