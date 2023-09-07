import React from 'react';

function NotVoted({ data }) {
  const notVotedIds = [];
  let textt = "";
  const displaytext=data.randomText
  displaytext.forEach((item) => {
  console.log(item);
  textt= item.yesNo;
  if (textt === "-") {
    notVotedIds.push(item.Proposalid);
  }
 
  });
  return (
    <div>
     {notVotedIds.length > 0 ? (
        <p>{notVotedIds.join(', ')} is/are  not voted ProposalId's</p>
      ) : (
        <p>All ProposalId's have been voted</p>
      )}
    </div>
  );
}

export default NotVoted;
