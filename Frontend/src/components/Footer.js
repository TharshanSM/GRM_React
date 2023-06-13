function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="copyright">
                    © Copyright
                    <strong>
                        <span>
                            <a href="https://www.novacura.com/"> Novacura AB</a>
                        </span>
                    </strong>
                    .
                </div>
            </footer>
            <a
                href="http://localhost:3000/index.html"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short" />
            </a>
        </>
    );
}

export default Footer;
