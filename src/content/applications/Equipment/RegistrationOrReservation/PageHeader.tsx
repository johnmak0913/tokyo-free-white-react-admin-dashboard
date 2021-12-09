import { Typography } from '@mui/material';

function PageHeader() {
    // const user =
    // {
    //     name: 'Catherine Pike',
    //     avatar: '/static/images/avatars/1.jpg'
    // };

    return (
        <>
            <Typography variant="h3" component="h3" gutterBottom>
                Equipment Registration / Reservation
            </Typography>
            <Typography variant="subtitle2">
                Register the usage of equipment or reserve session(s) with equipment.
            </Typography>
        </>
    );
}

export default PageHeader;
