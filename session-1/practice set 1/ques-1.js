const userAge = 18;

const isUserEligibleToVote = (userage) =>
  userage >= 18
    ? `User is eligible to vote`
    : `Nope! User is not eligible to vote`;

console.log(isUserEligibleToVote(userAge));
