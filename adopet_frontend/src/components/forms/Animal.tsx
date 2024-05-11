import * as MUI from "@mui/material";
import * as React from "react";
import * as MapChoice from "../../models/map_choices/MapChoices";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlField from "../elements/FormControlField";
import FormCheckBox from "../elements/FormCheckbox";

interface FormAnimalProps {
  age: string;
  coat: string;
  gender: string;
  size: string;
  specie: string;
  isHouseTrained: boolean;
  isSpecialNeeds: boolean;
  isVaccinated: boolean;
  isCastrated: boolean;
  handleAge: (event: MUI.SelectChangeEvent) => void;
  handleCoat: (event: MUI.SelectChangeEvent) => void;
  handleGender: (event: MUI.SelectChangeEvent) => void;
  handleSize: (event: MUI.SelectChangeEvent) => void;
  handleSpecie: (event: MUI.SelectChangeEvent) => void;
  handleHouseTrained: (event: React.ChangeEvent<Element>) => void;
  handleSpecialNeeds: (event: React.ChangeEvent<Element>) => void;
  handleVaccinated: (event: React.ChangeEvent<Element>) => void;
  handleCastrated: (event: React.ChangeEvent<Element>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormAnimal({
  age,
  coat,
  gender,
  size,
  specie,
  isHouseTrained,
  isSpecialNeeds,
  isVaccinated,
  isCastrated,
  handleAge,
  handleCoat,
  handleGender,
  handleSize,
  handleSpecie,
  handleHouseTrained,
  handleSpecialNeeds,
  handleVaccinated,
  handleCastrated,
  handleSubmit,
}: FormAnimalProps) {
  const specieMap = new MapChoice.MapSpecieChoice();
  const genderMap = new MapChoice.MapGenderChoice();
  const sizeMap = new MapChoice.MapSizeChoice();
  const ageMap = new MapChoice.MapAgeChoice();
  const coatMap = new MapChoice.MapCoatChoice();

  return (
    <React.Fragment>
      <MUI.Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MUI.Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </MUI.Avatar>
        <MUI.Typography component="h1" variant="h5">
          Registro de Animais
        </MUI.Typography>
        <MUI.Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <MUI.Grid container spacing={2}>
            <MUI.Grid item xs={12} sm={12}>
              <MUI.TextField
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
              />
            </MUI.Grid>

            <FormControlField
              id={"Espécie"}
              label={"Espécie"}
              name={"specie"}
              value={specie}
              handleValue={handleSpecie}
              map={specieMap}
            />

            <FormControlField
              id={"Genêro"}
              label={"Genêro"}
              name={"gender"}
              value={gender}
              handleValue={handleGender}
              map={genderMap}
            />

            <FormControlField
              id={"Idade"}
              label={"Idade"}
              name={"age"}
              value={age}
              handleValue={handleAge}
              map={ageMap}
            />

            <FormControlField
              id={"Pelage"}
              label={"Pelage"}
              name={"coat"}
              value={coat}
              handleValue={handleCoat}
              map={coatMap}
            />

            <FormControlField
              id={"Tamanho"}
              label={"Tamanho"}
              name={"size"}
              value={size}
              handleValue={handleSize}
              map={sizeMap}
            />

            <MUI.Grid item xs={12} sm={12}>
              <MUI.TextField
                fullWidth
                id="temperament"
                label="Temperament"
                name="temperament"
              />
            </MUI.Grid>

            <MUI.Grid item xs={12} sm={12}>
              <MUI.TextField
                fullWidth
                id="description"
                label="Descrição"
                name="description"
                multiline
                rows={5}
              />
            </MUI.Grid>

            <MUI.Grid item xs={12} sm={12}>
              <MUI.FormGroup>
                <FormCheckBox
                  id={"is_house_trained"}
                  checked={isHouseTrained}
                  onChange={handleHouseTrained}
                  label={"Sabe usar a caixa de areia ou tapete higiênico"}
                />

                <FormCheckBox
                  id={"is_special_needs"}
                  checked={isSpecialNeeds}
                  onChange={handleSpecialNeeds}
                  label={"Possui necessidades especiais"}
                />

                <FormCheckBox
                  id={"is_vaccinated"}
                  checked={isVaccinated}
                  onChange={handleVaccinated}
                  label={"Vacinado"}
                />

                <FormCheckBox
                  id={"is_castrated"}
                  checked={isCastrated}
                  onChange={handleCastrated}
                  label={"Castrado"}
                />
              </MUI.FormGroup>
            </MUI.Grid>

            <MUI.Grid item xs={12} sm={12}>
              <MUI.Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </MUI.Button>
            </MUI.Grid>
          </MUI.Grid>
        </MUI.Box>
      </MUI.Box>
    </React.Fragment>
  );
}