import Beneficios from "./secciones/beneficios";
import Tratamientos from "./secciones/tratamientos";
import Avances from "./secciones/avances";
import Fases from "./secciones/fases";
export default function Main(){
    return(

        <>
        <main>
            <Beneficios/>
            <Tratamientos/>
            <Avances/>
            <Fases/>
        </main>
        </>
    );
}