interface ProductListProps {
  addOnCart: (product: Product) => void
}

function getProductList() {
  return api.get('/produto').then((response) => response.data)
}

export function useProductList() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['productList'],
    queryFn: () => getProductList()
  })

  return { products: data, isPending, isError }
}

export default function ProductList({ addOnCart }: ProductListProps) {
  const { products, isPending, isError } = useProductList()

  if (isPending) return <h5>Carregando...</h5>

  if (isError) return <h5>Ocorreu um erro ao carregar os produtos.</h5>

  if (!products) return <h5>Não há produtos disponíveis no momento.</h5>

  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addOnCart={addOnCart}
          />
        ))}
      </div>
    </>
  )
}
