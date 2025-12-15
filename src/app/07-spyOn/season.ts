export class Season{
  season: string;
  constructor( ) {
    this.season = 'Spring';
  }
    nextSeason(): string{
      this.season = 'Summer';
      return this.season;
    }
    getNextSeason(): string {
      return this.nextSeason();
    }
  }
