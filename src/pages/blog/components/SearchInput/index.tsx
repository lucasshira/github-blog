import { Container, SearchInputContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

const SearchInput = () => {
  return (
    <Container>
      <h3>Publicações</h3>

      <SearchInputContainer>
        <input type="text" placeholder="Buscar conteúdo" />

        <button type="submit">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchInputContainer>
    </Container>
  );
};

export default SearchInput;
