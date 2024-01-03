import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hook/useGenre";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hook/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/heading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          ></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={3}>
            <VStack padding={"15px"}>
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              ></GenreList>
            </VStack>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={3} marginBottom={5}>
            <PlatformList
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformList>
            <SortSelector
              currentSort={gameQuery.sortOrder}
              setOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </HStack>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
