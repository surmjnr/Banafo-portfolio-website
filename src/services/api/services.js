import apiClient from './client';
import { API_ENDPOINTS } from './config';

export const authService = {
  login: (credentials) => 
    apiClient.post(API_ENDPOINTS.AUTH.LOGIN, credentials),
  
  register: (userData) => 
    apiClient.post(API_ENDPOINTS.AUTH.REGISTER, userData),
  
  verifyToken: () => 
    apiClient.get(API_ENDPOINTS.AUTH.VERIFY),
  
  forgotPassword: (email) => 
    apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email }),
  
  resetPassword: (token, password) => 
    apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, { token, password }),
};

export const projectService = {
  getProjects: (params) => 
    apiClient.get(API_ENDPOINTS.PROJECTS.LIST, { params }),
  
  getProject: (id) => 
    apiClient.get(API_ENDPOINTS.PROJECTS.DETAIL(id)),
  
  createProject: (data) => 
    apiClient.post(API_ENDPOINTS.PROJECTS.CREATE, data),
  
  updateProject: (id, data) => 
    apiClient.put(API_ENDPOINTS.PROJECTS.UPDATE(id), data),
  
  deleteProject: (id) => 
    apiClient.delete(API_ENDPOINTS.PROJECTS.DELETE(id)),
};

export const contactService = {
  sendMessage: (data) => 
    apiClient.post(API_ENDPOINTS.CONTACT.SEND, data),
};

export const blogService = {
  getPosts: (params) => 
    apiClient.get(API_ENDPOINTS.BLOG.LIST, { params }),
  
  getPost: (id) => 
    apiClient.get(API_ENDPOINTS.BLOG.DETAIL(id)),
  
  createPost: (data) => 
    apiClient.post(API_ENDPOINTS.BLOG.CREATE, data),
  
  updatePost: (id, data) => 
    apiClient.put(API_ENDPOINTS.BLOG.UPDATE(id), data),
  
  deletePost: (id) => 
    apiClient.delete(API_ENDPOINTS.BLOG.DELETE(id)),
}; 