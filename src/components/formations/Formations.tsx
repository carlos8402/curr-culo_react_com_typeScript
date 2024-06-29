import './formations.css'

export function Formations(){
    return(
        <>
                <section id="formation">

                            <h2 className="formation-title"> Formação Academica:</h2>
                            <p className="formation-institution"> Faculdade Cruzeiro do Sul</p>

                            
                            <table className="formation-table">
                                <tbody className="table-items">
                                    <tr>
                                        <th className="table-title" scope="row"> Curso:</th>
                                        <td className="table-item"> Ciência da Computação</td>
                                    </tr>
                                    <tr>
                                        <th className="table-title"scope="row"> Período:</th>
                                        <td className="table-item"> 6° Período</td>
                                    </tr>
                                    <tr>
                                        <th className="table-title" scope="row"> Formação: </th>
                                        <td className="table-item"> julho, 2025</td>
                                    </tr>
                                </tbody>

                            </table>

                 </section>

        </>
    )
}