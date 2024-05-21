import * as MUI from "@mui/material";
import * as React from "react";
import ModelAnimal from "../models/Animal";
import Pagination from "../models/Pagination";
import AxiosAnimal from "../api/AxiosAnimal";
import CardAnimal from "./elements/CardAnimal";

const axiosAnimal = new AxiosAnimal();

export default function GridAnimal() {
  const [animalPages, setAnimalPages] =
    React.useState<Pagination<ModelAnimal>>();

  React.useEffect(() => {
    axiosAnimal
      .listAnimals()
      .then((response) => {
        setAnimalPages(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (animalPages?.getResults() === undefined) {
    return <h1>Carregando...</h1>;
  }

  return (
    <React.Fragment>
      <MUI.Grid container spacing={3}>
        {animalPages.getResults().map((animal: ModelAnimal) => (
          <MUI.Grid item key={animal.id} xs={4}>
            <CardAnimal animal={animal} />
          </MUI.Grid>
        ))}
      </MUI.Grid>
    </React.Fragment>
  );
}

// function AnimalCard({ animal }: { animal: Animal }) {
//   const [imageUrl, setImageUrl] = React.useState("");
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     if (animal.id) {
//       axiosAnimal
//         .listImagesById(animal.id)
//         .then((response) => {
//           setImageUrl(response[0].image);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [animal.id]);

//   const handleClick = () => {
//     try {
//       navigate("/animaldetail", {
//         state: { animalId: animal.id },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <MUI.Card sx={{ maxWidth: 345 }} onClick={handleClick}>
//       <MUI.CardActionArea>
//         <MUI.CardMedia component="img" height="250px" image={imageUrl} />
//         <MUI.CardContent>
//           <MUI.Typography gutterBottom variant="h5" component="div">
//             {animal.name}
//           </MUI.Typography>
//           {animal.description && animal.description.length > 90 ? (
//             // <MUI.Typography>{animal.description.slice(70)}</MUI.Typography>
//             <MUI.Typography variant="body2" color="text.secondary">
//               {animal.description.slice(0, 90)}..
//             </MUI.Typography>
//           ) : (
//             <MUI.Typography variant="body2" color="text.secondary">
//               {animal.description}
//             </MUI.Typography>
//           )}
//         </MUI.CardContent>
//       </MUI.CardActionArea>
//     </MUI.Card>
//   );
// }

// export default function AnimalGrid() {
//   const [animals, setAnimals] = React.useState([]);
//   const [page, setPage] = React.useState<number>(1);
//   const [totalPages, setTotalPages] = React.useState<number>(1);

//   const handlePageChange = (
//     event: React.ChangeEvent<unknown>,
//     value: number
//   ) => {
//     axiosAnimal
//       .listAnimals(value)
//       .then((response) => {
//         setAnimals(response.results);
//         setPage(value);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   React.useEffect(() => {
//     axiosAnimal
//       .listAnimals()
//       .then((response) => {
//         setAnimals(response.results);
//         setTotalPages(Math.ceil(response.count / 9));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   if (!animals) {
//     return (
//       <div>
//         <h1>Carregando...</h1>
//       </div>
//     );
//   }

//   return (
//     <MUI.Box
//       component="main"
//       display="flex"
//       flexDirection="column"
//       minHeight="100vh"
//     >
//       <Header />
//       <MUI.Container
//         component="main"
//         maxWidth="lg"
//         sx={{ paddingTop: "100px", paddingBottom: "20px", flexGrow: 1 }}
//       >
//         <MUI.CssBaseline />
//         <MUI.Grid container spacing={3}>
//           {animals.map((animal: Animal) => (
//             <MUI.Grid item key={animal.id} xs={4}>
//               <AnimalCard animal={animal} />
//             </MUI.Grid>
//           ))}
//         </MUI.Grid>
//         {totalPages && (
//           <MUI.Box display="flex" justifyContent="center" alignItems="center">
//             <MUI.Pagination
//               count={totalPages}
//               page={page}
//               onChange={handlePageChange}
//             />
//           </MUI.Box>
//         )}
//       </MUI.Container>
//       <Footer />
//     </MUI.Box>
//   );
// }
