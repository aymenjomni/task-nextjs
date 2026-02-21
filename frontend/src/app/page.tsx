export default async function Home() {
  // On utilise le nom du service Docker "backend" défini dans docker-compose.yml
  // Le port interne du backend est 8080
  let data = "Pas de réponse du backend";
  try {
    const res = await fetch('http://backend:8080/weatherforecast', { cache: 'no-store' });
    if (res.ok) {
      data = await res.text();
    } else {
      data = `Erreur Backend: ${res.status}`;
    }
  } catch (e) {
    data = "Le backend est injoignable via le réseau interne.";
  }

  return (
    <main style={{ padding: 50 }}>
      <h1>Test d'Architecture Microservices</h1>
      <h2>Réponse du Backend .NET :</h2>
      <pre style={{ background: '#f0f0f0', padding: 20 }}>
        {data}
      </pre>
    </main>
  );
}
