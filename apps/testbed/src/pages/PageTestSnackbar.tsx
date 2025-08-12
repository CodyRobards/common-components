// import React from 'react';
// import { WavelengthTestSnackbar, WavelengthButton, WavelengthStandardSnackbar } from '@wavelengthusaf/components';

// import CloseIcon from '@mui/icons-material/Close';
// import IconButton from '@mui/material/IconButton';

// function PageWavelengthTestSnackbar() {
//   const [open, toggleOpen] = React.useState(false);
//   const [open1, toggleOpen1] = React.useState(false);

//   return (
//     <>
//       <div>
//         {' '}
//         <WavelengthButton
//           variant={'outlined'}
//           onClick={() => {
//             toggleOpen(!open);

//             console.log('clicked Toggle, ', open);
//           }}
//         >
//           Snackbar
//         </WavelengthButton>
//         <WavelengthButton
//           variant={'outlined'}
//           onClick={() => {
//             toggleOpen1(!open1);

//             console.log('clicked Toggle, ', open1);
//           }}
//         >
//           Snackbar2
//         </WavelengthButton>
//       </div>
//       <WavelengthTestSnackbar
//         img={<CloseIcon />}
//         isPopUpOpen={open}
//         toggleOpen={toggleOpen}
//         type="success"
//         width={window.innerWidth - 100}
//         message="Future Success Message"
//       />
//       <WavelengthStandardSnackbar
//         type="success"
//         show={open1}
//         toggleShow={toggleOpen1}
//         closeIcon={
//           <IconButton size="small" aria-label="close" color="inherit">
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         }
//         width={window.innerWidth - 100}
//         durationSb={100}
//       />
//     </>
//   );
// }

// export default PageWavelengthTestSnackbar;
