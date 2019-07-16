import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, Tabs, Tab,
        AppBar, Container, CssBaseline } 
        from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import InterviewerModify from './Modify'
import InterviewerNotice from './Notice'
import InterviewerAlive from './Alive'

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
          backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline/>
            <div className={classes.paper}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                    <Tab label="지원현황" />
                    <Tab label="면접목록" />
                    <Tab label="PR관리" />
                    <Tab label="회원정보수정" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer dir={theme.direction}><InterviewerNotice/></TabContainer>}
                {value === 1 && <TabContainer dir={theme.direction}><InterviewerAlive/></TabContainer>}
                {value === 2 && <TabContainer dir={theme.direction}><InterviewerModify/></TabContainer>}
                {value === 3 && <TabContainer dir={theme.direction}><InterviewerModify/></TabContainer>}
            </div>
        </Container>
    );
}