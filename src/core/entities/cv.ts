export interface IEntity {
    name: string;
    logo: string;
}

export interface ITechnology {
    name: string;
    logo: string;
}

export interface IExperience {
    company: IEntity;
    role: string;
    type: string;
    startDate: string;
    endDate: string;
    location: string | undefined;
    description: string;
    technologies: ITechnology[];
}[];

export interface ILicensesAndCertifications {
    entity: IEntity;
    name: string;
    startDate: Date;
    endDate: Date;
    id: string | undefined;
    link: string | undefined;
    technologies: ITechnology[];
}[];

export interface ISocialNetworks {
    name: string;
    url: string;
}

export interface ICurriculum {
    name: string;
    description: string;
    licensesAndCertifications: ILicensesAndCertifications[];
    experience: IExperience[];
    socialNetworks: ISocialNetworks[];
}