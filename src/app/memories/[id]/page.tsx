export default function BlogDetails({ params }: any) {
  const { id } = params;

  return (
    <div className="p-8">
      <h1>Detalhes da página {id} </h1>
    </div>
  );
}
