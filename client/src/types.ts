export type ProjectCategory = "Web Design" | "Development";

export interface Project {
  name: string;
  liveUrl: string;
  image: string;
  videoPreview: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
}
