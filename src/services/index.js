import axios from "axios";

const url = "https://tranquil-mountain-45124.herokuapp.com/api/divisions";

export const getDivisions = async () => {
  try {
    const divisions = await (
      await axios.get(url)
    ).data.response.map((data) => {
      return {
        key: data.key.toString(),
        Division: data.Division,
        Nivel: data.Level.toString(),
        Colaboradores: data.Colaboradores.toString(),
        Embajadores: data.Embajadores,
        DivisionSuperior: data.DivisionSuperior
          ? data.DivisionSuperior.name
          : "-",
        Subdivisiones: data.Subdivisions.length.toString(),
      };
    });

    return divisions;
  } catch (error) {
    console.log(error);
  }
};
