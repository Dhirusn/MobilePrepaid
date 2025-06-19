export interface  IOperatorType {
    id: number;
    operatorId: number;
    name: string;
    bundle: boolean;
    data: boolean;
    pin: boolean;
    comboProduct: boolean;
    supportsLocalAmounts: boolean;
    supportsGeographicalRechargePlans: boolean;
    senderCurrencyCode: string;
    senderCurrencySymbol: string;
    destinationCurrencyCode: string;
    destinationCurrencySymbol: string;
    commission: number;
    internationalDiscount: number;
    localDiscount: number;
    country: IOperatorCountry;
    fx: Fx;
    logoUrls: string[];
    fixedAmounts: any[];
    localFixedAmounts: any[];
    suggestedAmounts: any[];
    fees: Fees;
    geographicalRechargePlans: IGeographicalRechargePlan[];
    status: string;
}


export interface IOperatorCountry {
    isoName: string;
    name: string;
}

export interface Fees {
    international: number;
    local: number;
    localPercentage: number;
    internationalPercentage: number;
}

export interface Fx {
    rate: number;
    currencyCode: string;
}




export interface IGeographicalRechargePlan {
    locationCode: string;
    locationName: string;
    fixedAmounts: number[];
    localAmounts: number[];
}