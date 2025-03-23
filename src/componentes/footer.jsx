export default function Footer() {
    return (
        <>
            <footer className="bg-gray-50">
                <section className="section-container">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <img src="/src/assets/logo.svg" alt="Icono" className="scale-50" />
                        <span className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue ">
                            <span className="flex flex-col space-y-4 text-center md:text-left">
                                <div><a href="https://corponarino.gov.co/" className="hover:text-strongCyan">Creado para Corponariño</a></div>
                                <div><a href="https://github.com/Diego-9612" className="hover:text-strongCyan">Creado por Codeweb Studio</a></div>
                            </span>
                        </span>
                        <span className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue ">
                            <span className="flex flex-col space-y-4 text-center md:text-left">
                                <div><a href="https://ucc.edu.co/" className="hover:text-strongCyan">Universidad Cooperativa de Colombia</a></div>
                                <div><a href="https://www.linkedin.com/in/diego-guerrero-software/" className="hover:text-strongCyan">Contacto Codeweb Studio</a></div>
                            </span>
                        </span>
                    </div>
                </section>
            </footer>
        </>
    );
}