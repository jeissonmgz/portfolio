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
    startDate: Date;
    endDate: Date;
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
    technologies: ITechnology[];
}[];

export interface ICurriculum {
    name: string;
    licensesAndCertifications: ILicensesAndCertifications[];
    experience: IExperience[];
}