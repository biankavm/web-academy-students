'use client'
import Image from 'next/image'

export default function Profiles() {
  return (
    <>
      <nav className='navbar navbar-expand-md bg-light border-bottom border-body sticky-top'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            WA Social
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
                  Descobrir
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/following'>
                  Seguindo
                </a>
              </li>
            </ul>

            <button className='btn btn-dark'>Sair</button>
          </div>
        </div>
      </nav>

      <main>
        <div className='container p-5'>
          <div className='card mb-4'>
            <div className='card-body'>
              <h5 className='card-title mb-4 fw-light'>Resumo</h5>
              <p className='card-text fw-medium'>Seguindo: 3</p>
              <p className='card-text fw-medium'>
                Alcance total: {(15290).toLocaleString('pt-BR')} pessoas
              </p>
            </div>
          </div>

          <h5 className='mb-3'>Pessoas para descobrir:</h5>

          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
            <div className='col'>
              <div className='card shadow-sm h-100 text-center'>
                <div className='card-body d-flex flex-column align-items-center'>
                  <Image
                    className='rounded-circle border mb-3'
                    src='https://api.dicebear.com/9.x/avataaars/png?seed=ana-souza&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
                    alt='avatar de Ana Souza'
                    width={96}
                    height={96}
                  />
                  <h5 className='card-title mb-1'>Ana Souza</h5>
                  <p className='text-secondary small mb-2'>@anasouza</p>
                  <p className='card-text small mb-3'>
                    {(1240).toLocaleString('pt-BR')} seguidores
                  </p>
                  <button
                    className='btn btn-dark d-block w-100 mt-auto'
                    type='button'
                  >
                    Seguir
                  </button>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card shadow-sm h-100 text-center'>
                <div className='card-body d-flex flex-column align-items-center'>
                  <Image
                    className='rounded-circle border mb-3'
                    src='https://api.dicebear.com/9.x/avataaars/png?seed=joao-lima&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
                    alt='avatar de João Lima'
                    width={96}
                    height={96}
                  />
                  <h5 className='card-title mb-1'>João Lima</h5>
                  <p className='text-secondary small mb-2'>@joaolima</p>
                  <p className='card-text small mb-3'>
                    {(358).toLocaleString('pt-BR')} seguidores
                  </p>
                  <button
                    className='btn btn-dark d-block w-100 mt-auto'
                    type='button'
                  >
                    Seguir
                  </button>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card shadow-sm h-100 text-center'>
                <div className='card-body d-flex flex-column align-items-center'>
                  <Image
                    className='rounded-circle border mb-3'
                    src='https://api.dicebear.com/9.x/avataaars/png?seed=marina-castro&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
                    alt='avatar de Marina Castro'
                    width={96}
                    height={96}
                  />
                  <h5 className='card-title mb-1'>Marina Castro</h5>
                  <p className='text-secondary small mb-2'>@marinacastro</p>
                  <p className='card-text small mb-3'>
                    {(8930).toLocaleString('pt-BR')} seguidores
                  </p>
                  <button
                    className='btn btn-dark d-block w-100 mt-auto'
                    type='button'
                  >
                    Seguir
                  </button>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card shadow-sm h-100 text-center'>
                <div className='card-body d-flex flex-column align-items-center'>
                  <Image
                    className='rounded-circle border mb-3'
                    src='https://api.dicebear.com/9.x/avataaars/png?seed=pedro-alves&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf'
                    alt='avatar de Pedro Alves'
                    width={96}
                    height={96}
                  />
                  <h5 className='card-title mb-1'>Pedro Alves</h5>
                  <p className='text-secondary small mb-2'>@pedroalves</p>
                  <p className='card-text small mb-3'>
                    {(612).toLocaleString('pt-BR')} seguidores
                  </p>
                  <button
                    className='btn btn-dark d-block w-100 mt-auto'
                    type='button'
                  >
                    Seguir
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
