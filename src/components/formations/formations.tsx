import s from "./formations.module.css";

export function Formations() {
  return (
    <section className={s.formation}>
      <h2> Formação Academica:</h2>
      <p> Faculdade Cruzeiro do Sul</p>

      <table>
        <tbody>
          <tr>
            <th scope="row"> Curso:</th>
            <td> Ciência da Computação</td>
          </tr>
          <tr>
            <th scope="row"> Período:</th>
            <td> 6° Período</td>
          </tr>
          <tr>
            <th scope="row"> Formação: </th>
            <td> julho, 2025</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
