import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
    <div className="container">
      <div className="footer__inner d-flex justify-content-between mb-4">
        <ul className="footer__list list-unstyled p-0">
          <h4 className="footer__title">Sotib ol</h4>
          <li className="footer__item">
            <a className="footer__link text-decoration-none" href="#">Mac</a>
          </li>
          <li className="footer__item">
            <a  className="footer__link text-decoration-none" href="#">iPad</a>
          </li>
          <li className="footer__item">
            <a  className="footer__link text-decoration-none" href="#">iPhone</a>
          </li>
        </ul>
        <ul className="footer__list list-unstyled p-0">
          <h4 className="footer__title">Kompaniya</h4>
          <li className="footer__item">
            <a className="footer__link text-decoration-none" href="#">Yangiliklar</a>
          </li>
          <li className="footer__item">
            <a  className="footer__link text-decoration-none" href="#">Kompaniya haqida</a>
          </li>
          <li className="footer__item">
            <a  className="footer__link text-decoration-none" href="#">Do'kon manzillari</a>
          </li>
          <li className="footer__item">
            <a  className="footer__link text-decoration-none" href="#">Biznes uchun</a>
          </li>
        </ul>
        <ul className="footer__list list-unstyled p-0">
          <h4 className="footer__title">Ma'lumot</h4>
          <li className="footer__item">
            <a className="footer__link text-decoration-none" href="#">Muddatli to'lov</a>
          </li>
          <li className="footer__item">
            <a  className="footer__link text-decoration-none" href="#">Yetkazib berish</a>
          </li>
          <li className="footer__item">
            <a  className="footer__link text-decoration-none" href="#">Aloqa</a>
          </li>
        </ul>
        <ul className="footer__list list-unstyled p-0">
          <h4 className="footer__title">Biz bilan bog'laning</h4>
          <div className="d-flex align-items-center">
            <li className="footer__item">
              <a className="footer__link text-decoration-none" href="#"><i className='bx bxl-facebook-square icons' ></i></a>
            </li>
            <li className="footer__item">
              <a  className="footer__link text-decoration-none" href="#"><i className='bx bxl-instagram icons' ></i></a>
            </li>
            <li className="footer__item">
              <a  className="footer__link text-decoration-none" href="#"><i className='bx bxl-telegram icons' ></i></a>
            </li>
            <li className="footer__item">
              <a  className="footer__link text-decoration-none" href="#"><i className='bx bxl-youtube icons' ></i></a>
            </li>
            <li className="footer__item">
              <a  className="footer__link text-decoration-none" href="#"><i className='bx bxl-tiktok icons' ></i></a>
            </li>
          </div>
          <span>+998 78 777 20 20</span>
        </ul>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p>Onlayn do'kon MacBro.uz. Barcha huquqlar himoyalangan.</p>
        <span>Developed by <a href="#" className="text-decoration-none">Udevs</a></span>
      </div>
    </div>
  </footer>
  );
};


export default Footer;