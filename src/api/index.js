import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

export async function createProduct(data) {
  try {
    const resonse = await axios.post(`${url}/api/products`, data);
    return resonse;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductById(producId) {
  try {
    const resonse = await axios.get(`${url}/api/products/${producId}`);
    return resonse;
  } catch (err) {
    console.log(err);
  }
}

export async function editProduct(data, producId) {
  try {
    const resonse = await axios.put(`${url}/api/products/${producId}`, data);
    return resonse;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteProduct(producId) {
  try {
    const resonse = await axios.delete(`${url}/api/products/${producId}`);
    return resonse;
  } catch (err) {
    console.log(err);
  }
}

export async function registerUser(registerForm) {
  try {
    // const response = await axios.post(`${url}/api/register`);
    return { sucess: true };
  } catch (err) {
    console.log(err);
  }
}
