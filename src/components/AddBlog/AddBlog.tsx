import React, { useState } from "react";
import styles from "./style.module.scss";

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    age: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: formData,
      }),
    };

    try {
      const response = await fetch(
        "http://localhost:1337/api/secerts",
        requestOptions
      );
      const result = await response.json();

      if (response.ok) {
        console.log("Data successssfully submitted:", result);
      } else {
        console.error("Error submitting data:", result);
      }
    } catch (error) {
      console.error("An error occurred while submitting:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={4}
            required
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
