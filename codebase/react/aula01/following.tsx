'use client'

export default function Following() {
  const formatFollowers = (followers: number): string =>
    followers.toLocaleString('pt-BR')

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
            <div className='row card-body'>
              <h5 className='card-title mb-4 fw-light'>Pessoas que você segue</h5>
              <div className='table-responsive'>
                <table className='table '>
                  <thead>
                    <tr>
                      <th>Pessoa</th>
                      <th>Usuário</th>
                      <th>Seguidores</th>
                      <th>Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key='ana-souza'>
                      <td>Ana Souza</td>
                      <td className='text-secondary'>@anasouza</td>
                      <td>{formatFollowers(1240)}</td>
                      <td>
                        <button className='btn btn-danger btn-sm'>
                          Deixar de seguir
                        </button>
                      </td>
                    </tr>

                    <tr key='marina-castro'>
                      <td>Marina Castro</td>
                      <td className='text-secondary'>@marinacastro</td>
                      <td>{formatFollowers(8930)}</td>
                      <td>
                        <button className='btn btn-danger btn-sm'>
                          Deixar de seguir
                        </button>
                      </td>
                    </tr>

                    <tr key='carla-mendes'>
                      <td>Carla Mendes</td>
                      <td className='text-secondary'>@carlamendes</td>
                      <td>{formatFollowers(2470)}</td>
                      <td>
                        <button className='btn btn-danger btn-sm'>
                          Deixar de seguir
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='card mb-4'>
            <div className='card-body'>
              <h5 className='card-title mb-4 fw-light'>Resumo</h5>
              <p className='card-text fw-medium'>Seguindo: 3</p>
              <p className='card-text fw-medium'>
                Alcance total: {(12640).toLocaleString('pt-BR')} pessoas
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
