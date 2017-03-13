CREATE TABLE employees (
id SERIAL PRIMARY KEY,
first_name VARCHAR(80) NOT NULL,
last_name VARCHAR(80) NOT NULL,
id_number int,
job_title VARCHAR(80) NOT NULL,
annual_salary int,
status BOOLEAN DEFAULT true
);

INSERT INTO employees (first_name, last_name, id_number, job_title, annual_salary, status) VALUES ('Chad', 'Sundberg', '1234', 'something', '30000', 'true');
