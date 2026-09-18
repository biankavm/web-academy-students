'use client'
import Image from 'next/image'

export default function Products() {
  return (
    <>
      <nav className='navbar navbar-expand-md bg-body border-bottom sticky-top'>
        <div className='container-fluid'>
          <a className='navbar-brand fw-bold' href='/'>
            WA Loja
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Abrir menu'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav me-auto mb-2 mb-md-0'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Início
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/cart'>
                  Carrinho
                </a>
              </li>
            </ul>

            <button className='btn btn-primary rounded-3'>Sair</button>
          </div>
        </div>
      </nav>

      <main>
        <div className='container p-5'>
          <div className='card mb-4 border-0 shadow-sm rounded-4'>
            <div className='card-body'>
              <h5 className='card-title mb-4 fw-semibold'>Resumo do Carrinho</h5>
              <p className='card-text fw-medium'>Quantidade total: 3</p>
              <p className='card-text fw-medium'>
                Valor total: R${(1350).toFixed(2)}
              </p>
            </div>
          </div>

          <h5 className='mb-3'>Produtos disponíveis:</h5>

          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
            <div className='col'>
              <div className='card h-100 border-0 shadow-sm rounded-4'>
                <Image
                  src='/placeholder.png'
                  className='card-img-top rounded-top-4 bg-body-tertiary p-2 object-fit-contain'
                  alt='imagem placeholder'
                  width={300}
                  height={320}
                />
                <div className='card-body d-flex flex-column'>
                  <h6 className='card-title fw-semibold mb-1'>Notebook Pro</h6>
                  <p className='fs-5 fw-bold mb-3'>R$ 5499</p>
                  <button className='btn btn-primary d-block w-100 mt-auto rounded-3' type='button'>
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 border-0 shadow-sm rounded-4'>
                <Image
                  src='/placeholder.png'
                  className='card-img-top rounded-top-4 bg-body-tertiary p-2 object-fit-contain'
                  alt='imagem placeholder'
                  width={300}
                  height={320}
                />
                <div className='card-body d-flex flex-column'>
                  <h6 className='card-title fw-semibold mb-1'>Smartphone Premium</h6>
                  <p className='fs-5 fw-bold mb-3'>R$ 4399</p>
                  <button className='btn btn-primary d-block w-100 mt-auto rounded-3' type='button'>
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 border-0 shadow-sm rounded-4'>
                <Image
                  src='/placeholder.png'
                  className='card-img-top rounded-top-4 bg-body-tertiary p-2 object-fit-contain'
                  alt='imagem placeholder'
                  width={300}
                  height={320}
                />
                <div className='card-body d-flex flex-column'>
                  <h6 className='card-title fw-semibold mb-1'>Smartwatch Sport</h6>
                  <p className='fs-5 fw-bold mb-3'>R$ 1899</p>
                  <button className='btn btn-primary d-block w-100 mt-auto rounded-3' type='button'>
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card h-100 border-0 shadow-sm rounded-4'>
                <Image
                  src='/placeholder.png'
                  className='card-img-top rounded-top-4 bg-body-tertiary p-2 object-fit-contain'
                  alt='imagem placeholder'
                  width={300}
                  height={320}
                />
                <div className='card-body d-flex flex-column'>
                  <h6 className='card-title fw-semibold mb-1'>Fone Bluetooth ANC</h6>
                  <p className='fs-5 fw-bold mb-3'>R$ 999</p>
                  <button className='btn btn-primary d-block w-100 mt-auto rounded-3' type='button'>
                    Adicionar no carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
