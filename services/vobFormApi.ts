import { VobForm } from "@/types/types";
import { api } from "./interceptor";

// Create VOB form
export const createVobForm = async (vobForm: VobForm) => {
  try {
    const response = await api.post("/api/vobicu", vobForm);
    return response;
  } catch (error) {
    return error;
  }
};

// Get all VOB forms
export const getVobForms = async () => {
  try {
    const response = await api.get("/api/vobicu");
    return response;
  } catch (error) {
    return error;
  }
};

// Get VOB form by ID
export const getVobFormById = async (id: string) => {
  try {
    const response = await api.get(`/api/vobicu/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

// delete VOB form by ID
export const deleteVobFormById = async (id: string) => {
  try {
    const response = await api.delete(`/api/vobicu/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

// favorite VOB form by ID
export const favoriteVobs = async () => {
  try {
    const response = await api.get(`/api/vobicu/favorites`);
    return response;
  } catch (error) {
    return error;
  }
};

// add to favorites
export const addToFavorites = async (id: string) => {
  try {
    const response = await api.patch(`/api/vobicu/${id}/favorite`);
    return response;
  } catch (error) {
    return error;
  }
};

// remove from favorites
export const removeFromFavorites = async (id: string) => {
  try {
    const response = await api.delete(`/api/vobicu/${id}/favorite`);
    return response;
  } catch (error) {
    return error;
  }
};

// get specific category
export const getByCategory = async (status: string) => {
  try {
    const response = await api.get(`/api/vobicu/category/${status}`);
    return response;
  } catch (error) {
    return error;
  }
};

// move category to TRASH | Starred | Inbox | Sent
export const moveCategory = async (id: string, status: string) => {
  try {
    const response = await api.patch(`/api/vobicu/${id}/status`, { status });
    return response;
  } catch (error) {
    return error;
  }
};
