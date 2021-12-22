import React, { useState, SyntheticEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Card, CardHeader, CardContent, Divider, Box, Tab, Tabs, Typography } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const EquipmentSchedules = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Helmet>
                <title>Equipment - Reg/Rsrv</title>
            </Helmet>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                    paddingTop={5}
                >
                    <Grid item xs={12}>
                        <Card>
                            <PageTitleWrapper>
                                <PageHeader />
                            </PageTitleWrapper>
                            <Divider />
                            <CardContent>
                                <Box sx={{ width: '100%' }}>
                                        <Tabs variant="scrollable"
                                            scrollButtons="auto"
                                            textColor="primary"
                                            indicatorColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="3D Printers" {...a11yProps(0)} />
                                            <Tab label="CNC Milling Machine" {...a11yProps(1)} />
                                            <Tab label="Waterjet Cutting Machine" {...a11yProps(2)} />
                                        </Tabs>
                                    <TabPanel value={value} index={0}>
                                        [3D Printers Timetable]
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        [CNC Milling Machine Timetable]
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        [Waterjet Cutting Machine Timetable]
                                    </TabPanel>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default EquipmentSchedules;
