import { useState, useCallback } from "react";
import { Button, Form } from "react-bootstrap";

const SignUp = ({ handleClose, onAuthSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = useCallback(() => {
    let newErrors = {};
    if (!/^[a-zA-Z ]{3,}$/.test(formData.fullName))
      newErrors.fullName = "Full Name must be at least 3 characters and contain only letters and spaces";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(formData.password))
      newErrors.password = "Password must be at least 6 characters, include a letter and a number";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords must match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validate()) {
        localStorage.setItem("user", JSON.stringify(formData));
        localStorage.setItem("auth", "true");
        onAuthSuccess(formData);
        handleClose();
      }
    },
    [validate, formData, handleClose, onAuthSuccess]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
          className={errors.fullName ? "is-invalid" : ""}
        />
        <div className="invalid-feedback">{errors.fullName}</div>
      </Form.Group>
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
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
          className={errors.confirmPassword ? "is-invalid" : ""}
        />
        <div className="invalid-feedback">{errors.confirmPassword}</div>
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100">
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUp;
