// app/not-found.tsx
export default function NotFound() {
  return (
    <section className="flex min-h-full items-center justify-center p-8 text-center">
      <div>
        <h1 className="text-5xl font-bold mb-3">Oups, page introuvable</h1>
        <p>
          La page que vous cherchez a changé d’adresse ou n’existe pas.
        </p>
      </div>
    </section>
  );
}
