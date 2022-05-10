import './Product.css';

import React from 'react';


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
      <section id="product" className="product">
        <div className="product__inner text-center">
          <h3 className="product__title">O'xshash mahsulotlar</h3>
        </div>
        <div>
          <button id="left" className="lefting ikon"><i className='bx bx-chevron-left'></i></button>
          <button id="right" className="righting ikon"><i className='bx bx-chevron-right' ></i></button>
        </div>
        <ul id="product-list" className="product__list d-flex list-unstyled p-0 m-0">
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/ad319481-63dc-4bc2-bf4d-7a6c7aec02f5" alt="img" />
              <h3 className="product__name">MacBook Pro 13" (with M1)</h3>
              <span className="product__price">14 949 500  so'm</span>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/68a37b19-71f9-4342-addb-eae078edf11e" alt="img" />
              <h3 className="product__name">MacBook Air 13" (with Intel)</h3>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/98128be6-9be6-4691-a236-ea092158ed2a" alt="img" />
              <h3 className="product__name">MacBook Pro 13-inch (with Intel)</h3>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/6d8aecc6-0e5e-40b5-b33d-3d9774f4208d" alt="img" />
              <h3 className="product__name">MacBook Pro 16-inch</h3>
              <span className="product__price">25 694 000  so'm</span>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/c9ad4d28-1980-4eaf-8b38-8007adcdf12e" alt="img" />
              <h3 className="product__name">Mac mini</h3>
              <span className="product__price">9 110 000  so'm</span>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/955623b2-fcab-4ff4-9b70-459ef3c8e905" alt="img" />
              <h3 className="product__name">iMac 24</h3>
              <span className="product__price">19 270 500  so'm</span>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/46c341eb-d0ca-448a-a547-f6f45d6ba95a" alt="img" />
              <h3 className="product__name">iMac 27</h3>
              <span className="product__price">22 190 500  so'm</span>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/0dafb741-6d31-43d6-b824-0b1ba4422271" alt="img" />
              <h3 className="product__name">MacBook Pro 14-inch</h3>
              <span className="product__price">23 358 000  so'm</span>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/b9c18548-4286-4fd8-91ce-d89903f46e64" alt="img" />
              <h3 className="product__name">MacBook Pro 16-inch</h3>
              <span className="product__price">28 614 000  so'm</span>
            </a>
          </li>
          <li className="product__item">
            <a className="product__link text-decoration-none" href="#">
              <img className="product__img" src="https://cdn.macbro.uz/macbro/df7ae0bb-ff0d-40b0-8fe8-d52c4a38d884" alt="img" />
              <h3 className="product__name">iMac 21</h3>
            </a>
          </li>
        </ul>
      </section>
    </div>
    );
  }
}

export default Product;
