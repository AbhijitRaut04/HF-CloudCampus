import React, { useState, useEffect } from 'react';

const Election = () => {
  const durationInSeconds = 10;
  const [isElectionOver, setIsElectionOver] = useState(false);
  const [votes, setVotes] = useState({ 1: 0, 2: 0, 3: 0 });
  const [hasVoted, setHasVoted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  const candidates = [
    {
      id: 1,
      name: 'Alice Sharma',
      party: 'Democratic Unity',
      image: 'https://via.placeholder.com/80?text=Alice'
    },
    {
      id: 2,
      name: 'Ravi Patel',
      party: 'Progress Front',
      image: 'https://via.placeholder.com/80?text=Ravi'
    },
    {
      id: 3,
      name: 'Sneha Joshi',
      party: "People's Voice",
      image: 'https://via.placeholder.com/80?text=Sneha'
    }
  ];

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsElectionOver(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVote = (id) => {
    if (hasVoted || isElectionOver) return;
    setVotes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setHasVoted(true);
  };

  const totalVotes = Object.values(votes).reduce((sum, v) => sum + v, 0);
  const results = candidates.map(c => ({ ...c, votes: votes[c.id] }));
  const winner = results.reduce((prev, curr) => (prev.votes > curr.votes ? prev : curr));

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const styles = {
    container: {
      width: '100%',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f8ff',
      boxSizing: 'border-box'
    },
    heading: {
      textAlign: 'center',
      marginBottom: '10px',
      color: '#000'
    },
    timer: {
      textAlign: 'center',
      fontSize: '18px',
      marginBottom: '20px',
      color: '#ffa500'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      border: '2px solid #ffa500',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '15px',
      gap: '15px',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      color: '#000'
    },
    img: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #87ceeb'
    },
    info: {
      flexGrow: 1
    },
    voteInfo: {
      textAlign: 'right'
    },
    winnerBox: {
      textAlign: 'center',
      marginTop: '20px',
      padding: '10px',
      border: '2px solid green',
      borderRadius: '10px',
      backgroundColor: '#e6ffe6',
      color: '#006600'
    },
    voteButton: {
      padding: '6px 12px',
      backgroundColor: hasVoted ? '#ccc' : '#ffa500',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: hasVoted ? 'not-allowed' : 'pointer',
      marginTop: '8px'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        {isElectionOver ? 'Election Results' : 'Election Candidates'}
      </h2>
      {!isElectionOver && (
        <div style={styles.timer}>⏳ Time Left: {formatTime(timeLeft)}</div>
      )}

      {!isElectionOver ? (
        <ul style={styles.list}>
          {candidates.map(candidate => (
            <li key={candidate.id} style={styles.card}>
              <img src={candidate.image} alt={candidate.name} style={styles.img} />
              <div style={styles.info}>
                <h3>{candidate.name}</h3>
                <p>Party: {candidate.party}</p>
                <button
                  style={styles.voteButton}
                  disabled={hasVoted}
                  onClick={() => handleVote(candidate.id)}
                >
                  {hasVoted ? 'Voted' : 'Vote'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <ul style={styles.list}>
            {results.map(candidate => (
              <li key={candidate.id} style={styles.card}>
                <img src={candidate.image} alt={candidate.name} style={styles.img} />
                <div style={styles.info}>
                  <h3>{candidate.name}</h3>
                  <p>Party: {candidate.party}</p>
                </div>
                <div style={styles.voteInfo}>
                  <strong>{candidate.votes} votes</strong><br />
                  <span>{totalVotes === 0 ? '0.0' : ((candidate.votes / totalVotes) * 100).toFixed(1)}%</span>
                </div>
              </li>
            ))}
          </ul>
          <div style={styles.winnerBox}>
            <h3>🏆 Winner: {winner.name}</h3>
            <p>({winner.party})</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Election;
