import axios from "axios";

const url = import.meta.env;

function withHeaders() {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: token,
  };
  return headers;
}

function request({ url, method, inclueHeaders = false, data }) {
  return axios.request({
    url,
    method,
    headers: inclueHeaders ? withHeaders() : {},
    data,
  });
}

// ------------- Categories api ------------- //
export async function fetchCategories() {
  try {
    const response = await request({
      url: `${url}/api/categories`,
      method: "GET",
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function createCategory(category) {
  try {
    const response = await request({
      url: `${url}/api/categories`,
      method: "POST",
      data: category,
      inclueHeaders: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteCategory(categoryId) {
  try {
    const response = await request({
      url: `${url}/api/categories/${categoryId}`,
      method: "DELETE",
      inclueHeaders: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function editCategory(categoryId, newCategory) {
  try {
    const response = await request({
      url: `${url}/api/categories/${categoryId}`,
      method: "PUT",
      data: newCategory,
      inclueHeaders: true,
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

// ------------- Products api ------------- //
export async function fetchProducts() {
  try {
    const response = await request({
      url: `${url}/api/products`,
      method: "GET"
    });
    return response.data;
  } catch(err) {
    console.error(err);
  }
}
export async function createProduct(data) {
  try {
    const resonse = await request({
      url: `${url}/api/products`,
      method: "POST",
      data,
      inclueHeaders: true,
    });
    return resonse;
  } catch (err) {
    console.error(err);
  }
}

export async function getProductById(producId) {
  try {
    const response = await request({
      url: `${url}/api/products/${producId}`,
      method: "GET",
    })
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function editProduct(data, producId) {
  try {
    const response = await request({
      url: `${url}/api/products/${producId}`,
      method: "PUT",
      data,
      inclueHeaders: true
    })
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteProduct(producId) {
  try {
    const response = await request({
      url: `${url}/api/products/${producId}`,
      method: "DELETE",
      inclueHeaders: true
    })
    return response;
  } catch (err) {
    console.error(err);
  }
}
// -------------Auth Routes-------------------//

export async function loginUser(data) {
  try {
    const response = await request({
      url: `${url}/api/auth`,
      method: "POST",
      data
    })
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function registerUser(registerForm) {
  try {
    const response = await request({
      url: `${url}/api/register`,
      method: "POST",
      data: registerForm
    })
    return response;
  } catch (err) {
    console.error(err);
  }
}
