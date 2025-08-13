export interface Task {
    id: number;
    name: string;
    progress: number; 
    type: string; 
    status: string;
    priority: string; 
    owner: string;
    [key: string]: any;
}
