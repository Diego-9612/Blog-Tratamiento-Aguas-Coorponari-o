export default function Avances() {
    return (

        <>
            <section className="mb-20 section-container">
                <h3>
                    Tendencias y Avances Tecnológicos
                </h3>
                <p className="max-w-3xl mx-auto text-lg text-grayishBlue">El sector del tratamiento de aguas está evolucionando constantemente gracias a la innovación tecnológica. Algunas de las tendencias más destacadas incluyen:</p>
                <ul className="mb-10 space-y-4 section-content">
                    <li className="flex items-start mt-10 space-x-2 md:justify-center">
                        <span className="text-green-600">✔</span>
                        <p>Osmosis inversa y la ultrafiltración, que permiten la reutilización de agua con alta calidad.</p>
                    </li>
                    <li className="flex items-start space-x-2 md:justify-center">
                        <span className="text-green-600">✔</span>
                        <p>Combinan tratamiento biológico y filtración por membrana, mejorando la eficiencia y reduciendo el espacio necesario para su operación.</p>
                    </li>
                    <li className="flex items-start space-x-2 md:justify-center">
                        <span className="text-green-600">✔</span>
                        <p>Utilizan corriente eléctrica para eliminar contaminantes sin necesidad de productos químicos.</p>
                    </li>
                    <li className="flex items-start space-x-2 md:justify-center">
                        <span className="text-green-600">✔</span>
                        <p>Optimiza la operación de plantas de tratamiento, reduciendo costos y mejorando el control de calidad del agua tratada.</p>
                    </li>
                    <li className="flex items-start space-x-2 md:justify-center">
                        <span className="text-green-600">✔</span>
                        <p>Alternativas ecológicas para la depuración de aguas residuales.</p>
                    </li>
                </ul>
                <figure className="flex justify-center">
                    <img src="/src/assets/avances.jpg" alt="Avances" className="rounded-lg shadow-md md:w-1/2 shadow-black" />
                </figure>
            </section>

        </>

    );
}