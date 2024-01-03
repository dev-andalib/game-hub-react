import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hook/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, err, isLoading } = useGenres();

  if (isLoading) return <Spinner></Spinner>;
  if (err) return null;

  return (
    
      <VStack><Heading marginBottom={3}>
        Genre
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack padding={2}>
              <Image
                objectFit={"cover"}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List></VStack>
  
  );
};

export default GenreList;
