export default function Error({ error }: { error: string }) {
  return (
    <div>
      <h1 className="text-center font-bold mt-4 ">{error}</h1>
    </div>
  );
}
