export enum BusinessRoleName {
  ADMINISTRATOR = 'ADMINISTRATOR',
  PROJECT_MANAGER = 'PROJECT_MANAGER',
  CONTRIBUTOR = 'CONTRIBUTOR',
  GUEST = 'GUEST',
}

export type UserUpdate = Partial<{
  avatarUuid: string | null;
  accessEndsAt: Date | null;
  firstName: string;
  lastName: string;
  businessRoleId: number;
  productIds: number[];
  password?: string;
  oldPassword?: string;
}>;

export type UserCreate = {
  firstName: string;
  lastName: string;
  email: string;
  businessRoleId: number;
  companyId: number;
  accessEndsAt?: Date | null;
};

export type User = {
  id: number;
  avatarUuid: string;
  fullName: string;
  firstName: string;
  lastName: string;

  phone: string;
  email: string;

  lastLoginAt: string;
  createdAt: string;
  isActivated: boolean;

  businessRole: {
    id: number;
    name: BusinessRoleName;
  };

  companyName: string;
};

enum ProductName {
  Report = 'Report',
  Adviser = 'Adviser',
}

type Product = {
  id: number;
  name: ProductName;
};

type UserRole = {
  role: {
    id: number;
    product: Product;
  };
};

export type UserMe = User & {
  activePermissionsNames: string[];
  userRoles: UserRole[];
};

export type FileRetrieveSchema = {
  uuid: string;
  isPublic: boolean;
  companyId: number;

  s3Key: string;
  filename: string;
  ext: string;
  mediaType: string;
  sizeBytes: number;

  alias?: string | null;

  createdAt: string;
  deletedAt?: string;
};
