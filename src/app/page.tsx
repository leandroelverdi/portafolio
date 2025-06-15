import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="transition-colors min-h-screen bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white font-(family-name:--font-vt323) overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center my-24 w-full">
        <section className="flex flex-col items-center justify-center  text-center h-full w-full my-12">
          <p className="text-[6vw]">{`// Hola, este es mi...`}</p>
          <h1 className="text-[12vw] mb-10">{`{”_portafolio web”}`}</h1>
          <div
            className="bg-fixed bg-cover bg-center h-[500px] w-full"
            style={{ backgroundImage: "url('/hero-image.jpg')" }}>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-center gap-10 my-12 px-4">
          <p className="text-xl text-violet-400">(!)</p>
          <h2 className="text-4xl">{`<Proyectos>`}</h2>
          <p className="text-xl text-cyan-800 dark:text-yellow-200 text-center">
            ...estos son los mejores proyectos que realicé hasta el momento
          </p>

          <div className="flex overflow-x-auto snap-x snap-mandatory w-screen h-screen">
            {/* Proyecto 1 */}
            <div className="flex-shrink-0 snap-start w-screen h-screen flex flex-col justify-center items-center gap-4 px-8 box-border">
              <Image
                src="/sneakers_react-scaled.webp"
                alt="Proyecto 1"
                width={600}
                height={400}
                className="rounded-lg max-h-100 object-contain"
              />
              <h3 className="text-2xl">{`{ sneakers app }`}</h3>
              <p className="text-xl text-cyan-800 dark:text-yellow-200 text-center">
                {`//…Aplicación full stack e-commerce diseñada en React y utilizando como base de datos Firebase.`}
              </p>
            </div>

            {/* Proyecto 2 */}
            <div className="flex-shrink-0 snap-start w-screen h-screen flex flex-col justify-center items-center gap-4 px-8 box-border">

              <Image
                src="/hotel-JS.webp"
                alt="Proyecto 2"
                width={600}
                height={400}
                className="rounded-lg max-h-100 object-contain"
              />
              <h3 className="text-2xl">{`{ hotel JS }`}</h3>
              <p className="text-xl text-cyan-800 dark:text-yellow-200 text-center">
                {`//…Página web diseñada con el framework Bootstrap y vanilla JS.`}
              </p>
            </div>

            {/* Proyecto 3 */}
            <div className="flex-shrink-0 snap-start w-screen h-screen flex flex-col justify-center items-center gap-4 px-8 box-border">

              <Image
                src="/9z.webp"
                alt="Proyecto 3"
                width={600}
                height={400}
                className="rounded-lg max-h-100 object-contain"
              />
              <h3 className="text-2xl">{`{ 9z fans }`}</h3>
              <p className="text-xl text-cyan-800 dark:text-yellow-200 text-center">
                {`//…Página web dedicada al equipo de eSports 9z Team, más específicamente a su equipo de CS2.`}
              </p>
            </div>
          </div>
        </section>


        <section className="flex flex-col items-center justify-center  text-center gap-10 my-12 px-4">
          <p className="text-xl text-violet-400">{`{#}`}</p>
          <h2 className="text-4xl">{`<tecnologias>`}</h2>
          <p className="text-xl text-cyan-800 dark:text-yellow-200 text-center">…estas son los lenguajes de programación que suelo utilizar en mi dia a dia</p>
          <div>
            <h3 className="text-4xl">Herramientas</h3>
            <Image
              src="/iconos/git.svg"
              alt="GIT"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-4xl">Lenguajes</h3>
          <div className="flex flex-row overflow-x-auto gap-4">
            <Image
              src="/iconos/html-5.svg"
              alt="HTML"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/css-3.svg"
              alt="CSS"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/js.svg"
              alt="JAVASCRIPT"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/typescript.svg"
              alt="TYPESCRIPT"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/php.svg"
              alt="PHP"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/sass.svg"
              alt="SASS"
              width={200}
              height={200}
            />
          </div>
          <h3 className="text-4xl">Framewordks</h3>
          <div className="flex flex-row overflow-x-auto gap-4">
            <Image
              src="/iconos/next-js.svg"
              alt="NEXT JS"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/express.svg"
              alt="EXPRESS"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/laravel.svg"
              alt="LARAVEL"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/node-js.svg"
              alt="NODE JS"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/bootstrap.svg"
              alt="BOOTSTRAP"
              width={200}
              height={200}
            />
            <Image
              src="/iconos/tailwind.svg"
              alt="TAILWIND"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-row overflow-x-auto gap-4">
            <Image
              src="/iconos/mongodb.svg"
              alt="MONGO DB"
              width={200}
              height={200}
            />

            <Image
              src="/iconos/sql-database.svg"
              alt="SQL"
              width={200}
              height={200}
            />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center  gap-10 px-4 my-12 px-4">
          <p className="text-xl text-violet-400">{`{/}`}</p>
          <h2 className="text-4xl">{`<sobre_mi>`}</h2>
          <p className="text-xl text-cyan-800 dark:text-yellow-200 text-center">...soy un desarrolador web freelance de 24 años, actualmente estudiando Ingenieria Informática en la UBA</p>

          <p className="text-2xl">…Me gusta crear soluciones funcionales, aprender nuevas herramientas y trabajar en proyectos que me permitan aplicar mis conocimientos y mejorar cada día;</p>
          <p className="text-xl text-cyan-800 dark:text-yellow-200">…Como estudiante y desarrollador autodidacta, dedico tiempo a formarme en tecnologías como HTML, CSS, JavaScript, React, Node.js, y más. Aunque aún no cuento con experiencia profesional, tengo muchas ganas de crecer en el rubro y enfrentar nuevos desafíos. Me interesa trabajar en proyectos reales, colaborar con otros profesionales y seguir construyendo una carrera en el mundo del desarrollo web;</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}



