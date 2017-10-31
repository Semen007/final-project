export class Contact {
    id: number;
    constructor(public firstName?: string,
                public secondName?: string,
                public phone?: number,
                public birthday?: string,
                public website?: string,
                public email?: string,
                public company?: string
                ) {}
  }
