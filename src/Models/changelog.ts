export interface IChangelog {
  id: number;
  userId: string;
  changedItem: string;
  oldValue: string;
  newValue: string;
}
