import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  /* const dish = this.props.selectedDish; */
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg
            width="100%"
            object
            src={dish.image}
            alt={dish.name}
          ></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return null;
  }
}
function RenderComments({ comments }) {
  /* const dish = this.props.selectedDish; */
  if (comments != null) {
    const commentItems = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <ul className="list-unstyled">
            <li>{comment.comment}</li>
            <li>&zwnj;</li>
            <li>
              --{comment.author}{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
            <li>&zwnj;</li>
          </ul>
        </div>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h3>Comments</h3>
        <ul className="list-unstyled">{commentItems}</ul>
      </div>
    );
  } else {
    return <div>Comments are empty.</div>;
  }
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  }
};

export default DishDetail;
