import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    backgroundColor: 'white',
    padding: '5px 15px',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 10,
    p: {
      fontSize: 14,
    },
    button: {
      borderRadius: 10,

      borderColor: 'transparent',
    },
  };
});

export default Wrapper;
