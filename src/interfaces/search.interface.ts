export type SearchTerm = string;

export interface HeaderProps {
  searchTerm?: string;
  setSearchTerm: (data: string) => void;
}
