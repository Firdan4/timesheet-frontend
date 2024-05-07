export type Activitie = {
  id: number | string;
  activitieName: string;
  projectName: string;
  dateStart: string;
  dateEnd: string;
  timeStart: string;
  timeEnd: string;
  duration: string;
};
export type Employee = {
  id: number | string;
  name: string;
  rate: string;
};

export type OptionTypes = {
  label: string;
  value: number;
};

interface projectTypeDataQuery {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string | null;
}

interface ActivityTypeDataQuery {
  id: number;
  activitieName: string;
  projectName: string;
  dateStart: string;
  dateEnd: string;
  timeStart: string;
  timeEnd: string;
  createdAt: string;
  updatedAt: string;
}
