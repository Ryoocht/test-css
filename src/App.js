import './App.css';

function App() {

  const styles = {
    boxStyle: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      paddingLeft: '10px',
    },
    cardStyles: {
      background: 'orange',
      width: '300px',
      height: '200px',
    },
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div style={{ width: '100%', background: 'blue', height: '20%' }}>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 30%', height: '80%'}}>
        <div style={{overflowY: 'scroll', overflowX: 'hidden'}}>
          <div style={styles.boxStyle}>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
            <div style={styles.cardStyles}>card</div>
          </div>
        </div>
        <div style={{background: 'green'}}>
        </div>
      </div>
    </div>
  );
}

export default App;
