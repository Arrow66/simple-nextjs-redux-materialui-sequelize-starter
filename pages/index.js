import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import getConfig from "next/config";
import React from "react";
import { connect } from "react-redux";
import { genFetch } from "../src/utils/helper";
const { publicRuntimeConfig } = getConfig();
import Error from "next/error";
const { API_URL } = publicRuntimeConfig;

//

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  table: {
    minWidth: 650
  },
  container: {
    marginTop: theme.spacing(2)
  }
}));

const Main = props => {
  const classes = useStyles();

  console.log("props", props);

  const { fruits, showError } = props.sample1;

  return (
    <React.Fragment>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            NEXT REDUX MATERIAL UI SEQUELIZE MINIMAL IMPLIMENTATION WITH EXPRESS
            JS
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      {showError ? (
        <Error />
      ) : (
        <Container fixed className={classes.container}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">#</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Variety</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fruits.map((q, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell align="right">{q.fruit_id}</TableCell>
                      <TableCell align="right">{q.name}</TableCell>
                      <TableCell align="right">{q.variety}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({});

Main.getInitialProps = async ({ store, isServer }) => {
  await store.dispatch(genFetch("/getFruits"));
  return { isServer: isServer };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
