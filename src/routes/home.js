import React from "react";
import ReactRedux from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./home.scss";
import { Select, Space } from "antd";
function Home() {
  const balance = useSelector((state) => state.balance);
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom={true}>
          Hello User
        </Typography> 
        <Typography variant="h5" component="h2">
          Your balance is {"\u20B9"} {balance}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" component={Link} to="/statement">
          Statement
        </Button> 
        <Button color="secondary" component={Link} to="/deposit">
          Deposit
        </Button> 
        <Button color="secondary" component={Link} to="/withdraw">
          Withdraw
        </Button> 
        <Select
          placeholder="Loan request"
          style={{ width: 200, textAlign:"center" }}
          options={[{ value: "Personal Loan", label: "Personal Loan" },
          { value: "Gold Loan", label: "Gold Loan" },
          { value: "Property Loan", label: "Property Loan" },
         
          ]}
        />
      </CardActions>
    </Card>
  );
}
export default Home;
