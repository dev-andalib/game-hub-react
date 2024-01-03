import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hook/useGame";
import GameCard from "./GameCard.";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props{
  gameQuery : GameQuery
}


const GameGrid = ({ gameQuery}: Props) => {
  const { data, err, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        paddingTop={4}
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={3}
      >
        {" "}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        {data.map((g) => (
          <GameCard key={g.id} game={g}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
