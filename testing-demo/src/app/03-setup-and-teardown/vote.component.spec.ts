import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component : VoteComponent;  // Arrange

  beforeEach(() => { // executed after each test
    component = new VoteComponent(); // Setup
  });

  // beforeAll() - executed once before all tests
  // afterEach() - executed after each test - tear down
  // afterAll -executed once before all tests

  it('Should increment total votes when upvoted', () => {
    component.upVote(); // Act
    expect(component.totalVotes).toBe(1); // Assert

  });

  it('Should decrement total votes when downvoted', () => {
    component.downVote(); // Act
    expect(component.totalVotes).toBe(-1); // Assert
  });
});
