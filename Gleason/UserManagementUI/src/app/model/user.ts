export interface UserCreationObject 
{
    UserName: string;
    Email : string;
    FirstName: string;
    LastName: string;
    IsTrailUser: boolean;
    CustomerType: any[];
    roles: string[];
}

export interface UserLogin 
{
    UserName: string;
    Password: string;
}