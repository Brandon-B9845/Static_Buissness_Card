//this is the footer with all social media links in it.

export default function Footer(){
    return(
        <div className="footer-container center">
            <h2 id="fb-btn" className="footer-btn ">
            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            </h2>
            <h2 id="ig-btn" className="footer-btn ">
            <a href="https://www.instagram.com/muffins12132145/" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
            </h2>
            <h2 id="li-btn" className="footer-btn ">
            <i class="fa-brands fa-linkedin"></i>
            </h2>
            <h2 id="git-btn" className="footer-btn ">
            <i class="fa-brands fa-github"></i>
            </h2>


        </div>
    )
}