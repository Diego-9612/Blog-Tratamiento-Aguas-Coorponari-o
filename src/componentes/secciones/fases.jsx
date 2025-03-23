import Imagen1 from '../../../public/icono1.svg'
import Imagen2 from '../../../public/icono2.svg'
import Imagen3 from '../../../public/icono3.svg'
export default function Fases() {
    return (
        <>

            <section className="my-20 section-container">
                <h3>
                    Fases en el Tratamiento de Aguas Residuales
                </h3>
                <p className="mb-10 section-content">A continuación, se detallan los principales tipos de tratamientos utilizados en las plantas de tratamiento de aguas residuales.</p>
                <div className="flex flex-col items-center justify-between space-y-12 md:flex-row md:space-y-0 md:space-x-8">
                    <span className="flex flex-col items-center space-y-5">
                        <img src={Imagen1} alt="fase 1" className="mb-2 w-14" />
                        <h5>
                            Tratamiento Preliminar
                        </h5>
                        <p className="max-w-md text-sm text-center text-grayishBlue">
                            Esta fase inicial se centra en la eliminación de sólidos de gran tamaño y materiales que podrían obstruir o dañar el equipo de tratamiento posterior
                        </p>
                    </span>
                    <span className="flex flex-col items-center space-y-5">
                        <img src={Imagen2} alt="fase 1" className="mb-2 w-14" />
                        <h5>
                            Tratamiento Primario
                        </h5>
                        <p className="max-w-md text-sm text-center text-grayishBlue">
                            En esta etapa, se busca eliminar sólidos suspendidos y materia orgánica que pueden sedimentarse
                        </p>
                    </span>
                    <span className="flex flex-col items-center space-y-5">
                        <img src={Imagen3} alt="fase 1" className="mb-2 w-14" />
                        <h5>
                            Tratamiento Secundario
                        </h5>
                        <p className="max-w-md text-sm text-center text-grayishBlue">
                            Esta fase tiene como objetivo la eliminación de la materia orgánica disuelta y los sólidos en suspensión que no fueron eliminados en las etapas anteriores.
                        </p>
                    </span>
                    <span className="flex flex-col items-center space-y-5">
                        <img src={Imagen1} alt="fase 1" className="mb-2 w-14" />
                        <h5>
                            Tratamiento Terciario
                        </h5>
                        <p className="max-w-md text-sm text-center text-grayishBlue">
                            Esta etapa avanzada busca eliminar contaminantes específicos y mejorar la calidad del agua tratada para su posible reutilización
                        </p>
                    </span>
                </div>
            </section>

        </>
    );

}