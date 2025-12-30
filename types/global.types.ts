export enum GENDER {
  MALE = "Male",
  FEMALE = "Female",
  OTHER = "Other",
}

export type IImage = {
  path: string;
  public_id: string;
  _id: string;
};


export enum USER_ROLE{
  ADMIN = "Admin",
  USER="User",
}