export interface IUser {
  id: string,
  name: string,
  email: string,
  age: number
}

export interface IGlobalState {
  users: IUser[]
}
