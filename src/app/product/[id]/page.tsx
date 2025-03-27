export default function Product({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Produto {JSON.stringify(params)}</h1>
    </div>
  );
}
