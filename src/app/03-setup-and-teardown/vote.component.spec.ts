import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  // const component = new VoteComponent();

  let component: VoteComponent;  // = new VoteComponent();

  beforeEach(() => {
    component = new VoteComponent();
  });

  afterEach(() => {
    // do clean up if needed
  });

  beforeAll(() => {
    // before all test
  });

  afterAll(() => {
    // after all test
  });


  it('should incement totalVotes when upvoted', () => {
    // Arrange

    // const component = new VoteComponent();

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // const component = new VoteComponent();
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
