export interface CustomerInfo {
    basicInfo: BasicInfo;
    primaryAddress: PrimaryAddress;
    secondaryAddress: SecondaryAddress;
  }
  
export interface  BasicInfo{
      firstName: string;
      lastName: string;
      email?: string;
      phone: number;
    }
  
export  interface  PrimaryAddress{
      email?: string;
      phone: number;
      address: string;
      city: string;
      country: string;
      postCode: string;
    }
  
export  interface SecondaryAddress{
      email?: string;
      phone: number;
      address: string;
      city: string;
      country: string;
      postCode: string; 
    }
  