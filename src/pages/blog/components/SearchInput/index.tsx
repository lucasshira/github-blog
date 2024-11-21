import { Container, SearchInputContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { PostContext } from "../../../../contexts/PostContext";

const searchInputSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchInputSchema>;

const SearchInput = () => {
  const { fetchPosts } = useContext(PostContext);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchInputSchema),
  });

  const handleSearchPublications = async (data: SearchFormInput) => {
    const { query } = data;
    await fetchPosts(query);
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
