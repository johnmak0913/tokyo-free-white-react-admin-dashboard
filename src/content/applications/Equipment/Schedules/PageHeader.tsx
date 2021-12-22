import { Typography } from '@mui/material';

function PageHeader() {
    return (
        <>
            <Typography variant="h3" component="h3" gutterBottom>
                Equipment Schedules
            </Typography>
            <Typography variant="subtitle2">
                View the usage timetable of equipment.
            </Typography>
        </>
    );
}

export default PageHeader;
