const cars = [
  {
    brand: "Toyota",
    model: "Corolla XEi",
    year: "2024",
    price: "R$ 139.990",
    image: "🚘",
  },
  {
    brand: "Honda",
    model: "Civic Touring",
    year: "2023",
    price: "R$ 154.990",
    image: "🚗",
  },
  {
    brand: "Jeep",
    model: "Compass Limited",
    year: "2024",
    price: "R$ 169.990",
    image: "🚙",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* HEADER */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-black tracking-tight">
            AUTO<span className="text-blue-600">PRIME</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#comprar"
              className="text-sm font-medium text-zinc-700 transition hover:text-blue-600"
            >
              Comprar carro
            </a>

            <a
              href="#vender"
              className="text-sm font-medium text-zinc-700 transition hover:text-blue-600"
            >
              Vender meu carro
            </a>

            <a
              href="#sobre"
              className="text-sm font-medium text-zinc-700 transition hover:text-blue-600"
            >
              Sobre nós
            </a>
          </nav>

          <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
            Fale com consultor
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.35),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="mb-5 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              Seu próximo carro está aqui
            </span>

            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Encontre o carro que combina com{" "}
              <span className="text-blue-500">você.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Encontre veículos selecionados, consulte as melhores opções e
              conte com nossos especialistas para realizar seu próximo negócio.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#comprar"
                className="rounded-full bg-blue-600 px-7 py-4 text-center font-bold text-white transition hover:bg-blue-700"
              >
                Comprar carro
              </a>

              <a
                href="#vender"
                className="rounded-full border border-zinc-700 px-7 py-4 text-center font-bold text-white transition hover:border-white"
              >
                Vender meu carro
              </a>
            </div>
          </div>

          {/* CARRO DESTAQUE */}
          <div className="relative flex min-h-[360px] items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative w-full max-w-lg">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
                <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950">
                  <span className="text-[150px] drop-shadow-2xl">🚘</span>
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Destaque da semana</p>
                    <h2 className="mt-1 text-2xl font-bold text-white">
                      Toyota Corolla
                    </h2>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-zinc-400">A partir de</p>
                    <p className="text-xl font-black text-white">
                      R$ 139.990
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSCA */}
      <section className="relative z-10 -mt-8 px-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl">
          <div className="mb-4">
            <h2 className="text-lg font-bold">Encontre seu próximo carro</h2>
            <p className="text-sm text-zinc-500">
              Pesquise entre nossos veículos disponíveis.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
            <select className="rounded-xl border border-zinc-200 bg-white px-4 py-4 text-sm outline-none focus:border-blue-500">
              <option>Marca</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Jeep</option>
              <option>Volkswagen</option>
            </select>

            <select className="rounded-xl border border-zinc-200 bg-white px-4 py-4 text-sm outline-none focus:border-blue-500">
              <option>Modelo</option>
              <option>Corolla</option>
              <option>Civic</option>
              <option>Compass</option>
            </select>

            <select className="rounded-xl border border-zinc-200 bg-white px-4 py-4 text-sm outline-none focus:border-blue-500">
              <option>Faixa de preço</option>
              <option>Até R$ 100 mil</option>
              <option>R$ 100 mil - R$ 150 mil</option>
              <option>Acima de R$ 150 mil</option>
            </select>

            <button className="rounded-xl bg-zinc-950 px-7 py-4 font-bold text-white transition hover:bg-blue-600">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* CARROS */}
      <section id="comprar" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Nosso estoque
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Veículos em destaque
            </h2>

            <p className="mt-3 text-zinc-500">
              Confira algumas das melhores opções disponíveis.
            </p>
          </div>

          <button className="w-fit font-bold text-blue-600 hover:text-blue-700">
            Ver todos os veículos →
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.model}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-56 items-center justify-center bg-zinc-100">
                <span className="text-8xl transition group-hover:scale-110">
                  {car.image}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold text-zinc-600">
                    {car.year}
                  </span>

                  <span className="text-xs font-medium text-zinc-400">
                    Disponível
                  </span>
                </div>

                <p className="mt-5 text-sm text-zinc-500">{car.brand}</p>

                <h3 className="mt-1 text-xl font-black">{car.model}</h3>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-zinc-400">Por apenas</p>
                    <p className="text-xl font-black">{car.price}</p>
                  </div>

                  <button className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600">
                    Ver carro
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VENDA SEU CARRO */}
      <section id="vender" className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
                Venda seu carro
              </p>

              <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
                Quer vender seu carro?
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                Faça uma cotação com nossa equipe comercial. Informe os dados
                do seu veículo e entraremos em contato para avaliar sua
                oportunidade.
              </p>

              <button className="mt-8 rounded-full bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700">
                Fazer cotação
              </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold text-white">
                Dados do seu carro
              </h3>

              <div className="mt-6 grid gap-4">
                <select className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-sm text-white outline-none">
                  <option>Ano</option>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>

                <select className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-sm text-white outline-none">
                  <option>Marca</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Jeep</option>
                  <option>Volkswagen</option>
                </select>

                <input
                  type="text"
                  placeholder="Modelo"
                  className="rounded-xl border border-white/10 bg-zinc-900 px-4 py-4 text-sm text-white outline-none placeholder:text-zinc-500"
                />

                <button className="rounded-xl bg-white px-5 py-4 font-bold text-zinc-950 transition hover:bg-blue-500 hover:text-white">
                  Fazer cotação →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Sobre nós
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Mais do que vender carros, queremos ajudar você a fazer um bom
            negócio.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-500">
            Na Auto Prime, trabalhamos para oferecer uma experiência simples,
            transparente e segura para quem deseja comprar ou vender um
            veículo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-zinc-100 p-7">
            <div className="text-3xl">✓</div>
            <h3 className="mt-5 text-xl font-black">Transparência</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Informações claras para você tomar sua decisão.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-100 p-7">
            <div className="text-3xl">★</div>
            <h3 className="mt-5 text-xl font-black">Qualidade</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Veículos selecionados para oferecer boas oportunidades.
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-100 p-7">
            <div className="text-3xl">♙</div>
            <h3 className="mt-5 text-xl font-black">Consultoria</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Nossa equipe está pronta para ajudar você.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 text-center md:px-20">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            Está procurando seu próximo carro?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Fale com um de nossos consultores e encontre a melhor opção para
            você.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-blue-600 hover:bg-zinc-100">
            Falar com consultor
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black">
              AUTO<span className="text-blue-600">PRIME</span>
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Compra, venda e consultoria de veículos.
            </p>
          </div>

          <p className="text-sm text-zinc-400">
            © 2026 Auto Prime. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
