
import { IMovie } from "../../types";
import CharacterList from "./CharacterList";

interface ServerCharacterListProps {
    movie: IMovie;
    onClose: () => void;
}

async function fetchCharacters(urls: string[]): Promise<string[]> {
    const characterPromises = urls.map((url) =>
        fetch(url).then((res) => res.json())
    );
    const characterData = await Promise.all(characterPromises);
    return characterData.map((char: { name: string }) => char.name);
}

const ServerCharacterList = async ({ movie, onClose }: ServerCharacterListProps) => {
    const characters = await fetchCharacters(movie.characters); // Server-side fetch

    return <CharacterList movie={movie} characters={characters} onClose={onClose} />;
};

export default ServerCharacterList;

