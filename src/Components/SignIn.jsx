import { useState, useCallback } from "react";
import { Button, Form } from "react-bootstrap";

const SignIn = ({ handleClose, onAuthSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    let newErrors = {};
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validate()) {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
          localStorage.setItem("auth", "true");
          onAuthSuccess(storedUser);
          handleClose();
        } else {
          setErrors({ password: "Invalid credentials" });
        }
      }
    },
    [validate, formData, handleClose, onAuthSuccess]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          className={errors.email ? "is-invalid" : ""}
        />
        <div className="invalid-feedback">{errors.email}</div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
          className={errors.password ? "is-invalid" : ""}
        />
        <div className="invalid-feedback">{errors.password}</div>
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100">
        Sign In
      </Button>
    </Form>
  );
};

export default SignIn;
