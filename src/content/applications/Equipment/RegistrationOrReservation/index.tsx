import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import { Container, Grid, Card, CardHeader, CardContent, Divider, InputLabel, MenuItem, FormControl, InputAdornment, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Footer from 'src/components/Footer';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import TimePicker from '@mui/lab/TimePicker';
import { styled } from '@mui/material/styles';

const EquipmentRegistrationOrReservation = () => {
    const [projectType, setProjectType] = useState('');
    const [equipment, setEquipment] = useState('');
    const [printerModel, setPrinterModel] = useState('');
    const [estimatedDuration, setEstimatedDuration] = useState(null);
    const [stlFile, setStlFile] = useState(' ')
    const [staffResponsible, setStaffResponsible] = useState('')
    const CCF = "Coursework / Capstone / Final year projects";
    const FIELD_WIDTH = "40%";
    const FIELD_MIN_WIDTH = 260;
    const FIELD_MAX_WIDTH = 460;
    const ref = useRef(null);

    const THREE_D_PRINTER = "3D Printer";

    const AcademicAdvisorField = () => {
        return (
            <TextField
                required
                id="academic-advisor"
                label="Academic Supervisor"
            />
        )
    };
    const SupervisorEmailField = () => {
        return (
            <TextField
                required
                id="supervisor-email"
                label="Supervisor Email"
            />
        )
    };

    const PrinterModelField = () => {
        return (
            <FormControl sx={{ m: 1, width: FIELD_WIDTH, minWidth: FIELD_MIN_WIDTH, maxWidth: FIELD_MAX_WIDTH }}>
                <InputLabel id="demo-simple-select-required-label">Printer Model*</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label"
                    id="printer-model"
                    value={printerModel}
                    label="Printer Model"
                    onChange={(e: SelectChangeEvent) => setPrinterModel(e.target.value.toString())}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ultimaker S5 (A)</MenuItem>
                    <MenuItem value={20}>Ultimaker S5 (B)</MenuItem>
                    <MenuItem value={30}>Ultimaker 2 extended+ (A)</MenuItem>
                    <MenuItem value={40}>Raiser 3D pro 2+ (A)</MenuItem>
                    <MenuItem value={50}>Raiser 3D pro 2+ (B)</MenuItem>
                    <MenuItem value={60}>Ender 3 V2</MenuItem>
                    <MenuItem value={70}>Ender 5 Plus (A)</MenuItem>
                    <MenuItem value={80}>Ender 5 Plus (B)</MenuItem>
                </Select>
            </FormControl>
        )
    };

    const SubmitButton = () => {
        return (
            <FormControl sx={{ m: 1, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <Button variant="contained" component="span" color="primary" size="medium">
                    Submit
                </Button>
            </FormControl>
        )
    };

    const equipmentFieldsRenderSwitch = () => {
        switch (equipment) {
            case THREE_D_PRINTER:
                return <><ThreeDPrinterFields /><SubmitButton /></>;
            default:
                return <></>;
        }
    };

    const Input = styled('input')({
        display: 'none',
    });

    const ThreeDPrinterFields = () => {
        return (
            <>
                <TimePicker
                    ampm={false}
                    openTo="hours"
                    views={['hours', 'minutes']}
                    inputFormat="HH:mm"
                    mask="__:__"
                    label="Estimated Duration*"
                    value={estimatedDuration}
                    onChange={(newValue) => {
                        setEstimatedDuration(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TextField
                    required
                    id="estimated-material"
                    label="Estimated Material"
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">g</InputAdornment>
                    }}
                />
                <TextField
                    id="outlined-read-only-input"
                    label=".stl File*"
                    defaultValue={stlFile}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <FormControl sx={{ m: 1, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                    <label htmlFor="contained-button-file">
                        <Input id="contained-button-file" multiple type="file" ref={ref} onChange={() => { setStlFile(ref.current.value.substring(12)) }} />
                        <Button variant="contained" component="span" color="secondary" size="medium">
                            Upload
                        </Button>
                    </label>
                </FormControl>
                <FormControl sx={{ m: 1, width: FIELD_WIDTH, minWidth: FIELD_MIN_WIDTH, maxWidth: FIELD_MAX_WIDTH }}>
                    <InputLabel id="demo-simple-select-required-label">Staff Responsible*</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="staff-responsible"
                        value={staffResponsible}
                        label="Staff Responsible"
                        onChange={(e: SelectChangeEvent) => setStaffResponsible(e.target.value.toString())}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>[CIVIL] Mr. Kuen Ni</MenuItem>
                        <MenuItem value={20}>[CS] Mr. Charlie Chan</MenuItem>
                        <MenuItem value={30}>[EEE] Mr. WK Leung</MenuItem>
                        <MenuItem value={40}>[ME] Mr. K P Kwok</MenuItem>
                        <MenuItem value={50}>[IMSE] Mr. Sam Cheng</MenuItem>
                    </Select>
                </FormControl>
            </>
        )
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
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: FIELD_WIDTH, minWidth: FIELD_MIN_WIDTH, maxWidth: FIELD_MAX_WIDTH },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <FormControl sx={{ m: 1, width: FIELD_WIDTH, minWidth: FIELD_MIN_WIDTH, maxWidth: FIELD_MAX_WIDTH }}>
                                            <InputLabel id="demo-simple-select-required-label">Project Type*</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-required-label"
                                                id="project-type"
                                                value={projectType}
                                                label="Project Type"
                                                onChange={(e: SelectChangeEvent) => setProjectType(e.target.value.toString())}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Just trying to learn some hands-on skills</MenuItem>
                                                <MenuItem value={20}>Training - Work on training materials</MenuItem>
                                                <MenuItem value={30}>ENGG 1320 Hands-on Projects</MenuItem>
                                                <MenuItem value={40}>{CCF}</MenuItem>
                                                <MenuItem value={50}>Postgraduate research Project</MenuItem>
                                                <MenuItem value={60}>Innovation Wing Office</MenuItem>
                                                <MenuItem value={70}>[SIG] HKU RoboMaster</MenuItem>
                                                <MenuItem value={80}>[Thematic workshop 1] Smart technologies</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl sx={{ m: 1, width: FIELD_WIDTH, minWidth: FIELD_MIN_WIDTH, maxWidth: FIELD_MAX_WIDTH }}>
                                            <InputLabel id="demo-simple-select-required-label">Equipment*</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-required-label"
                                                id="equipment"
                                                value={equipment}
                                                label="Equipment"
                                                onChange={(e: SelectChangeEvent) => setEquipment(e.target.value.toString())}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={THREE_D_PRINTER}>[Registration] 3D printer</MenuItem>
                                                <MenuItem value={20}>[Registration] Acrylic laser cutting and engraving machine</MenuItem>
                                                <MenuItem value={30}>[Reservation] CNC milling machine</MenuItem>
                                                <MenuItem value={40}>[Reservation] Lathe machine</MenuItem>
                                                <MenuItem value={50}>[Reservation] Podcast studio</MenuItem>
                                                <MenuItem value={60}>[Reservation] Waterjet cutting machine</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {equipment === THREE_D_PRINTER ? <><PrinterModelField /></> : <></>}
                                        {projectType === "40" ? <><AcademicAdvisorField />{/*<SupervisorEmailField />*/}</> : <></>}
                                        <TextField
                                            id="purpose"
                                            label="Purpose*"
                                            multiline
                                            fullWidth
                                            rows={4}
                                        />
                                    </div>
                                </Box>
                            </CardContent>
                            <Divider />
                            <CardContent>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: FIELD_WIDTH, minWidth: FIELD_MIN_WIDTH, maxWidth: FIELD_MAX_WIDTH },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        {equipmentFieldsRenderSwitch()}
                                    </div>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default EquipmentRegistrationOrReservation;
