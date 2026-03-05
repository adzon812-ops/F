export default function ObjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Объект #{params.id}</h1>
        <p className="text-gray-500">Детальная страница в разработке</p>
      </div>
    </div>
  )
}
