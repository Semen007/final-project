export class Contact {
    id: number;
    constructor(public firstName?: string,
                public secondName?: string,
                public phone?: number,
                public birthday?: Date,
                public website?: URL,
                public email?: string,
                public company?: string
                // chosen: boolean = false;
                ) {}
  }
