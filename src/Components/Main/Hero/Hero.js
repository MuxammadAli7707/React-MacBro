import React from 'react';
import './Hero.css';


class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      price: 12497000,
      gb: 8,
      mem: 256,
      colr: 'Gold',
    };
  }

  increment = () => {
    this.setState({ count: this.state.count += 1 });
    this.setState({price: this.state.price + 12497000 })
  };

  Giga = () => {
    this.setState({gb: this.state.gb = 16})
  }

  Gigas = () => {
    this.setState({gb: this.state.gb = 8})
  }

  Mem = () => {
    this.setState({mem: this.state.mem = 512})
  }

  Mems = () => {
    this.setState({mem: this.state.mem = 256})
  }
  Silver = () => {
    this.setState({colr: this.state.colr = 'Silver'})
  }
  Golds = () => {
    this.setState({colr: this.state.colr = 'Gold'})
  }
  Gray = () => {
    this.setState({colr: this.state.colr = 'Gray'})
  }
  Decrement = () => {
    if(this.state.count == 1){
     this.setState({count: (this.state.count = 1)})
     this.setState({price: this.state.price = 12497000 * 2})
    }
    else{
      this.setState({count: (this.state.count - 1)})
    }
    this.setState({ price: this.state.price - 12497000 });
  };

  render() {
    return (
      <main>
        <section id="hero" className="hero mb-5">
      <div className="container">
        <div className="hero__main d-flex col-12">
          <div className="hero__imgsbox col-6">
            <div className="hero__image">
              <ul id="imgbox" className="hero__img-list d-flex list-unstyled">
                <li>
                  <img id="main-img" className="hero__imaging" src="https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2" alt="img" />
                </li>
                <li>
                  <img className="hero__imaging" src="https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da" alt="img" />
                </li>
                <li>
                  <img className="hero__imaging" src="https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1" alt="img" />
                </li>
                <li>
                  <img className="hero__imaging" src="https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad" alt="img" />
                </li>
                <li>
                  <img className="hero__imaging" src="https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3" alt="img" />
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end mb-4">
              
              <button className="hero__full" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className='bx bx-fullscreen'></i></button>
               
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                      <div className="modal-body d-flex flex-column align-items-center justify-content-center">
                        <div className="hero__image">
                          <ul id="imgboxing" className="hero__img-list d-flex list-unstyled">
                            <li>
                              <img id="main-img" className="hero__imaging" src="https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2" alt="img" />
                            </li>
                            <li>
                              <img className="hero__imaging" src="https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da" alt="img" />
                            </li>
                            <li>
                              <img className="hero__imaging" src="https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1" alt="img" />
                            </li>
                            <li>
                              <img className="hero__imaging" src="https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad" alt="img" />
                            </li>
                            <li>
                              <img className="hero__imaging" src="https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3" alt="img" />
                            </li>
                          </ul>
                        </div>
                        <ul id="lists" className="hero__imgs d-flex p-0 list-unstyled">
                          <button className="hero__slide slide">
                            <img className="slide__img" src="https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2" alt="img" />
                          </button>
                          <button className="hero__slide slide">
                            <img className="slide__img" src="https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da" alt="img" />
                          </button>
                          <button className="hero__slide slide">
                            <img className="slide__img" src="https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1" alt="img" />
                          </button>
                          <button className="hero__slide slide">
                            <img className="slide__img" src="https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad" alt="img" />
                          </button>
                          <button className="hero__slide slide">
                            <img className="slide__img" src="https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3" alt="img" />
                          </button>
                        </ul>
                      </div>
  
                      <div className="modal-header">
                        <button type="button" className="exit" data-bs-dismiss="modal" aria-label="Close"><i className='bx bx-exit-fullscreen'></i></button>
                      </div>
                    </div>
                  </div>
                </div>
  
            </div>
            <ul id="img-list" className="hero__imgs d-flex p-0 list-unstyled">
              <button className="hero__slide slide">
                <img className="slide__img aktive" src="https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2" alt="img" />
              </button>
              <button className="hero__slide slide">
                <img className="slide__img" src="https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da" alt="img" />
              </button>
              <button className="hero__slide slide">
                <img className="slide__img" src="https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1" alt="img" />
              </button>
              <button className="hero__slide slide">
                <img className="slide__img" src="https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad" alt="img" />
              </button>
              <button className="hero__slide slide">
                <img className="slide__img" src="https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3" alt="img" />
              </button> 
            </ul>
          </div>
  
          <div className="hero__inner col-6">
            <div className="d-flex">
              <h1 id="title" className="hero__title">MacBook Air 13-inch M1/<span id="eight">{this.state.gb}</span>/<span id="memory">{this.state.mem} </span><span id="colr">{this.state.colr}</span></h1>
              <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
            <div className="hero__desc">
              <div className="hero__rams">
                <span className="hero__ram ram">Ram</span>
                <ul id="ram-box" className="hero__rams-btns d-flex p-0 list-unstyled">
                  <button id="ram-eight" className="ram__btn active" onClick={() => this.Gigas()}>8gb</button>
                  <button id="ram-sixth" className="ram__btn" onClick={() => this.Giga()}>16gb</button>
                </ul>
              </div>
  
              <div className="hero__memory">
                <span className="hero__ram ram">Xotira Hajmi</span>
                <ul id="memory-box" className="hero__rams-btns d-flex list-unstyled p-0">
                  <button id="memory-first" className="ram__btn active" onClick={() => this.Mems()}>256gb</button>
                  <button id="memory-second" className="ram__btn" onClick={() => this.Mem()}>512gb</button>
                  <button id="memory-third" className="ram__btn">1tb</button>
                </ul>
              </div>
  
              <div className="hero__color">
                <span className="hero__ram ram">Colors</span>
                <div id="color-list" className="hero__colors d-flex mb-4">
                  <button id="gold" className="hero__circle active d-flex flex-column text-center" onClick={() => this.Golds()}>
                    <span className="golds"></span>
                    gold color
                  </button>
                  <button id="silver" className="hero__circle d-flex flex-column text-center" onClick={() => this.Silver()}>
                    <span className="silvers"></span>
                    silver color
                  </button>
                </div>
                <div className="mb-4">
                  <button id="gray" className="hero__circle d-flex flex-column text-center" onClick={() => this.Gray()}>
                    <span className="grays"></span>
                    spacegray color
                  </button>
                </div>
              </div>
  
              <div className="hero__add add d-flex mb-4">
                <button id="minus" className="add__btn left"  onClick={() => this.Decrement() }>-</button>
                <p className="add__input d-flex align-items-center justify-content-center">{this.state.count}</p>
                <button id="plus" className="add__btn right" onClick={() => this.increment() }>+</button>
              </div>
  
              <div className="hero__price price mb-4">
                <h6 id="price" className="price__title">{this.state.price} so'm</h6>
                <span className="price__old">14 621 000 so'm</span>
              </div>
  
              <div className="hero__btns box d-flex flex-column">
                <button className="box__btn">Savatchaga qo'shish</button>
                <button className="box__next">Taqqoslash</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
    );
  }
}

export default Hero;
