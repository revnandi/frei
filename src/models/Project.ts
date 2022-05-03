type ProjectStatus = 'todo' | 'in-preparation' | 'in-progress' | 'completed' | 'paid' | 'on-hold';

export interface Project {
  id: string;
  title: string;
  description: string;
  color: string;
  status: ProjectStatus;
  client: string | null;
}
