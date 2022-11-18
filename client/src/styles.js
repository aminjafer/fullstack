import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',      
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',        
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
      
    },
    image: {
      marginLeft: '15px',
      margin: 'auto',
      //marginTop: '10px',
      width: '40px',
      height: '40px',
      display: 'inline-block'
      
    },
    headerdiv: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center'
    }
}));