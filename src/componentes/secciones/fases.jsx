export default function Fases() {
    return (
        <>

            <section className="section-container my-20">
                <h3>
                    Fases en el Tratamiento de Aguas Residuales
                </h3>
                <p className="section-content mb-10">A continuación, se detallan los principales tipos de tratamientos utilizados en las plantas de tratamiento de aguas residuales.</p>
                <div className="flex flex-col items-center justify-between space-y-12 md:flex-row md:space-y-0 md:space-x-8">
                    <span className="flex flex-col items-center space-y-5">
                        <img src="/src/assets/icono1.svg" alt="fase 1" className="mb-2 w-14" />
                        <h5>
                            Tratamiento Preliminar
                        </h5>
                        <p className="max-w-md text-grayishBlue text-sm text-center">
                            Esta fase inicial se centra en la eliminación de sólidos de gran tamaño y materiales que podrían obstruir o dañar el equipo de tratamiento posterior
                        </p>
                    </span>
                    <span className="flex flex-col items-center space-y-5">
                        <img src="/src/assets/icono2.svg" alt="fase 1" className="mb-2 w-14" />
                        <h5>
                            Tratamiento Primario
                        </h5>
                        <p className="max-w-md text-grayishBlue text-sm text-center">
                            En esta etapa, se busca eliminar sólidos suspendidos y materia orgánica que pueden sedimentarse
                        </p>
                    </span>
                    <span className="flex flex-col items-center space-y-5">
                        <img src="/src/assets/icono3.svg" alt="fase 1" className="mb-2 w-14" />
                        <h5>
                            Tratamiento Secundario
                        </h5>
                        <p className="max-w-md text-grayishBlue text-sm text-center">
                            Esta fase tiene como objetivo la eliminación de la materia orgánica disuelta y los sólidos en suspensión que no fueron eliminados en las etapas anteriores.
                        </p>
                    </span>
                    <span className="flex flex-col items-center space-y-5">
                        <img src="/src/assets/icono1.svg" alt="fase 1" className="mb-2 w-14" />
                        <h5>
                            Tratamiento Terciario
                        </h5>
                        <p className="max-w-md text-grayishBlue text-sm text-center">
                            Esta etapa avanzada busca eliminar contaminantes específicos y mejorar la calidad del agua tratada para su posible reutilización
                        </p>
                    </span>
                </div>
            </section>

        </>
    );

}