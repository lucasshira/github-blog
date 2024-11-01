import { Container, SearchInputContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchInputSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchInputSchema>;

const SearchInput = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchInputSchema),
  });

  const handleSearchPublications = (data: SearchFormInput) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(handleSearchPublications)}>
      <h3>Publicações</h3>

      <SearchInputContainer>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />

        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SearchInputContainer>
    </Container>
  );
};

export default SearchInput;
