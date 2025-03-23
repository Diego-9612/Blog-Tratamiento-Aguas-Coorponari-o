import imagenT from '../../../public/tratamiento.jpg'
export default function Tratamientos() {
    return (

        <>
            <section className="my-20 section-container">
                <h3 className="md:mb-12">Principales Procesos de Tratamiento de Aguas Residuales</h3>
                <div className="flex flex-col md:flex-row md:space-x-14 ">
                    <figure className="items-center md:w-1/2">
                        <img src={imagenT} alt="Tratamiendo de aguas" className="rounded-lg shadow-md shadow-black" />
                    </figure>
                    <ul className="flex flex-col gap-4 mt-10 space-y-2 text-xl md:w-1/2 md:text-left md:pl-16 md:mt-0">
                        <li>
                            <h4 className="mb-2 text-2xl font-bold text-darkGrayishBlue"> Tratamiento Físico</h4>
                            <p className="max-w-md text-lg text-grayishBlue">Este proceso se basa en la eliminación de sólidos y partículas mediante métodos mecánicos</p>
                        </li>
                        <li>
                            <h4 className="mb-2 text-2xl font-bold text-darkGrayishBlue">Tratamiento Químico</h4>
                            <p className="max-w-md text-lg text-grayishBlue ">Implica el uso de productos químicos para neutralizar contaminantes y mejorar la calidad del agua</p>
                        </li>
                        <li>
                            <h4 className="mb-2 text-2xl font-bold text-darkGrayishBlue">Tratamiento Biológico</h4>
                            <p className="max-w-md text-lg text-grayishBlue ">Aprovecha microorganismos para degradar materia orgánica y otros compuestos presentes en el agua</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}