import logo from '../assets/logo.svg'
export default function Header() {
    return (

        <>
            <header className="pt-16 mb-24 section-container">
                <img src={logo} alt="Logo" className="mx-auto my-16" />
                <h2 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">La Clave para un Futuro Sostenible Esta en el Tratamiento de Aguas Residuales</h2>
                <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
                    El tratamiento de aguas residuales se basa en una serie de procesos diseñados para eliminar contaminantes y devolver el agua a la naturaleza o reutilizarla de manera segura.
                </p>
                <section className="flex flex-col justify-center w-full mb-8 space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
                    <a href="https://watertreatmentmagazine.com/es/tecnologias-italianas-tratamiento-aguas/" className="button-container">Consultar articulo uno</a>
                    <a href="https://www.gob.mx/fmt/acciones-y-programas/tratamiento-de-aguas-residuales-162692" className="button-container">Consultar articulo dos</a>
                </section>
            </header>
        </>
    );
}