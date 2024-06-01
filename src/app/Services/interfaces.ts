export interface ApiResult {
    page: number;
    results: MovieResult[];
    total_pages: number;
    total_results: number;
}

export interface MovieResult {
    adult: boolean;
    backdrop_path: string;
    budget: string;
    genres: any[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    tagline: string;
    vote_average:  number;
    vote_count: number;
}