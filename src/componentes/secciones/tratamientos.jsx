export default function Tratamientos() {
    return (

        <>
            <section className="section-container my-20">
                <h3 className="md:mb-12">Principales Procesos de Tratamiento de Aguas Residuales</h3>
                <div className="flex flex-col md:flex-row md:space-x-14 ">
                    <figure className="md:w-1/2 items-center">
                        <img src="/src/assets/tratamiento.jpg" alt="Tratamiendo de aguas" className="shadow-md shadow-black rounded-lg" />
                    </figure>
                    <ul className="flex flex-col gap-4 space-y-2 mt-10 text-xl md:w-1/2 md:text-left md:pl-16 md:mt-0">
                        <li>
                            <h4 className="mb-2 text-2xl font-bold text-darkGrayishBlue"> Tratamiento Físico</h4>
                            <p className="max-w-md text-grayishBlue text-lg">Este proceso se basa en la eliminación de sólidos y partículas mediante métodos mecánicos</p>
                        </li>
                        <li>
                            <h4 className="mb-2 text-2xl font-bold text-darkGrayishBlue">Tratamiento Químico</h4>
                            <p className="max-w-md text-grayishBlue text-lg ">Implica el uso de productos químicos para neutralizar contaminantes y mejorar la calidad del agua</p>
                        </li>
                        <li>
                            <h4 className="mb-2 text-2xl font-bold text-darkGrayishBlue">Tratamiento Biológico</h4>
                            <p className="max-w-md text-grayishBlue text-lg ">Aprovecha microorganismos para degradar materia orgánica y otros compuestos presentes en el agua</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}