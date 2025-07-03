export default function Home() {
  return (
    <div className="p-6">
      <section className="text-center mt-10">
        <h2 className="text-4xl font-semibold mb-4">
          Fotografia profissional em Goiânia
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          Casamentos, ensaios, eventos, retratos e muito mais. Qualidade e
          paixão em cada clique.
        </p>
        <a
          href="https://wa.me/5562987654321?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700"
        >
          Agendar pelo WhatsApp
        </a>
      </section>

      <section className="my-16">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Serviços oferecidos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            "Casamentos",
            "Ensaios Individuais",
            "Eventos",
            "Retratos Profissionais",
            "Corporativo",
          ].map((servico, idx) => (
            <div key={idx} className="bg-white p-6 shadow-md rounded-2xl">
              <h4 className="text-lg font-semibold mb-2">{servico}</h4>
              <p className="text-sm text-gray-600 mb-4">
                Fotografia com qualidade profissional, adaptada ao seu momento.
              </p>
              <a
                href="https://wa.me/5562987654321?text=Olá!%20Quero%20agendar%20um%20ensaio%20fotográfico."
                target="_blank"
                className="text-blue-600 underline"
              >
                Falar sobre {servico.toLowerCase()}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
