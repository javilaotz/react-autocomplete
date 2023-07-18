export interface Movie {
  id: number;
  title: string;
}

export interface MovieAPI {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Result {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export interface AutocompleteProps {
  options: string[]
}