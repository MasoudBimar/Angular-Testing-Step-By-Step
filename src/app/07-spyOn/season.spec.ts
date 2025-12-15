import { Season } from './season';

// describe('spyOn() Demo. Season', () =>  {
//   it('should be Summer', () =>  {
//       let s = new Season();
//       spyOn(s, 'nextSeason');
//       s.getNextSeason();
//       expect(s.season).toEqual('Summer');
//   });
// });

describe('spyOn() Demo. Season', () => {
  it('should be Summer', () => {
      let s = new Season();
      spyOn(s, 'nextSeason').and.callThrough();
      s.getNextSeason();
      expect(s.season).toEqual('Summer');
  });
});

describe('spyOn() Demo. Season', () => {
  it('should be Autumn', () => {
      let s = new Season();
      spyOn(s, 'nextSeason').and.returnValue('Autumn');
      s.getNextSeason();
      expect(s.nextSeason()).toEqual('Autumn');
  });
});

describe('spyOn() Demo. Season', () => {
  it('should not be Summer', () => {
      let s = new Season();
      spyOn(s, 'nextSeason').and.callFake(() => {
        console.log('in the future');
        return 'Winter';
      });
      s.getNextSeason();
      expect(s.nextSeason()).not.toEqual('Summer');
  });
});

// describe('spyOn() Demo. Season', () => {
//   it('should be Winter in Narnia', () => {
//       let s = new Season();
//       spyOn(s, 'nextSeason').and.callFake( (place: string) => {
//         return 'Winter in ' + place;
//       });
//       s.getNextSeason();
//       expect(s.nextSeason('Narnia')).toEqual('Winter in Narnia');
//   });
// });
