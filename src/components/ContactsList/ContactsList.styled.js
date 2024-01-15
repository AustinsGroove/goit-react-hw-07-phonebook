import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    width: 330,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    h2: {
      textAlign: 'center',
    },
    ul: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
    },
    li: {
      display: 'flex',
      gap: 10,
    },
  };
});

export default Wrapper;
