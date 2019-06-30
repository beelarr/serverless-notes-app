import React from "react";
import { Button, Spinner } from "react-bootstrap";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) => (
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Spinner style={{marginRight: '1rem'}}  animation="border" role="status" />}

    {!isLoading ? text : loadingText}
  </Button>
);
