'use client'

interface ProfileListProps {
  onFollow: (profile: Profile) => void
}

// socialApi é a instância de axios de services/api.ts, com
// baseURL 'http://localhost:3001' (o json-server; a 3000 é do Next).
function getProfileList() {
  return socialApi.get('/perfis').then((response) => response.data)
}

export function useProfileList() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['profileList'],
    queryFn: () => getProfileList()
  })

  return { profiles: data, isPending, isError }
}

export default function ProfileList({ onFollow }: ProfileListProps) {
  const { profiles, isPending, isError } = useProfileList()

  if (isPending) return <h5>Carregando...</h5>

  if (isError) return <h5>Ocorreu um erro ao carregar os perfis.</h5>

  if (!profiles) return <h5>Não há perfis para descobrir no momento.</h5>

  return (
    <>
      <h5 className='mb-3'>Pessoas para descobrir:</h5>

      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} onFollow={onFollow} />
        ))}
      </div>
    </>
  )
}
