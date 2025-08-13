export interface Task {
    id: number;
    name: string;
    progress: number; // percentage
    type: string;     // feature, bug, etc.
    status: string;   // todo, in-progress, done
    priority: string; // low, medium, high
    owner: string;
    [key: string]: any;
}
